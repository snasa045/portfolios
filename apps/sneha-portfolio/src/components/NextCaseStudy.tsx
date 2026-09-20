import { Link } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import ProjectMedia from './ProjectMedia';
import Reveal from './Reveal';

export default function NextCaseStudy({ project }: { project: Project }) {
  return (
    <Reveal className={`next-case next-case-${project.presentation.theme}`} direction="none">
      <Link to={`/project/${project.slug}`}>
        <div>
          <p>Next case study</p>
          <h2>{project.title}</h2>
          <span>Read the story →</span>
        </div>
        {project.cover && <ProjectMedia figure={project.cover} />}
      </Link>
    </Reveal>
  );
}
