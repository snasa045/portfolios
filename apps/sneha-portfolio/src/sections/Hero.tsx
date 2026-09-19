import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <p className="eyebrow">Hello, I’m</p>
      <h1>{profile.name}</h1>
      <h2 className="role">{profile.role}</h2>
      <p className="tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View work
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in touch
        </a>
      </div>
      <p className="location">{profile.location}</p>
    </section>
  );
}
