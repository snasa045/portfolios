import { skillsGrouped } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2>
          Capabilities, <em>not just tools</em>
        </h2>
        <p>Research to documentation — methods I can show in case studies.</p>
      </div>
      <div className="skill-groups">
        {skillsGrouped.map((g) => (
          <div key={g.title} className="skill-group">
            <h4>{g.title}</h4>
            <ul className="pill-list">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
