import { Link, useParams } from 'react-router-dom';
import ProjectMedia from '../components/ProjectMedia';
import { featuredProjects, projectBySlug } from '../data/projects';
import { statusLabel, type CaseSection } from '../types/portfolio';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? projectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const index = featuredProjects.findIndex((p) => p.slug === project.slug);
  const next = featuredProjects[(index + 1) % featuredProjects.length];

  return (
    <article className="case">
      <header className="case-head">
        <p className="case-meta">
          <span className={`status status-${project.status}`}>{statusLabel[project.status]}</span>
          <span>{project.timeframe}</span>
        </p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <dl className="case-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          {project.team && (
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
          )}
          <div>
            <dt>Timeframe</dt>
            <dd>{project.timeframe}</dd>
          </div>
        </dl>
      </header>

      {project.cover && <ProjectMedia figure={project.cover} eager className="case-cover" />}

      <div className="case-body">
        {project.sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}

        {project.outcomes.length > 0 && (
          <section className="case-outcomes">
            <h2>Outcome</h2>
            <ul>
              {project.outcomes.map((o) => (
                <li key={o.label}>
                  {o.value && <strong>{o.value}</strong>} {o.label}
                  {o.kind !== 'result' && <em className="outcome-kind"> ({o.kind})</em>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <nav className="case-nav">
        <Link to="/">← Back to work</Link>
        <Link to={`/project/${next.slug}`}>Next: {next.title} →</Link>
      </nav>
    </article>
  );
}

function Section({ section }: { section: CaseSection }) {
  if (section.kind === 'text') {
    return (
      <section>
        <h2>{section.heading}</h2>
        {section.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </section>
    );
  }

  if (section.kind === 'figure') {
    return (
      <section>
        {section.heading && <h2>{section.heading}</h2>}
        <ProjectMedia figure={section.figure} />
      </section>
    );
  }

  if (section.kind === 'comparison') {
    return (
      <section>
        <h2>{section.heading}</h2>
        <div className="comparison">
          <ProjectMedia figure={section.before} />
          <ProjectMedia figure={section.after} />
        </div>
      </section>
    );
  }

  return (
    <section className="case-outcomes">
      <h2>{section.heading}</h2>
      <ul>
        {section.items.map((o) => (
          <li key={o.label}>
            {o.value && <strong>{o.value}</strong>} {o.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
