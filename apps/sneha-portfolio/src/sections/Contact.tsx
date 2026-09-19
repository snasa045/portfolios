import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <p className="eyebrow" style={{ color: '#e7c4b8' }}>
          Tell me about the role
        </p>
        <h2>
          Let’s make the <em>complicated</em> feel clear.
        </h2>
        <p>
          I’m looking for UI/UX / product roles where research, systems thinking, and
          hands-on making overlap. Send a few lines about your team and what you’re
          building — I reply fast.
        </p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={`mailto:${profile.email}?subject=Product%20conversation`}>
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
