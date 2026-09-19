import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-head">
        <h2>
          About <em>Sneha</em>
        </h2>
        <p>Quick learner, loves challenging work, meets delivery timelines.</p>
      </div>

      <div className="about-phases">
        {about.journey.map((phase, i) => (
          <div key={phase.title} className="phase-card">
            <div className="phase-number">{i + 1}</div>
            <div className="phase-content">
              <h3>{phase.title}</h3>
              <p>{phase.detail}</p>
            </div>
          </div>
        ))}
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
      </div>

      <div className="about-values">
        <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.25rem', fontWeight: 500, margin: '0 0 1rem', color: 'var(--ink)' }}>
          What I look for in the work
        </h4>
        <ul className="values-list">
          <li>
            <strong>Whether the work keeps guiding people long after the project ends.</strong>
            Not whether the deliverables were good, but whether the team is better at this than it was.
          </li>
          <li>
            <strong>Complicated problems are the favorite kind.</strong>
            Enterprise platforms, design systems, operational workflows, accessibility at scale.
          </li>
          <li>
            <strong>Design and build aren't separate jobs.</strong>
            The gap between thinking and making should be as small as possible.
          </li>
        </ul>
      </div>
    </section>
  );
}