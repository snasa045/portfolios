import { supportingProjects } from '../data/projects';
import { statusLabel } from '../types/portfolio';

export default function SupportingWork() {
  return (
    <section className="section" id="earlier">
      <header className="section-head">
        <h2>Earlier work and explorations</h2>
        <p>Sprints, concepts, and coursework from 2020.</p>
      </header>
      <ul className="supporting">
        {supportingProjects.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <p className="supporting-meta">
              <span className={`status status-${p.status}`}>{statusLabel[p.status]}</span>
              <span>{p.timeframe}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
