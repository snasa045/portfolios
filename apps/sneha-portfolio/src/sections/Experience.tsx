import { experience, education } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2>
          How I work <em>inside teams</em>
        </h2>
        <p>Product owners, developers, clients — milestones, strategy, shipped phases.</p>
      </div>
      <div className="exp-grid">
        <div className="exp-card">
          {experience.map((e) => (
            <div key={e.role} className="exp-item">
              <span className="period">{e.period}</span>
              <h4>{e.role}</h4>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="edu-card">
          <h4>Education — engineering → spatial → UX</h4>
          <ul>
            {education.map((ed) => (
              <li key={ed}>{ed}</li>
            ))}
          </ul>
          <p className="muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Technical fluency + visual craft + human-centred method. That combination is
            the portfolio story.
          </p>
        </div>
      </div>
    </section>
  );
}
