import { Link } from 'react-router-dom';
import ProjectMedia from './ProjectMedia';
import { statusLabel, type Project } from '../types/portfolio';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project">
      <Link to={`/project/${project.slug}`} className="project-link">
        {project.cover && <ProjectMedia figure={project.cover} layout="card" eager={index === 0} />}
        <div className="project-body">
          <p className="project-meta">
            <span className={`status status-${project.status}`}>{statusLabel[project.status]}</span>
            <span>{project.timeframe}</span>
          </p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-role">{project.role}</p>
          <span className="project-cta">Read the case study</span>
        </div>
      </Link>
    </article>
  );
}
