# Sneha Portfolio — Expressive Motion Direction C

## Goal

Make the portfolio feel more personal and memorable through expressive product-led motion while preserving its editorial clarity, accessibility, and static GitHub Pages architecture. This is the first of two visual states the user wants to compare; direction B can later reuse the same motion primitives with quieter styling.

## Visual direction

The homepage hero becomes an asymmetrical two-column composition. The left side retains Sneha's positioning, introduction, and calls to action. The right side uses three overlapping crops from the existing Moodofy, Adidas, and PHICA artwork, with small project labels and decorative orbit lines. The composition enters in layers and then settles into very slow, low-amplitude movement on pointer-capable desktop devices.

Featured project rows alternate their image/text direction on desktop. Each row reveals once as it approaches the viewport, with the image and text arriving on slightly different timings. Hovering a project adds a small lift, image scale, and terracotta directional cue. Supporting work and content sections use a simpler rise-and-fade reveal.

Case-study pages use a short header and cover entrance plus one-shot section reveals. Reading text never floats continuously. Large images may gain a subtle depth treatment, but the primary goal remains legibility.

## Motion architecture

- Add a small reusable `Reveal` component backed by one shared `IntersectionObserver` behavior.
- Server-rendered content remains visible by default. Motion-only hidden states apply only after the client marks the document as motion-capable, so content remains available if JavaScript fails.
- Use CSS custom properties for delay, direction, travel distance, and easing. Direction C sets expressive values; a later direction B can change those tokens without rewriting components.
- Hero artwork uses CSS transforms only. Pointer movement may update bounded CSS variables, but there will be no scroll hijacking, custom cursor, or animation library.
- Route changes reset scroll and move focus to the main landmark. Homepage section links collapse the mobile menu before measuring the destination.

## Accessibility and failure behavior

- `prefers-reduced-motion: reduce` removes entrance travel, continuous floating, smooth scrolling, and hover transforms while keeping all content visible.
- Decorative hero images use empty alternative text and are hidden from assistive technology because the same projects are described immediately below.
- The skip link focuses the main landmark after activation.
- All motion uses opacity and transforms; layout-affecting animation is avoided.
- At 200% zoom and mobile widths, the hero collage becomes a compact horizontal stack below the copy and never creates horizontal overflow.

## Navigation corrections included

Motion would expose the current retained-scroll defects, so this pass also corrects them:

- project routes open at the page heading with keyboard focus moved to the main landmark;
- Back to work returns to the Selected work section;
- mobile navigation waits for the expanded menu to collapse before scrolling;
- client-side metadata updates the canonical and social fields alongside the title and description.

## Testing

Add focused Playwright coverage before implementation for:

1. project navigation resets scroll and focuses the main landmark;
2. Back to work lands at Selected work;
3. mobile section navigation aligns the requested section after menu collapse;
4. skip-link activation focuses main;
5. reduced motion keeps reveal content visible and disables continuous animation;
6. no horizontal overflow at 360, 390, 768, and 1440 pixels;
7. after client navigation, title, description, canonical, `og:title`, `og:description`, `og:url`, `og:image`, and Twitter image match the destination route. The 404 route removes canonical and `og:url`, matching the prerendered document.

After automated checks, visually inspect the homepage, all three case studies, and the 404 page at 360, 390, 768, and 1440 pixels in the controlled browser. Compare hierarchy, personality, image scale, and restraint with the five supplied reference portfolios.

## Repository cleanup

Remove only items proven unnecessary:

- generated `.playwright-mcp/` screenshots and logs;
- the temporary `.superpowers/brainstorm/` comparison page after it is no longer needed;
- `.DS_Store` files;
- unused Vite starter assets in Sneha's app after confirming there are no imports.

Keep the ignored `assets/portfolio-source/` archive and `assets/retired-images/`: they contain original or only-surviving project material. Keep source résumé files because they are the editable originals for the public PDF.

## Non-goals

- no custom cursor, scroll snapping, or scroll hijacking;
- no animation dependency;
- no invented metrics, new case-study content, or generated portfolio art;
- no deletion of original design or résumé source material;
- no commit, push, or history rewrite without explicit permission.
