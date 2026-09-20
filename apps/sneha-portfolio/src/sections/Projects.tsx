import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="work">
      <header className="section-head">
        <h2>Selected work</h2>
        <p>Three projects, each with the decision that shaped it.</p>
      </header>
      <div className="projects">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
