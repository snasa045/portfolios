import { supportingProjects } from '../data/projects';
import { statusLabel } from '../types/portfolio';
import Reveal from '../components/Reveal';

export default function SupportingWork() {
  return (
    <section className="section" id="earlier">
      <Reveal as="header" className="section-head">
        <h2>Earlier work and explorations</h2>
        <p>Sprints, concepts, and coursework from 2020.</p>
      </Reveal>
      <Reveal as="ul" className="supporting" delay={90}>
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
      </Reveal>
    </section>
  );
}
