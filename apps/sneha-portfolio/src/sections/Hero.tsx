import { profile, heroStats } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <p className="eyebrow">Sneha Jadhav — Toronto · UI/UX & Product</p>
      <h1>
        Design for software that got <em>complicated.</em>
      </h1>
      <p className="role-line">
        <strong>{profile.role}</strong> · research → strategy → interaction → visual → testing
      </p>
      <p className="positioning">{profile.positioning}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          See selected work
        </a>
        <a className="btn btn-accent" href={`mailto:${profile.email}`}>
          Start a conversation
        </a>
        <a className="btn btn-ghost" href={profile.website} target="_blank" rel="noreferrer">
          snehajadhav.me ↗
        </a>
      </div>
      <div className="stats">
        {heroStats.map((s) => (
          <div key={s.label} className="stat">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="location-row">
        <span>{profile.location}</span>
        <span>·</span>
        <span>{profile.email}</span>
        <span>·</span>
        <span>Currently open to product roles</span>
      </div>
    </section>
  );
}
