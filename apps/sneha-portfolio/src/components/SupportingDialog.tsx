import { useCallback, useEffect, useRef, useState } from 'react';
import ProjectMedia from './ProjectMedia';
import SectionBody from './SectionBody';
import { isMediaSection, statusLabel, type SupportingProject } from '../types/portfolio';

/** Matches the geometry transition on .supporting-dialog.is-settling. */
const FLIP_MS = 700;

type Rect = { left: number; top: number; width: number; height: number };

type Props = {
  project: SupportingProject | null;
  /** Viewport rect of the card that opened it — the panel grows out of, and back into, this. */
  origin: Rect | null;
  onClose: () => void;
};

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const applyRect = (el: HTMLElement, r: Rect) => {
  el.style.left = `${r.left}px`;
  el.style.top = `${r.top}px`;
  el.style.width = `${r.width}px`;
  el.style.height = `${r.height}px`;
};

const clearRect = (el: HTMLElement) => {
  el.style.left = el.style.top = el.style.width = el.style.height = '';
};

export default function SupportingDialog({ project, origin, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLElement>(null);
  const closingRef = useRef(false);
  const timerRef = useRef(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    const body = bodyRef.current;
    if (!dialog || !project) return;

    dialog.showModal();
    dialog.scrollTop = 0; // the element is reused between projects, so it keeps the last scroll
    // Land focus on the panel, not the close button — showModal would ring it like an error.
    body?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    if (origin && body && !prefersReducedMotion()) {
      const target = dialog.getBoundingClientRect();
      body.style.width = `${target.width}px`;
      dialog.classList.add('is-animating');
      applyRect(dialog, origin);
      void dialog.offsetWidth; // commit the start frame before the transition is attached
      dialog.classList.add('is-settling');
      applyRect(dialog, target);

      timerRef.current = window.setTimeout(() => {
        dialog.classList.remove('is-animating', 'is-settling');
        clearRect(dialog);
        body.style.width = '';
      }, FLIP_MS);
    }

    return () => {
      window.clearTimeout(timerRef.current);
      document.body.style.overflow = overflow;
    };
  }, [project, origin]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;

    const sections = Array.from(
      dialog.querySelectorAll<HTMLElement>('[data-archive-section]'),
    );
    const updateActiveSection = () => {
      const reachedEnd = dialog.scrollTop + dialog.clientHeight >= dialog.scrollHeight - 1;
      if (reachedEnd) {
        setActiveSection(sections.length - 1);
        return;
      }

      const marker =
        dialog.getBoundingClientRect().top + Math.min(220, dialog.clientHeight * 0.32);
      const nextSection = sections.reduce(
        (current, section, index) =>
          section.getBoundingClientRect().top <= marker ? index : current,
        0,
      );
      setActiveSection(nextSection);
    };

    setActiveSection(0);
    updateActiveSection();
    dialog.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => dialog.removeEventListener('scroll', updateActiveSection);
  }, [project]);

  const scrollToSection = useCallback((index: number) => {
    const dialog = dialogRef.current;
    const section = dialog?.querySelector<HTMLElement>(`[data-archive-section="${index}"]`);
    if (!dialog || !section) return;

    const dialogTop = dialog.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;
    const isFinalSection = !section.nextElementSibling;
    dialog.scrollTo({
      top: isFinalSection ? dialog.scrollHeight : dialog.scrollTop + sectionTop - dialogTop,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, []);

  const requestClose = useCallback(() => {
    const dialog = dialogRef.current;
    const body = bodyRef.current;
    if (!dialog || closingRef.current) return;

    const finish = () => {
      closingRef.current = false;
      dialog.classList.remove('is-animating', 'is-settling', 'is-closing');
      clearRect(dialog);
      if (body) body.style.transform = body.style.width = '';
      dialog.close();
      onClose();
    };

    if (!origin || !body || prefersReducedMotion()) {
      finish();
      return;
    }

    closingRef.current = true;
    window.clearTimeout(timerRef.current);

    const current = dialog.getBoundingClientRect();
    // Clipping to a shrinking box would snap a scrolled panel to the top; hold it in place instead.
    body.style.transform = `translateY(${-dialog.scrollTop}px)`;
    body.style.width = `${current.width}px`;
    dialog.classList.add('is-animating');
    applyRect(dialog, current);
    void dialog.offsetWidth;
    dialog.classList.add('is-settling', 'is-closing');
    applyRect(dialog, origin);

    timerRef.current = window.setTimeout(finish, FLIP_MS);
  }, [origin, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="supporting-dialog"
      aria-labelledby="supporting-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) requestClose();
      }}
    >
      {project && (
        <article className="supporting-dialog-body" ref={bodyRef} tabIndex={-1}>
          <aside className="supporting-archive-spine">
            <button
              type="button"
              className="supporting-dialog-close"
              onClick={requestClose}
              aria-label={`Close ${project.title}`}
            >
              <span aria-hidden="true">×</span>
            </button>

            <header className="supporting-dialog-head">
              <p className="supporting-archive-file">Project file</p>
              <h2
                id="supporting-dialog-title"
                className={
                  project.title.split(/\s+/).some((word) => word.length >= 10)
                    ? 'supporting-dialog-title-compact'
                    : undefined
                }
              >
                {project.title}
              </h2>
              <p className="supporting-meta">
                <span className={`status status-${project.status}`}>
                  {statusLabel[project.status]}
                </span>
                <span>{project.timeframe}</span>
              </p>
              <p className="supporting-dialog-context">{project.context}</p>
              <p className="supporting-dialog-role">{project.role}</p>
            </header>

            <section
              className="supporting-archive-index"
              aria-labelledby={`supporting-${project.id}-contents`}
            >
              <h3 className="sr-only" id={`supporting-${project.id}-contents`}>
                Project contents
              </h3>
              <ol role="list">
                {project.sections.map((section, index) => (
                  <li key={section.heading ?? index}>
                    <button
                      type="button"
                      aria-controls={`supporting-${project.id}-section-${index}`}
                      aria-current={activeSection === index ? 'step' : undefined}
                      onClick={() => scrollToSection(index)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {section.heading ?? 'Project artifact'}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    aria-controls={`supporting-${project.id}-section-${project.sections.length}`}
                    aria-current={
                      activeSection === project.sections.length ? 'step' : undefined
                    }
                    onClick={() => scrollToSection(project.sections.length)}
                  >
                    <span>{String(project.sections.length + 1).padStart(2, '0')}</span>
                    What came of it
                  </button>
                </li>
              </ol>
            </section>
          </aside>

          <div className="supporting-archive-desk">
            <div className="supporting-archive-canvas">
              <section className="supporting-evidence-sheet supporting-archive-cover">
                <ProjectMedia figure={project.cover} eager />
              </section>

              {project.sections.map((section, index) => (
                <section
                  key={section.heading ?? index}
                  id={`supporting-${project.id}-section-${index}`}
                  data-archive-section={index}
                  className={`supporting-evidence-sheet${
                    isMediaSection(section) ? ' supporting-evidence-media' : ''
                  }`}
                >
                  <span className="supporting-evidence-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="supporting-evidence-content">
                    {section.heading && <h3>{section.heading}</h3>}
                    <SectionBody section={section} />
                  </div>
                </section>
              ))}

              <section
                id={`supporting-${project.id}-section-${project.sections.length}`}
                className="supporting-evidence-sheet supporting-dialog-outcomes"
                data-archive-section={project.sections.length}
              >
                <span className="supporting-evidence-number" aria-hidden="true">
                  {String(project.sections.length + 1).padStart(2, '0')}
                </span>
                <div className="supporting-evidence-content">
                  <h3>What came of it</h3>
                  <ul role="list">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome.label}>
                        {outcome.value && <strong>{outcome.value}</strong>} {outcome.label}
                        {outcome.kind !== 'result' && <em> ({outcome.kind})</em>}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </article>
      )}
    </dialog>
  );
}
