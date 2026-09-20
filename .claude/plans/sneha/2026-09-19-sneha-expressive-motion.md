# Sneha Expressive Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the complete Sneha portfolio in expressive motion direction C, correct the navigation/accessibility defects exposed by page transitions, clean verified repository clutter, and validate every public page in a controlled browser.

**Architecture:** Keep the existing React/Vite/static-prerender stack. A small `Reveal` component will add one-shot viewport state while CSS custom properties define direction C's visual personality, allowing a later direction B to reuse the behavior. Playwright will exercise the built static site on an isolated port and cover navigation, metadata, motion preferences, overflow, and image readability.

**Tech Stack:** React 19, TypeScript 6, React Router 7, native CSS animations/transforms, IntersectionObserver, Playwright, Vite static prerendering.

**Working-tree constraint:** Existing uncommitted work belongs to the user. Do not reset, replace, or commit it. Each edit must be limited to files named below and verified against the current diff.

---

## File map

- Create `apps/sneha-portfolio/playwright.config.ts` — isolated built-site browser configuration.
- Create `apps/sneha-portfolio/tests/e2e/portfolio.spec.ts` — navigation, metadata, motion, overflow, and route smoke checks.
- Create `apps/sneha-portfolio/src/components/Reveal.tsx` — progressive-enhancement IntersectionObserver wrapper.
- Create `apps/sneha-portfolio/src/components/HeroArtwork.tsx` — decorative responsive project collage.
- Modify `apps/sneha-portfolio/package.json` and root `package-lock.json` — Playwright dependency and test script.
- Modify `apps/sneha-portfolio/src/main.tsx` — mark motion-capable clients before React mounts.
- Modify `apps/sneha-portfolio/src/App.tsx` — route scroll/focus and complete client metadata updates.
- Modify `apps/sneha-portfolio/src/lib/meta.ts` — expose route-specific canonical/social metadata.
- Modify `apps/sneha-portfolio/src/components/Navbar.tsx` — scroll only after the mobile menu collapses.
- Modify `apps/sneha-portfolio/src/components/ProjectCard.tsx` — expressive reveal direction and project index.
- Modify `apps/sneha-portfolio/src/sections/Hero.tsx`, `Projects.tsx`, `CurrentWork.tsx`, `SupportingWork.tsx`, `About.tsx`, and `Contact.tsx` — wrap section-level content in `Reveal` without changing copy. Do not restore or touch deleted legacy section files.
- Modify `apps/sneha-portfolio/src/pages/ProjectDetail.tsx` — reveal case content and return to Selected work.
- Modify `apps/sneha-portfolio/src/entry-server.tsx` — consume the same route metadata helper as client navigation.
- Modify `apps/sneha-portfolio/src/App.css` and `src/index.css` — direction C layout, motion tokens, responsive and reduced-motion rules.
- Modify `apps/sneha-portfolio/scripts/serve-static.mjs` — accurate WebP and WOFF2 MIME types for local production QA.

### Task 1: Install the browser-test harness

**Files:**
- Modify: `apps/sneha-portfolio/package.json`
- Modify: `package-lock.json`
- Create: `apps/sneha-portfolio/playwright.config.ts`
- Create: `apps/sneha-portfolio/tests/e2e/portfolio.spec.ts`

- [ ] **Step 1: Add the test contract before production changes**

Add `@playwright/test` as a development dependency and `test:e2e: "playwright test"`. Configure Playwright to run Chromium against `http://127.0.0.1:4179/portfolios/sneha/`, starting `npm run build && PORT=4179 npm run serve:dist` with `reuseExistingServer: false`.

Create tests that expect:

- a project-card click to produce `scrollY === 0` and focus `#main`;
- Back to work to land with `#work` beneath the navbar;
- the 390 px expanded-menu Work link to land with the section heading visible;
- the skip link to focus `#main`;
- client navigation to update title, description, canonical, Open Graph fields, and Twitter image;
- an unknown route to remove canonical and `og:url`;
- each built route's static HTML to carry the same metadata as its client destination;
- direction C to expose a three-panel hero artwork and reveal state;
- reduced motion to report no running hero animation and keep reveal content visible;
- every public route to avoid horizontal overflow at 360, 390, 768, and 1440 px;
- Moodofy's tall homepage figure to render taller than the viewport rather than being compressed into it.

- [ ] **Step 2: Install the declared dependency and browser**

Run: `npm install --workspace=sneha-portfolio --include-workspace-root=false`

Run: `npx playwright install chromium`

Expected: dependency and Chromium installation exit 0. Review `package.json` and `package-lock.json` to confirm no unrelated dependency changes.

- [ ] **Step 3: Run the focused suite and verify RED**

Run: `npm run test:e2e --workspace=sneha-portfolio`

Expected: tests fail on missing expressive hero/reveal markup and current route focus, mobile anchor, metadata, and tall-image behavior. Infrastructure errors must be fixed until failures represent missing product behavior.

### Task 2: Correct route focus, section navigation, and metadata

**Files:**
- Modify: `apps/sneha-portfolio/src/App.tsx`
- Modify: `apps/sneha-portfolio/src/lib/meta.ts`
- Modify: `apps/sneha-portfolio/src/entry-server.tsx`
- Modify: `apps/sneha-portfolio/src/components/Navbar.tsx`
- Modify: `apps/sneha-portfolio/src/pages/ProjectDetail.tsx`

- [ ] **Step 1: Add a route-effects boundary**

In `App.tsx`, give `main` `tabIndex={-1}`. Add a pathname effect that scrolls new non-home routes to the top and focuses main without forcing a visible focus ring. Preserve explicit homepage section state so Back to work can target `#work`.

- [ ] **Step 2: Make homepage section scrolling deterministic**

Pass `{ scrollTo: '#work' }` from Back to work. In `Navbar`, close the menu and schedule section scrolling for the next animation frame so measurement occurs after the menu layout collapses. Use instant scrolling under reduced motion.

- [ ] **Step 3: Synchronize all route metadata**

Extend the shared route metadata helper with canonical URL and preview image. Make both `entry-server.tsx` and the client effect consume that helper instead of maintaining separate URL/preview logic. On every client navigation, create/update title, description, canonical, `og:title`, `og:description`, `og:url`, `og:image`, and Twitter image. Remove canonical and `og:url` for unknown routes.

- [ ] **Step 4: Run the navigation and metadata tests**

Run: `npm run test:e2e --workspace=sneha-portfolio -- --grep "navigation|skip link|metadata"`

Expected: selected client-navigation tests and built-HTML metadata tests pass for home, every project, and 404.

### Task 3: Add progressive reveal behavior

**Files:**
- Create: `apps/sneha-portfolio/src/components/Reveal.tsx`
- Modify: `apps/sneha-portfolio/src/main.tsx`
- Modify: `apps/sneha-portfolio/src/sections/Hero.tsx`
- Modify: `apps/sneha-portfolio/src/sections/Projects.tsx`
- Modify: `apps/sneha-portfolio/src/sections/CurrentWork.tsx`
- Modify: `apps/sneha-portfolio/src/sections/SupportingWork.tsx`
- Modify: `apps/sneha-portfolio/src/sections/About.tsx`
- Modify: `apps/sneha-portfolio/src/sections/Contact.tsx`
- Modify: `apps/sneha-portfolio/src/pages/ProjectDetail.tsx`

- [ ] **Step 1: Mark only capable clients as motion-enhanced**

Before mounting React, add `motion-ready` to `<html>` only when IntersectionObserver exists and reduced motion is not requested. The server-rendered/default state remains visible.

- [ ] **Step 2: Implement the reusable reveal wrapper**

`Reveal` accepts `as`, `className`, `direction`, and `delay` props. A module-level registry owns one `IntersectionObserver`, maps elements to visibility callbacks, observes each element once, and unobserves it after reveal. Cleanup removes stale callbacks and must remain correct under React StrictMode's double effect cycle. If motion is unavailable or reduced, content renders visible immediately. Expose direction and delay through classes/CSS variables rather than inline transform logic.

- [ ] **Step 3: Apply reveals at meaningful content boundaries**

Wrap homepage section headers/bodies, each project row, case header/cover, and case sections. Do not wrap individual paragraphs or list items; staggered micro-elements would make reading feel slow.

- [ ] **Step 4: Run reveal and reduced-motion tests**

Run: `npm run test:e2e --workspace=sneha-portfolio -- --grep "direction C|reduced motion"`

Expected: selected tests pass and no content remains hidden with reduced motion.

### Task 4: Build direction C's expressive composition

**Files:**
- Create: `apps/sneha-portfolio/src/components/HeroArtwork.tsx`
- Modify: `apps/sneha-portfolio/src/sections/Hero.tsx`
- Modify: `apps/sneha-portfolio/src/components/ProjectCard.tsx`
- Modify: `apps/sneha-portfolio/src/App.css`

- [ ] **Step 1: Build the decorative hero artwork**

Render three labelled panels using the existing optimized Moodofy, Adidas, and PHICA images. Mark the collage `aria-hidden="true"` and use empty image alternatives because the projects are described below. Add bounded pointer parallax only on desktop fine-pointer devices; reset CSS variables on pointer leave.

- [ ] **Step 2: Add expressive motion tokens and keyframes**

Define a direction C curve, reveal travel, depth shadow, panel rotation, and float amplitude as custom properties. Add hero entrance, slow settled float, reveal, image scale, and arrow-slide keyframes/transitions using only opacity and transforms. Restrict settled floating to desktop fine-pointer devices along with pointer parallax.

- [ ] **Step 3: Alternate project-row composition**

Use the existing project index to alternate desktop row direction while preserving a single-column reading order on mobile. Increase artwork prominence, add a numbered project marker, and keep all card content inside the link's accessible name.

- [ ] **Step 4: Keep case studies calm and tall images readable**

Limit continuous motion to the decorative homepage collage. Remove the `88vh` cap for tall in-body screenshots so Moodofy's complete homepage renders at a readable width and natural height. Retain sensible maximum height for landscape diagrams.

- [ ] **Step 5: Implement responsive and reduced-motion rules**

At 860 px and below, and when desktop layout reaches 200% zoom, convert the collage to a compact horizontal stack beneath the copy, disable continuous floating/parallax, and remove alternating row direction. Under `prefers-reduced-motion`, remove animation names, hover transforms, and smooth scrolling; make every reveal visible and retain layout without blank placeholders.

- [ ] **Step 6: Run motion, image, and overflow tests**

Run: `npm run test:e2e --workspace=sneha-portfolio -- --grep "direction C|reduced motion|overflow|tall"`

Expected: all selected tests pass at the required viewport matrix, including explicit assertions for no running animation, no hover transform, auto scrolling under reduced motion, and the compact horizontal collage at mobile and 200% zoom.

### Task 5: Complete cleanup and local-server fidelity

**Files:**
- Modify: `apps/sneha-portfolio/scripts/serve-static.mjs`
- Verify absent: `.superpowers/brainstorm/78672-1789869718/`

- [ ] **Step 1: Add missing local MIME types**

Map `.webp` to `image/webp` and `.woff2` to `font/woff2` so the local production server matches browser expectations.

- [ ] **Step 2: Confirm cleanup candidates are unused**

Re-run searches for the already-trashed Vite starter assets. Confirm `.playwright-mcp/` and `.DS_Store` are gone. Preserve ignored source archives, source résumés, and retired images as required by the design spec.

- [ ] **Step 3: Verify the temporary visual companion remains removed**

Confirm `.superpowers/brainstorm/78672-1789869718/` has not been recreated. Do not remove `.superpowers/` broadly, `.remember/`, or other tooling state.

### Task 6: Full verification and visual review

**Files:**
- Verify only; no new files expected.

- [ ] **Step 1: Run static checks**

Run: `npm run lint --workspace=sneha-portfolio`

Expected: exit 0 with no errors.

Run: `npm run build:sneha`

Expected: image optimization, TypeScript, client build, SSR build, and five-route prerender all exit 0.

Run: `npm run test:e2e --workspace=sneha-portfolio`

Expected: all Playwright tests pass with zero failures.

- [ ] **Step 2: Verify generated-route HTTP behavior**

Check homepage, all three project routes, résumé, and optimized images return 200 with correct content types; check an invalid route returns the real prerendered 404 with status 404.

- [ ] **Step 3: Inspect every route in the controlled browser**

At 360, 390, 768, and 1440 px, inspect homepage, Moodofy, Adidas, PHICA, and 404. Verify hierarchy, no clipping/overflow, menu behavior, image legibility, keyboard order, visible focus, 200% zoom, and reduced motion. Capture screenshots outside the repository.

- [ ] **Step 4: Compare against supplied references**

Revisit the five reference portfolios and judge direction C on personality, project-image scale, motion restraint, case-study readability, and responsive polish. Report concrete differences rather than claiming visual parity from tests alone.

- [ ] **Step 5: Review the final diff**

Run: `git diff --check` and `git status --short`.

Expected: no whitespace errors; only intended user work, direction C changes, tests, plan/spec, and verified deletions remain. Do not commit or push.
