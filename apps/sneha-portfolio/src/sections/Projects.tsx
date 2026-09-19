import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2>
          Selected <em>work</em>
        </h2>
        <p>
          End-to-end stories: research, flows, prototypes, and measured outcomes —
          not just screens.
        </p>
      </div>
      <div className="work-list">
        {projects.map((p) => (
          <article
            key={p.title}
            className="work-card"
            style={{ ['--accent' as string]: p.accent }}
          >
            <span className="work-meta">{p.meta}</span>
            <h3>{p.title}</h3>
            <p className="work-outcome">{p.outcome}</p>
            <p className="work-desc">{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
