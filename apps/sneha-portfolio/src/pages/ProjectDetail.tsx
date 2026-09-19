import { projects, projectGallery, assetUrl } from '../data/portfolio';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <p><Link to="/">← Back to work</Link></p>
        </div>
      </section>
    );
  }

  const images = (slug && projectGallery[slug]) || [];

  return (
    <article className="project-detail">
      <header className="project-header">
        <Link to="/" className="back-link">← Selected work</Link>
        <span className="project-meta">{project.meta}</span>
        <h1>{project.title}</h1>
        <p className="project-outcome">{project.outcome}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </header>

      {images.length > 0 && (
        <div className="project-gallery">
          {images.map((img, i) => (
            <img key={i} src={assetUrl(img)} alt={`${project.title} - screen ${i + 1}`} />
          ))}
        </div>
      )}

      <div className="project-body">
        <section className="project-section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        {slug === 'moodofy' && (
          <>
            <section className="project-section">
              <h2>Problem</h2>
              <p>
                International students in Canada face disproportionate rates of low mood and depression due to
                cultural displacement, academic pressure, financial strain, and isolation — yet existing mental
                health apps assume Western cultural contexts and clinical language that feels alienating.
              </p>
            </section>

            <section className="project-section">
              <h2>Research & Strategy</h2>
              <ul>
                <li>Secondary research: literature review on acculturative stress, help-seeking barriers, CBT adaptations</li>
                <li>Competitive audit: 12 mental health apps — gaps in cultural relevance, tone, and onboarding</li>
                <li>Hypothesis: A culturally-aware, low-friction mobile companion could increase early engagement by 40%</li>
                <li>Prioritized core flows: mood check-in → micro-intervention → peer connect → crisis escalation</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Design Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-num">01</span>
                  <div>
                    <h3>Task flows & IA</h3>
                    <p>Mapped 18 user tasks across 4 pillars; reduced to 6 core flows via Kano analysis.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div>
                    <h3>Wireframes & usability</h3>
                    <p>Low-fi tested with 5 international students; iterated onboarding language and check-in frequency.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div>
                    <h3>UI system & prototype</h3>
                    <p>Warm, non-clinical palette; Fraunces for headlines, Inter for body. Dark mode for late-night use.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div>
                    <h3>Marketing site</h3>
                    <p>Landing page with moodboard, interaction demos, and waitlist capture — built in Webflow.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="project-section">
              <h2>Outcome</h2>
              <p>
                Delivered end-to-end concept in 10 weeks: research report, task flows, high-fidelity prototype (Figma),
                design system, and marketing site. Selected for BrainStation capstone showcase.
              </p>
            </section>
          </>
        )}

        {slug === 'sevenmentor' && (
          <section className="project-section">
            <h2>Measured Impact</h2>
            <ul>
              <li><strong>+11%</strong> user satisfaction (post-redesign survey, n=240)</li>
              <li><strong>−33%</strong> mobile bounce rate (GA comparison, 30-day window)</li>
              <li><strong>~Rs. 500K/yr</strong> incremental admissions revenue attributed to clearer CTAs and flow</li>
            </ul>
          </section>
        )}

        {slug === 'recruit-n-refer' && (
          <section className="project-section">
            <h2>Delivery</h2>
            <p>Collaborated with 3 developers across 2 sprints. Ran moderated usability tests (n=8) on new portal pages;
            87% task success rate vs 52% baseline. Phase 1 shipped on schedule.</p>
          </section>
        )}

        {slug === 'adidas-hackathon' && (
          <section className="project-section">
            <h2>24-Hour Sprint</h2>
            <p>Team of 4 designers. Defined problem → prioritized MVP → built clickable prototype → pitched to Adidas Canada
            stakeholders. Won 1st place for product thinking and presentation clarity.</p>
          </section>
        )}

        {slug === 'figo-friend' && (
          <section className="project-section">
            <h2>Approach</h2>
            <p>Financial-wellbeing concept that makes a sensitive money problem calmer and clearer through mobile
            interaction design — plain language, progressive disclosure, and non-judgmental tone throughout.</p>
          </section>
        )}

        {slug === 'sprint-range' && (
          <section className="project-section">
            <h2>Supporting Work</h2>
            <ul>
              <li><strong>Food-waste design sprint:</strong> Research → ideation → testing in 5 days</li>
              <li><strong>PatientsFirst:</strong> Healthcare task flows and clickable prototypes</li>
              <li><strong>[24]7 AI:</strong> Multi-channel conversation design — chatbot, Messenger, IVR for Ma & Pa Pizza</li>
            </ul>
          </section>
        )}
      </div>

      <footer className="project-footer">
        <Link to="/" className="btn btn-primary">← Back to selected work</Link>
      </footer>
    </article>
  );
}
