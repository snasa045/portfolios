import ProjectMedia from './ProjectMedia';
import type { CaseSection } from '../types/portfolio';

/** Content only — headings, numbering, and reveal animation belong to the calling surface. */
export default function SectionBody({ section }: { section: CaseSection }) {
  if (section.kind === 'text') {
    return (
      <div className="case-chapter-copy">
        {section.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (section.kind === 'figure') return <ProjectMedia figure={section.figure} />;

  if (section.kind === 'comparison') {
    return (
      <div className="comparison">
        <ProjectMedia figure={section.before} />
        <ProjectMedia figure={section.after} />
      </div>
    );
  }

  return (
    <ul>
      {section.items.map((outcome) => (
        <li key={outcome.label}>{outcome.label}</li>
      ))}
    </ul>
  );
}
