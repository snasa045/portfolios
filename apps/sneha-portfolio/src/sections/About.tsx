import { Link } from 'react-router-dom';
import { about, assetUrl, capabilities, education, experience } from '../data/portfolio';
import PortraitTilt from '../components/PortraitTilt';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal as="header" className="section-head">
        <h2>{about.heading}</h2>
      </Reveal>

      <Reveal className="about-grid" delay={80}>
        <div className="about-story">
          <PortraitTilt src={assetUrl('images/sneha-portrait-400.webp')} alt="Sneha Jadhav" />
          {about.body.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}

          <aside className="about-system-callout">
            <div>
              <p className="about-system-label">Behind this portfolio</p>
              <p>Explore the shared colours, project palettes, and accessible contrast pairings.</p>
            </div>
            <Link className="about-system-link" to="/colour-palette">
              View the portfolio design system
              <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <div className="capabilities">
            {capabilities.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                <ul className="plain">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about-side">
          <h3>Experience</h3>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={`${e.org}-${e.period}`}>
                <p className="timeline-role">
                  {e.role} · <span>{e.org}</span>
                </p>
                <p className="timeline-period">
                  {e.period} · {e.place}
                </p>
              </li>
            ))}
          </ul>

          <h3>Education</h3>
          <ul className="plain">
            {education.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
