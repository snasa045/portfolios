import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <span className="eyebrow">04 — Contact</span>
      <h2>Let’s work together</h2>
      <p className="muted">
        Best way to reach me is email at{' '}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          Say hello
        </a>
        {profile.socials.map((s) => (
          <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
