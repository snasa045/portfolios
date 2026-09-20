# Sneha Portfolio — Immersive Case Studies

## Goal

Redesign Moodofy, Adidas, and PHICA as complete Direction C experiences rather than retaining the previous case-study template with reveal animation added. The three pages will share one navigable narrative system while using project-specific color, typography treatment, media staging, and motion.

The redesign must preserve the portfolio's current React/Vite/static-prerender architecture, accessibility behavior, route metadata, and factual content. It must work identically through the development URL on port 5173 and the production preview on port 4178.

## Design correction

The first Direction C pass substantially improved the homepage but left case studies visually close to their earlier structure: a narrow header, one cover image, sequential text sections, and an outcome list. Section reveals improved movement without changing the reading experience.

This pass changes the pages themselves. Each case study becomes an immersive project world with a strong opening, visible story structure, art-directed media, a memorable design-decision moment, and a project-themed transition to the next case study.

## Shared visual system

Every case study uses the same seven-part anatomy:

1. **Immersive hero** — project position, title, summary, role, team, timeframe, and cover artwork form one composed opening rather than separate blocks.
2. **Chapter spine** — a compact sticky navigation shows the case-study structure and current chapter without hijacking scrolling.
3. **Narrative chapters** — existing sections become numbered editorial chapters with clearer hierarchy and shorter reading measures.
4. **Media stages** — existing images are paired, cropped, offset, or isolated according to their content instead of sharing one uniform container.
5. **Key-decision takeover** — the most important product or design judgment receives a high-contrast full-width treatment.
6. **Outcome and reflection** — results and limitations appear together so the case study closes with evidence and honest retrospective judgment.
7. **Next-project transition** — the following project's visual world begins before navigation, replacing the current text-only next link.

The chapter spine links to real section anchors, reports the active chapter, and remains secondary to reading. It becomes horizontally scrollable rather than sticky on narrow screens where a fixed element would reduce usable space.

## Project personalities

### Moodofy — calm and human

- Sea-glass green base with deep blue-grey text and a restrained warm accent.
- Rounded image stages and softer spatial transitions reflect the wellbeing context.
- The recurring visual idea is the low-friction first step.
- The key-decision takeover centres the single question, “How are you feeling today?”, and explains how one tap routes the rest of the experience.
- Existing Moodofy cover, assistance flow, and homepage images form a deliberate mobile-product sequence.

### Adidas — urgent and graphic

- Black and chalk-white base with one electric accent used sparingly.
- Hard edges, larger scale shifts, and compact sans-serif display treatment create a faster rhythm without imitating Adidas brand assets.
- The 24-hour constraint becomes the page's narrative spine: brief, research, concept, and pitch.
- The winning-entry outcome is visible near the opening and revisited in the close.
- The existing sustainability research board is treated as a working artifact rather than a generic hero image.

### PHICA — sober and empathetic

- Muted French blue, ink, and soft neutral surfaces.
- Editorial typography and measured transitions support the sensitive business context.
- The page is organised around the shift from an imagined buyer to Charles, a business owner in distress.
- The persona appears before the proposed layouts because it is the evidence that reframed the brief.
- The three-direction journey image becomes a comparative design stage rather than a single full-width screenshot.

## Content rules

- Existing project data remains the source of truth.
- Copy may be split, reordered, or given concise display headings, but its claims cannot be expanded.
- No metrics, research participants, deliverables, screens, or outcomes may be invented.
- Qualitative outcomes remain labelled honestly.
- Existing “What I would change” content stays prominent.
- No generated portfolio artwork will substitute for missing project evidence.

## Component architecture

`ProjectDetail` remains the route boundary and selects the project by slug. The visual redesign is divided into focused components:

- `CaseHero` renders the themed opening and project facts.
- `CaseChapterNav` owns section links and active-chapter feedback.
- `CaseChapter` renders narrative text, media, or comparison content using stable section IDs.
- `CaseDecision` renders the project-specific high-emphasis reasoning moment.
- `CaseClosing` combines outcomes and reflection.
- `NextCaseStudy` previews the next project's theme and provides navigation.

Project data gains a small presentation configuration containing the theme identifier, display statement, chapter labels, and the section promoted as the key decision. Theme colors stay in CSS classes and custom properties rather than inline style objects. Shared content types remain responsible for text and evidence; presentation configuration does not duplicate the case study.

The existing `Reveal` component remains the progressive-enhancement foundation. New components consume it at chapter and media-stage boundaries rather than wrapping individual paragraphs.

## Motion behavior

- Each route uses one orchestrated hero entrance: copy, artwork, and chapter spine appear in sequence.
- Media stages use mask or clip reveals built from opacity and transforms.
- The chapter spine updates in response to scrolling, but does not move the page automatically.
- The key-decision takeover may use a small scale or color transition as it enters.
- Continuous animation is avoided on reading pages.
- Route changes and chapter links retain deterministic focus and scroll behavior.
- `prefers-reduced-motion: reduce` removes entrance travel, masks, smooth scrolling, and transform-based hover effects while keeping every element visible.

## Responsive behavior

### Desktop

- Hero copy and artwork share the opening viewport.
- Chapter navigation may remain sticky below the global navigation.
- Media can break beyond the reading column and use paired or offset compositions.
- Key-decision and next-project sections span the full case-study container.

### Tablet and 200% reflow

- Hero composition collapses before text or artwork becomes cramped.
- Chapter navigation becomes horizontally scrollable.
- Offset media returns to a stable grid or single column.
- No essential copy is placed over imagery.

### Mobile

- Hero copy precedes artwork in DOM and visual order.
- Project facts remain readable without a dense multi-column table.
- Media stages become one column and preserve natural image proportions.
- Chapter navigation remains keyboard accessible and exposes the active chapter without hiding labels.
- No horizontal document overflow is permitted at 360 or 390 pixels.

## Accessibility and failure behavior

- The global heading order remains one `h1` followed by chapter `h2` headings.
- Chapter links use visible focus and `aria-current` for the active section.
- Project color combinations must meet WCAG AA contrast for text and controls.
- Meaningful project images retain descriptive alternative text; decorative framing remains hidden from assistive technology.
- Server-rendered content is visible without JavaScript. Active chapter feedback and motion enhance rather than gate access.
- Keyboard navigation, skip-link behavior, route focus, and Back to work behavior remain intact.

## Testing and visual verification

Automated coverage will verify:

1. all three routes render the shared case-study shell and correct project theme;
2. chapter links target real sections and update active state;
3. route changes reset scroll and focus the main landmark;
4. reduced motion leaves all content visible with no running case-study animation;
5. 360, 390, 768, and 1440 pixel viewports have no horizontal overflow;
6. project metadata and static prerendered HTML remain correct;
7. next-project navigation enters the correct visual theme;
8. the development server and production preview show the same route structure and assets.

Controlled-browser review will inspect the homepage, all three case studies, and the 404 page. Each case study will be reviewed at desktop and mobile widths for hierarchy, active chapter behavior, image legibility, keyboard focus, reduced motion, and visual continuity with the homepage.

## Repository boundaries

- Store the design and implementation documents in `.claude/plans/sneha/`.
- Preserve source archives, retired images, and editable résumé sources.
- Remove the temporary visual-companion files after design decisions no longer need them.
- Do not commit, push, stage, or rewrite history; the user will handle Git operations.

## Non-goals

- No new case-study research or claims.
- No generated replacement artwork.
- No scroll snapping, scroll hijacking, custom cursor, WebGL, or animation dependency.
- No homepage redesign beyond adjustments required for visual continuity.
- No change to the selected Direction C homepage while this case-study pass is evaluated.
