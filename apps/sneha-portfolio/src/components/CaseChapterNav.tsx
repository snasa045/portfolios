import { useEffect, useState } from 'react';

type Chapter = { id: string; label: string };

export default function CaseChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveChapter = () => {
      const marker = Math.min(220, window.innerHeight * 0.35);
      const current = sections.reduce(
        (selected, section) => (section.getBoundingClientRect().top <= marker ? section : selected),
        sections[0],
      );
      if (current) setActive(current.id);
    };

    updateActiveChapter();
    window.addEventListener('scroll', updateActiveChapter, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveChapter);
  }, [chapters]);

  return (
    <nav className="case-chapter-nav" aria-label="Case study chapters">
      <ol role="list">
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              aria-current={active === chapter.id ? 'true' : undefined}
              onClick={() => setActive(chapter.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
