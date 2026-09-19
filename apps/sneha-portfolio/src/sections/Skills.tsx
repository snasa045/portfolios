import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <span className="eyebrow">02 — Skills</span>
      <h2>What I work with</h2>
      <ul className="pill-list">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
