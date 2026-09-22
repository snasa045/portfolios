import { useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../data/portfolio';

const sharedSwatches = [
  ['Ivory', '#faf7f2', 'Primary canvas', 'light'],
  ['Warm Paper', '#fffdfa', 'Cards and raised surfaces', 'light'],
  ['Ink', '#1c1917', 'Primary type and strong panels', 'dark'],
  ['Muted', '#6b635c', 'Secondary type on light surfaces', 'dark'],
  ['Line', '#e4ddd2', 'Borders and quiet dividers', 'light'],
  ['Terracotta', '#c14a2e', 'Links and emphasis on light surfaces', 'dark'],
  ['Clay Wash', '#f3eadf', 'Hero and contact fields', 'light'],
  ['Sage', '#4a6c6f', 'Gradient tint at 12–20% in hero and contact artwork', 'dark'],
] as const;

const projectPalettes = [
  { name: 'Moodofy', tone: 'Calm', colors: '#dcefe9 · #203b3e · #a83e26', background: '#dcefe9', ink: '#203b3e', accent: '#a83e26' },
  { name: 'Adidas', tone: 'Graphic', colors: '#11110f · #f7f4ec · #d8ff43', background: '#11110f', ink: '#f7f4ec', accent: '#d8ff43' },
  { name: 'PHICA', tone: 'Editorial', colors: '#dfe7f2 · #182b49 · #91634f', background: '#dfe7f2', ink: '#182b49', accent: '#91634f' },
] as const;

const accessibleRoles = [
  {
    name: 'Moodofy',
    tone: 'Calm',
    paper: '#fbf8f2',
    accent: '#a83e26',
    accentRatio: '5.86:1',
    accentStatus: 'AA',
    text: '#a83e26',
    textRatio: '5.86:1',
    textStatus: 'AA',
    note: 'One warm accent safely carries both visual emphasis and text.',
  },
  {
    name: 'Adidas',
    tone: 'Graphic',
    paper: '#fffef9',
    accent: '#d8ff43',
    accentRatio: '1.14:1',
    accentStatus: 'Decorative only',
    text: '#4d5a18',
    textRatio: '7.45:1',
    textStatus: 'AAA',
    note: 'The vivid lime stays decorative; a deeper olive carries readable text.',
  },
  {
    name: 'PHICA',
    tone: 'Editorial',
    paper: '#fbf9f5',
    accent: '#91634f',
    accentRatio: '4.87:1',
    accentStatus: 'AA',
    text: '#704535',
    textRatio: '7.71:1',
    textStatus: 'AAA',
    note: 'A deeper brown gives smaller labels more contrast headroom.',
  },
] as const;

const pairings = [
  ['Ink on Ivory', '#faf7f2', '#1c1917', '16.37:1 · AAA', 'Primary reading text'],
  ['Muted on Ivory', '#faf7f2', '#6b635c', '5.51:1 · AA', 'Secondary copy'],
  ['Pale Terracotta on Ink', '#1c1917', '#e9a38e', '8.41:1 · AAA', 'Spine labels and numbers'],
  ['Brick on Evidence paper', '#fffdf8', '#a83e26', '6.11:1 · AA', 'Archive chapter numbers and outcomes'],
  ['Terracotta on Ivory', '#faf7f2', '#c14a2e', '4.58:1 · AA', 'Links and small labels'],
  ['White on Moodofy accent', '#a83e26', '#ffffff', '6.21:1 · AA', 'Case-study chapter navigation, active and hover'],
] as const;

const archiveChapters = [
  {
    title: 'The problem we picked',
    summary: 'A flat reading surface gives the evidence room while the index keeps the story oriented.',
  },
  {
    title: 'Why a chatbot',
    summary: 'The current chapter uses a pale-terracotta marker without competing with the project content.',
  },
  {
    title: 'What testing changed',
    summary: 'Quiet dividers and brick numbering create structure without rebuilding the old card stack.',
  },
] as const;

const archiveTokens = [
  ['Spine', '#1c1917'],
  ['Evidence paper', '#fffdf8'],
  ['Divider', '#e4ddd2'],
  ['Interactive accent', '#e9a38e'],
  ['Evidence number', '#a83e26'],
  ['Dialog shell', '#e8e1d7'],
  ['Dialog border', '#cfc5b7'],
] as const;

export default function ColourPalette() {
  const [archiveChapter, setArchiveChapter] = useState(0);
  const activeArchiveChapter = archiveChapters[archiveChapter];

  return (
    <article className="palette-page">
      <Link className="palette-back-link" to="/">
        ← Back to portfolio
      </Link>

      <header className="palette-intro">
        <div>
          <p className="palette-eyebrow">Sneha Jadhav · Portfolio colour system</p>
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
          Ink anchors a live reading index beside one flat evidence artboard. Pale terracotta marks
          navigation and focus, while brick numbers the evidence without competing with it.
        </p>
        <div className="palette-archive-board">
          <aside className="palette-archive-spine">
            <span className="palette-archive-file">Project file · #e9a38e</span>
            <h3>Figo Friend</h3>
            <p>Ivory headings and Soft Ivory copy keep the dark spine readable.</p>
            <nav className="palette-archive-index" aria-label="Archive preview chapters">
              <ol role="list">
                {archiveChapters.map((chapter, index) => (
                  <li key={chapter.title}>
                    <button
                      type="button"
                      aria-current={archiveChapter === index ? 'step' : undefined}
                      onClick={() => setArchiveChapter(index)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="palette-archive-artboard">
            <div className="palette-archive-media" aria-hidden="true">
              <img src={assetUrl('images/figo-cover-640.webp')} alt="" />
            </div>
            <article className="palette-archive-chapter" aria-live="polite">
              <span className="palette-archive-number">
                {String(archiveChapter + 1).padStart(2, '0')}
              </span>
              <div>
                <small>Evidence paper · #fffdf8</small>
                <h3>{activeArchiveChapter.title}</h3>
                <p>{activeArchiveChapter.summary}</p>
              </div>
            </article>
          </div>
        </div>
        <dl className="palette-archive-tokens">
          {archiveTokens.map(([role, value], index) => (
            <div className={index > 4 ? 'is-secondary' : undefined} key={role}>
              <dt>{role}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
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

      <PaletteSection eyebrow="04 · Accessible roles" title="Accessible colour roles">
        <p>
          Visual accents create personality; text accents do the reading work. Each project keeps
          those jobs explicit instead of forcing one colour to do both.
        </p>
        <div className="palette-role-grid">
          {accessibleRoles.map((role) => (
            <article className="palette-role-card" key={role.name}>
              <header>
                <h3>{role.name}</h3>
                <span>{role.tone}</span>
              </header>
              <div
                className="palette-role-demo"
                style={{
                  '--palette-role-paper': role.paper,
                  '--palette-role-accent': role.accent,
                  '--palette-role-text': role.text,
                } as CSSProperties}
              >
                <span className="palette-role-accent" aria-hidden="true" />
                <strong>Accessible text</strong>
              </div>
              <dl>
                <div>
                  <dt>Visual accent</dt>
                  <dd>{role.accent} · {role.accentRatio} · {role.accentStatus}</dd>
                </div>
                <div>
                  <dt>Text accent</dt>
                  <dd>{role.text} · {role.textRatio} · {role.textStatus}</dd>
                </div>
              </dl>
              <p>{role.note}</p>
            </article>
          ))}
        </div>
      </PaletteSection>

      <PaletteSection eyebrow="05 · Accessibility" title="Reliable pairings">
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
