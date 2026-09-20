import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="work">
      <Reveal as="header" className="section-head">
        <h2>Selected work</h2>
        <p>Three projects, each with the decision that shaped it.</p>
      </Reveal>
      <div className="projects">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
