import { howIWork } from '../data/portfolio';

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section how-i-work">
      <div className="section-head">
        <h2>
          How I work <em>inside a product organization</em>
        </h2>
        <p>Nearly all of this is done with product owners, engineers, analysts, and stakeholders — on products none of us own alone. Four things I bring to a team.</p>
      </div>
      <div className="hiw-grid">
        {howIWork.map((item) => (
          <article key={item.number} className="hiw-card">
            <div className="hiw-number">{item.number}</div>
            <div className="hiw-content">
              <h3>{item.title}</h3>
              <p className="hiw-desc">{item.description}</p>
              <ul className="hiw-details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}