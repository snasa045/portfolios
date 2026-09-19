import { projects, projectGallery, assetUrl } from '../data/portfolio';
import { Link } from 'react-router-dom';

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
        {projects.map((p) => {
          const image = projectGallery[p.slug]?.[0];
          return (
            <article
              key={p.slug}
              className="work-card"
              style={{ ['--accent' as string]: p.accent }}
            >
              <Link to={`/project/${p.slug}`} className="work-card-link">
                {image && (
                  <div className="work-thumb">
                    <img src={assetUrl(image)} alt="" loading="lazy" />
                  </div>
                )}
                <div className="work-content">
                  <span className="work-meta">{p.meta}</span>
                  <h3>{p.title}</h3>
                  <p className="work-outcome">{p.outcome}</p>
                  <p className="work-desc">{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
