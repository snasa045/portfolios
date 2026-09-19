import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2>
          About <em>Sneha</em>
        </h2>
        <p>Quick learner, loves challenging work, meets delivery timelines.</p>
      </div>
      <div className="about-grid">
        <div className="about-prose">
          <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: '1.5rem', margin: '0 0 0.8rem' }}>
            {about.heading}
          </h3>
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="journey">
          {about.journey.map((j) => (
            <div key={j.title} className="journey-card">
              <b>{j.title}</b>
              <p>{j.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
