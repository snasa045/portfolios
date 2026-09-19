import { builtEndToEnd, assetUrl } from '../data/portfolio';

export default function BuiltEndToEnd() {
  return (
    <section id="built-end-to-end" className="section built-end-to-end">
      <div className="section-head">
        <h2>
          Built end to <em>end</em>
        </h2>
        <p>Real products, not concepts: designed, built, and handed over — each left with the team and a way to keep it current without me.</p>
      </div>
      <div className="bete-grid">
        {builtEndToEnd.map((item) => (
          <article
            key={item.title}
            className={`bete-card${item.image ? '' : ' bete-card--text'}`}
          >
            {item.image && (
              <div className="bete-image">
                <img src={assetUrl(item.image)} alt={item.title} loading="lazy" />
              </div>
            )}
            <div className="bete-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="bete-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
