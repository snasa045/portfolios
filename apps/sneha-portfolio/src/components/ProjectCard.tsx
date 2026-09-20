import { Link } from 'react-router-dom';
import ProjectMedia from './ProjectMedia';
import Reveal from './Reveal';
import { statusLabel, type Project } from '../types/portfolio';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      className={`project project-${index % 2 === 0 ? 'left' : 'right'}`}
      direction={index % 2 === 0 ? 'left' : 'right'}
      delay={index * 60}
    >
      <Link to={`/project/${project.slug}`} className="project-link">
        {project.cover && <ProjectMedia figure={project.cover} layout="card" eager={index === 0} />}
        <div className="project-body">
          <span className="project-index" aria-hidden="true">
            0{index + 1}
          </span>
          <p className="project-meta">
            <span className={`status status-${project.status}`}>{statusLabel[project.status]}</span>
            <span>{project.timeframe}</span>
          </p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-role">{project.role}</p>
          <span className="project-cta">
            Read the case study <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
