import { useState } from 'react';
import Reveal from '../components/Reveal';
import SupportingDialog from '../components/SupportingDialog';
import { supportingProjects } from '../data/projects';
import { statusLabel, type SupportingProject } from '../types/portfolio';

type Origin = { left: number; top: number; width: number; height: number };

export default function SupportingWork() {
  const [active, setActive] = useState<{ project: SupportingProject; origin: Origin } | null>(null);

  const open = (project: SupportingProject, trigger: HTMLElement) => {
    const card = trigger.closest('li') ?? trigger;
    const { left, top, width, height } = card.getBoundingClientRect();
    setActive({ project, origin: { left, top, width, height } });
  };

  return (
    <section className="section" id="earlier">
      <Reveal as="header" className="section-head">
        <h2>Earlier work and explorations</h2>
        <p>Sprints, concepts, and coursework from 2020. Open one to read the full story.</p>
      </Reveal>
      <Reveal as="ul" className="supporting" delay={90} role="list">
        {supportingProjects.map((p) => (
          <li key={p.id} className={active?.project.id === p.id ? 'is-source' : undefined}>
            <h3>
              <button
                type="button"
                onClick={(event) => open(p, event.currentTarget)}
                aria-label={`${p.title} — read the full story`}
              >
                {p.title}
              </button>
            </h3>
            <p>{p.blurb}</p>
            <p className="supporting-meta">
              <span className={`status status-${p.status}`}>{statusLabel[p.status]}</span>
              <span>{p.timeframe}</span>
            </p>
            <p className="supporting-cta" aria-hidden="true">
              Read the full story <span>→</span>
            </p>
          </li>
        ))}
      </Reveal>
      <SupportingDialog
        project={active?.project ?? null}
        origin={active?.origin ?? null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
