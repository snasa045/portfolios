import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <span className="eyebrow">01 — About</span>
      <h2>{about.heading}</h2>
      {about.body.map((p, i) => (
        <p key={i} className="muted">
          {p}
        </p>
      ))}
    </section>
  );
}
