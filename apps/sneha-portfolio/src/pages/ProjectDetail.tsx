import { Link, useParams } from 'react-router-dom';
import CaseChapterNav from '../components/CaseChapterNav';
import CaseClosing from '../components/CaseClosing';
import CaseDecision from '../components/CaseDecision';
import CaseHero from '../components/CaseHero';
import NextCaseStudy from '../components/NextCaseStudy';
import Reveal from '../components/Reveal';
import SectionBody from '../components/SectionBody';
import { featuredProjects, projectBySlug } from '../data/projects';
import { isMediaSection, type CaseSection } from '../types/portfolio';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? projectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const index = featuredProjects.findIndex((item) => item.slug === project.slug);
  const next = featuredProjects[(index + 1) % featuredProjects.length];
  const { decisionIndex, reflectionIndex, theme } = project.presentation;
  const decision = project.sections[decisionIndex];
  const reflection = project.sections[reflectionIndex];

  if (decision.kind !== 'text' || reflection.kind !== 'text') return <NotFound />;

  const chapters = project.sections.map((section, sectionIndex) => ({
    id: `chapter-${sectionIndex + 1}`,
    label: section.heading ?? 'Product experience',
  }));

  return (
    <article className="case case-world" data-case-theme={theme}>
      <CaseHero project={project} />
      <CaseChapterNav chapters={chapters} />

      <div className="case-story">
        {project.sections.map((section, sectionIndex) => {
          if (sectionIndex === reflectionIndex) return null;
          if (sectionIndex === decisionIndex) {
            return (
              <CaseDecision
                key={sectionIndex}
                id={`chapter-${sectionIndex + 1}`}
                index={sectionIndex}
                heading={decision.heading}
                body={decision.body}
              />
            );
          }

          return (
            <CaseChapter
              key={sectionIndex}
              id={`chapter-${sectionIndex + 1}`}
              index={sectionIndex}
              section={section}
            />
          );
        })}

        <CaseClosing
          id={`chapter-${reflectionIndex + 1}`}
          reflection={reflection.body}
          outcomes={project.outcomes}
        />
      </div>

      <nav className="case-return" aria-label="Portfolio navigation">
        <Link to="/" state={{ scrollTo: '#work' }}>
          ← Back to work
        </Link>
      </nav>
      <NextCaseStudy project={next} />
    </article>
  );
}

function CaseChapter({ id, index, section }: { id: string; index: number; section: CaseSection }) {
  const media = isMediaSection(section);

  return (
    <Reveal
      as="section"
      id={id}
      className={media ? 'case-chapter case-media-stage' : 'case-chapter'}
      direction={media ? 'none' : 'up'}
    >
      <header>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h2>{section.heading ?? 'Product experience'}</h2>
      </header>
      <SectionBody section={section} />
    </Reveal>
  );
}
