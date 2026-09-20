import type { Outcome } from '../types/portfolio';
import Reveal from './Reveal';

type Props = {
  id: string;
  reflection: string[];
  outcomes: Outcome[];
};

export default function CaseClosing({ id, reflection, outcomes }: Props) {
  return (
    <Reveal as="section" id={id} className="case-closing">
      <div>
        <p className="case-section-label">Outcome</p>
        <h2>What changed</h2>
        <ul>
          {outcomes.map((outcome) => (
            <li key={outcome.label}>
              {outcome.value && <strong>{outcome.value}</strong>} {outcome.label}
              {outcome.kind !== 'result' && <em> ({outcome.kind})</em>}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="case-section-label">Reflection</p>
        <h2>What I would change</h2>
        {reflection.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Reveal>
  );
}
