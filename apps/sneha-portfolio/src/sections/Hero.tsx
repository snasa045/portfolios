import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">{profile.role} · Toronto</p>
      <h1>{profile.headline}</h1>
      <p className="hero-intro">{profile.intro}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          View selected work
        </a>
        <a className="btn" href="#about">
          About me
        </a>
      </div>
    </section>
  );
}
