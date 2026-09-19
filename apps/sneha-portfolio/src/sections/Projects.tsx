import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <span className="eyebrow">03 — Projects</span>
      <h2>Selected work</h2>
      <div className="card-grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
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
