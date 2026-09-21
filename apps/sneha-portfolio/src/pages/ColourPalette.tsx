import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const sharedSwatches = [
  ['Ivory', '#faf7f2', 'Primary canvas', 'light'],
  ['Warm Paper', '#fffdfa', 'Cards and raised surfaces', 'light'],
  ['Ink', '#1c1917', 'Primary type and strong panels', 'dark'],
  ['Muted', '#6b635c', 'Secondary type on light surfaces', 'dark'],
  ['Line', '#e4ddd2', 'Borders and quiet dividers', 'light'],
  ['Terracotta', '#c14a2e', 'Links and emphasis on light surfaces', 'dark'],
  ['Clay Wash', '#f3eadf', 'Hero and contact fields', 'light'],
  ['Sage', '#4a6c6f', 'Quiet secondary accent', 'dark'],
] as const;

const projectPalettes = [
  { name: 'Moodofy', tone: 'Calm', colors: '#dcefe9 · #203b3e · #a83e26', background: '#dcefe9', ink: '#203b3e', accent: '#a83e26' },
  { name: 'Adidas', tone: 'Graphic', colors: '#11110f · #f7f4ec · #d8ff43', background: '#11110f', ink: '#f7f4ec', accent: '#d8ff43' },
  { name: 'Rafiki / PHICA', tone: 'Editorial', colors: '#dfe7f2 · #182b49 · #91634f', background: '#dfe7f2', ink: '#182b49', accent: '#91634f' },
] as const;

const pairings = [
  ['Ink on Ivory', '#faf7f2', '#1c1917', '16.37:1 · AAA', 'Primary reading text'],
  ['Muted on Ivory', '#faf7f2', '#6b635c', '5.51:1 · AA', 'Secondary copy'],
  ['Pale Terracotta on Ink', '#1c1917', '#e9a38e', '8.41:1 · AAA', 'Spine labels and numbers'],
  ['Brick on Clay Wash', '#f3eadf', '#a83e26', '5.22:1 · AA', 'Archive emphasis'],
  ['Terracotta on Ivory', '#faf7f2', '#c14a2e', '4.58:1 · AA', 'Links and small labels'],
  ['White on Moodofy accent', '#a83e26', '#ffffff', '6.21:1 · AA', 'Active navigation and small labels'],
] as const;

export default function ColourPalette() {
  return (
    <article className="palette-page">
      <Link className="palette-back-link" to="/">
        ← Back to portfolio
      </Link>

      <header className="palette-intro">
        <div>
          <p className="palette-eyebrow">Sneha Jadhav · Portfolio system</p>
          <h1>Warm editorial</h1>
        </div>
        <p className="palette-intro-copy">
          A quiet, tactile foundation that lets the work speak first. Warm paper neutrals carry the
          interface, terracotta guides attention, and project worlds keep their own personalities.
        </p>
      </header>

      <PaletteSection eyebrow="01 · Shared foundation" title="Portfolio shell">
        <p>
          These colours carry navigation, homepage content, supporting cards, calls to action, and
          shared page furniture.
        </p>
        <div className="palette-swatch-grid">
          {sharedSwatches.map(([name, hex, use, tone]) => (
            <article
              className="palette-swatch"
              key={name}
              style={{ '--palette-swatch': hex, '--palette-swatch-ink': tone === 'dark' ? '#fffdfa' : '#1c1917' } as CSSProperties}
            >
              <span className="palette-swatch-name">{name}</span>
              <span className="palette-swatch-meta">
                <span className="palette-swatch-hex">{hex}</span>
                <span>{use}</span>
              </span>
            </article>
          ))}
        </div>
      </PaletteSection>

      <PaletteSection eyebrow="02 · Supporting work" title="Archive desk">
        <p>
          Ink anchors the project dossier while warm paper keeps the evidence readable. Pale
          terracotta is reserved for small accents on the dark spine.
        </p>
        <div className="palette-archive-board">
          <aside className="palette-archive-spine">
            <span className="palette-archive-file">Project file · #e9a38e</span>
            <h3>Figo Friend</h3>
            <p>Primary text uses Ivory. Supporting copy uses Soft Ivory #d9cec5.</p>
            <ol>
              <li><span>01</span>The problem we picked</li>
              <li><span>02</span>Why a chatbot</li>
              <li><span>03</span>What testing changed</li>
            </ol>
          </aside>
          <div className="palette-archive-desk">
            <article className="palette-paper-card">
              <small>Evidence paper · #fffdf8</small>
              <h3>Warm, structured evidence</h3>
              <p>Desk #e8e1d7 · Dialog border #cfc5b7 · Sheet border #d7cfc3 · Brick #a83e26</p>
            </article>
            <article className="palette-paper-card">
              <small>Supporting colours</small>
              <h3>Distinct, not disconnected</h3>
              <p>The archive has its own material feel while staying inside the portfolio&apos;s warm editorial language.</p>
            </article>
          </div>
        </div>
      </PaletteSection>

      <PaletteSection eyebrow="03 · Project worlds" title="Personality by case study">
        <p>These palettes belong to their projects. They should not replace the shared shell colours.</p>
        <div className="palette-project-grid">
          {projectPalettes.map((project) => (
            <article className="palette-project" key={project.name}>
              <div
                className="palette-project-preview"
                style={{ '--palette-project-bg': project.background, '--palette-project-ink': project.ink, '--palette-project-accent': project.accent } as CSSProperties}
              >
                <h3>{project.name}</h3>
                <span aria-hidden="true" />
              </div>
              <div className="palette-project-details">
                <strong>{project.tone}</strong>
                <p>{project.colors}</p>
              </div>
            </article>
          ))}
        </div>
      </PaletteSection>

      <PaletteSection eyebrow="04 · Accessibility" title="Reliable pairings">
        <p>Ratios are based on WCAG relative luminance. Normal text targets 4.5:1; large text and interface boundaries target 3:1.</p>
        <div className="palette-pairings">
          {pairings.map(([name, background, foreground, ratio, use]) => (
            <article className="palette-pairing" key={name}>
              <div className="palette-sample" style={{ '--palette-sample-bg': background, '--palette-sample-ink': foreground } as CSSProperties}>
                {name}
              </div>
              <p><strong>{ratio}</strong> — {use}</p>
            </article>
          ))}
        </div>
      </PaletteSection>

      <footer className="palette-footer">Portfolio colour system · WCAG AA reference</footer>
    </article>
  );
}

function PaletteSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="palette-section">
      <div className="palette-section-head">
        <p className="palette-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="palette-section-content">{children}</div>
    </section>
  );
}
