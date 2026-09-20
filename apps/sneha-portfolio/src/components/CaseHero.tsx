import type { Project } from '../types/portfolio';
import { statusLabel } from '../types/portfolio';
import ProjectMedia from './ProjectMedia';
import Reveal from './Reveal';

export default function CaseHero({ project }: { project: Project }) {
  return (
    <Reveal as="header" className="case-hero" direction="left">
      <div className="case-hero-copy">
        <p className="case-hero-kicker">
          {statusLabel[project.status]} <span>{project.timeframe}</span>
        </p>
        <h1>
          <span className="case-hero-project">{project.title}</span>
          <span className="case-hero-statement">{project.presentation.statement}</span>
        </h1>
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
      </div>
      {project.cover && (
        <div className="case-hero-art">
          <ProjectMedia figure={project.cover} eager />
        </div>
      )}
    </Reveal>
  );
}
