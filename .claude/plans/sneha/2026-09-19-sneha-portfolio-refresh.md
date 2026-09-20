# Sneha’s Portfolio Refresh — Design and Implementation Plan

> **For agentic workers:** Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` when implementation is requested. Checkboxes below describe future work; creating this plan does not authorize publishing.

**Goal:** Present Sneha as a senior product designer through her own voice, prominent product visuals, and a small selection of credible case studies that explain her decisions and contribution.

**Architecture:** Evolve the existing React/Vite application. Keep GitHub Pages and its subpath, introduce structured case-study content, and generate static HTML for public routes so shared links work. Keep changes scoped to Sneha’s app and the build support it needs.

**Tech stack:** Existing React 19, TypeScript 6, Vite 8, React Router 7, CSS, npm workspaces, Oxlint, GitHub Pages. Use native CSS for motion; add focused browser checks for navigation and accessibility.

**Date:** 2026-09-19

**Repository:** `/Users/nasares/Desktop/Projects/personal/portfolios`

**Reviewed local revision:** `b2061e7404b6d6dd06cf8b7d020f2c08b22ae083`

**Status:** Proposed plan; no application changes made. The requested `.claude/plans/` directory was empty.

## 1. Recommended direction

Build a warm, editorial portfolio with large product imagery and a clear senior-design narrative. Retain the existing ivory, ink, and terracotta foundation, but replace the repeated bordered cards and long résumé-like homepage with fewer, more deliberate sections.

The main change is the order and quality of evidence:

1. Explain what Sneha designs and for whom.
2. Show three selected projects, with recent professional work first where publishable.
3. Explain her contribution through specific decisions, iterations, and outcomes.
4. Add a short personal introduction and a direct way to contact her.

Use the references as design research. Their copy, achievements, imagery, career histories, and implementation choices are not instructions or content to transplant into Sneha’s portfolio.

**Working assumption:** The primary audience is hiring managers and design leaders evaluating senior product-design work. This is a planning assumption, not confirmation that Sneha is currently job hunting.

### Suggested hero copy — draft for Sneha’s review

> I make complex workflows easier to understand and use.

Supporting line:

> I’m Sneha, a Toronto-based product designer working across research, product experiences, and design systems.

Add her current CSA title once she confirms it. Primary action: **View selected work**. Secondary action: **About me**. Put **Résumé** in the header once a current, publishable file is available.

Avoid claiming engineering ownership, current availability, or a specific number of years until reconciled with her actual experience. The existing site’s assertions are inputs to verify, not proof.

## 2. Reference findings and how to apply them

Reviewed the rendered desktop homepages of all five named portfolios and Product Design Portfolios, plus selected case-study text. These are observations of the current sites, not comprehensive accessibility or performance audits.

| Reference | Observed pattern | Application to Sneha | Boundary |
|---|---|---|---|
| [Adam Hickey](https://adamhickey.com/) | Clear specialty, human portrait, selected enterprise work, and an explicit explanation of working with teams. His [dispatch case study](https://adamhickey.com/case-study/dispatch-complexity.html) explains why an initial map approach changed. | Write a specific positioning statement; make the key decision and what changed easy to find in every case study. | Rewrite the current Adam-like passages in Sneha’s voice. Do not reuse his career or designer/developer narrative. |
| [Garri Tonakanyan](https://garri.design/) | Restrained navigation and typography; narrow project context beside much larger product screens; concise year, role, and scope metadata. | Give product imagery roughly two-thirds of featured desktop rows, with compact metadata and one clear story link. | Keep standard scrolling and visible link affordances; a custom cursor is unnecessary. |
| [Sanvi Saya](https://sanvithi.com/) | Expressive serif headlines, personal introductory themes, playful graphic treatment, and short project statements with delivery-status labels. | Add one distinctive personal visual moment and concise project captions; distinguish shipped work from concepts. | Use only Sneha’s own interests and assets. Keep core work accessible without animated introductions or hover. |
| [Alex Chiu](https://mchiu.co.uk/) | An asymmetric bento layout mixes identity, contact, projects, principles, and personal interests. His [Rayo case study](https://mchiu.co.uk/case-studies/rayo-design-system/) provides a dedicated systems story. | Use a small, secondary About grid; give the CSA design-system work its own case study if evidence supports it. | Do not spread the whole portfolio across competing tiles. Some media showed playback errors during inspection; provide dependable poster/fallback states. |
| [Nate Bauer](https://nabauer.com/) | Focused domain positioning, portrait, visible résumé access, and selected work. His [recovery case study](https://nabauer.com/work/centene-recovery-platform) has context, role, outcomes, and section navigation. | Introduce role and team context early; provide an optional desktop contents rail and a strong case-study summary. | Keep Sneha’s narrative proportionate to the material; no invented leadership scope, testimonials, or metrics. |

### Additional inspiration discovered through Product Design Portfolios

The [directory](https://www.productdesignportfolios.com/) is useful for finding patterns, rather than choosing a single template to copy.

- **[Sydney Rasmussen](https://sydneyrasmussen.framer.website/):** The [nCino case study](https://sydneyrasmussen.framer.website/work/ncino) establishes role, team, timeline, and individual responsibilities early, then shows alternative designs. Apply this to explain what Sneha owned and why the final approach won.
- **[Rachel Chen](https://www.rachelchen.tech/):** Project cards distinguish concepts, contracts, handoffs, and shipped work. Apply clear delivery labels to Moodofy, Adidas, and professional projects. The [directory’s review](https://www.productdesignportfolios.com/portfolio/rachel-chen) also highlights communicating outcomes without relying on metrics.
- **[Lawrence Zheng’s directory entry](https://www.productdesignportfolios.com/portfolio/lawrence-zheng):** The directory describes a confidentiality-aware alternative for restricted work. Use that as a prompt for a public-safe CSA summary with an invitation to discuss permitted details. The direct site timed out in text retrieval, so its implementation was not verified.

**Synthesis:** Garri informs presentation scale; Sanvi informs personality; Adam, Nate, and Sydney inform case-study clarity; Alex informs a small personal section; Rachel informs honest project labels. These are recommendations, not a claim that all references share one design system.

## 3. Current portfolio audit

Evidence comes from local source and the [deployed portfolio](https://snasa045.github.io/portfolios/sneha/).

| Finding | Evidence | Planned change |
|---|---|---|
| Senior work is buried | `src/data/portfolio.ts` leads with Moodofy and other 2019–2020 projects. CSA appears later in `BuiltEndToEnd`, without linked case studies. | Lead with publishable recent work; curate older work as supporting evidence. |
| Borrowed voice weakens credibility | `Hero.tsx`, `HowIWork` data, `DesignToBuild.tsx`, and `About.tsx` closely track Adam’s phrasing. `DesignToBuild.tsx` even says “Thirteen years,” while the hero says 5+ years. | Replace the copy and remove the borrowed career-shift section. |
| Claims need source checks | `ProjectDetail.tsx` contains research counts, a 40% engagement hypothesis, SevenMentor sample/window details, and Recruit N Refer success rates without cited evidence in the reviewed files. | Trace each claim to source material or Sneha’s confirmation; remove unsupported specificity. This review does not establish that those claims are false. |
| Work status is ambiguous | Moodofy is a capstone concept but uses a shipped-concept label and also appears under an introduction presenting real delivered products. | Use explicit concept, prototype, shipped, or confidential-summary labels. |
| Biography is inconsistent | Both CSA roles end in Present; SevenMentor dates differ between the project and experience records. | Confirm promotion boundaries and dates; use one canonical timeline. |
| Homepage repeats itself | Nine sections include separate process, career-shift, built-work, experience, skills, and About narratives. | Reduce to hero, selected work, compact supporting work, About, and contact. |
| Images overpower or underserve the story | Cards use narrow thumbnails; detail pages render tall screenshots before explanatory content. `sprint-range` reuses a Moodofy image. | Create intentional covers and contextual figures, with captions and correct project attribution. |
| Case-study layout lacks a consistent wrapper | `ProjectDetail.tsx` renders a top-level article without the homepage’s container. In-page navigation can retain the prior scroll position. | Add a page shell, reading width, and route-aware scroll/focus behavior. |
| Case-study navigation targets the wrong page | Header links are bare `#work`, `#about`, etc.; on Moodofy they resolve inside that case-study URL. | Route home before scrolling to the requested section. |
| Shared project links fail | Direct HTTP request to `/portfolios/sneha/project/moodofy` returned **404**; browser navigation from the homepage rendered the page. | Generate real route HTML and verify against a static server without SPA fallback. |
| Media needs optimization | `public/images/` is about **14 MB**; SevenMentor’s first PNG is **10026 × 3932**; Moodofy’s cover is **1242 × 4320**. | Produce responsive covers and detail exports; do not use original giant PNGs as cards. |
| Résumé and page identity need attention | No résumé in the reviewed public-file inventory; one generic document title/description; raw archive includes older résumés. | Add an approved current résumé and route-specific metadata. Do not publish an old résumé automatically. |

All `src/` and `public/` paths in this audit are inside `apps/sneha-portfolio/`. Raw assets were inventoried selectively; their contents were not exhaustively validated. Mobile behavior, contrast compliance, and current build health remain implementation-stage checks.

A separate asset reorganization appeared during this review. Start future content work from `apps/sneha-portfolio/assets/portfolio-source/README.md` and its project folders; preserve the in-progress archive changes. Its labels distinguish project material, third-party references, and private research, but still verify individual files before selecting public content.

## 4. Content strategy and project selection

### Preferred featured lineup

| Priority | Candidate | Story to develop | Material required before publication |
|---|---|---|---|
| 1 | CSA Advantage | A specific standards-access workflow across desktop and mobile, and how research shaped it. | Approved screens, users/problem, Sneha’s role, alternatives, delivery status, and evidence of what changed. |
| 2 | CSA Design System | A concrete consistency or accessibility problem solved through shared patterns and adoption. | Approved component examples, before/after comparison, ownership, contribution process, and actual adoption evidence. |
| 3 | Travel Discounters | A sales-agent workflow or customer journey improved through research and iteration. | Source designs, role/scope, public-use clearance, and definitions/evidence for any business claims. |

These are candidate stories grounded in the existing biography, not newly verified case studies. If CSA Advantage and the system story overlap too much, feature the stronger one and keep the other as a supporting section.

**Fallback release:** If professional material is unavailable, use the strongest verified combination of SevenMentor, Recruit N Refer, and Moodofy. Publish two strong case studies if only two are ready. Do not pad the page with a third incomplete story. Recent CSA work can appear as a concise approved experience summary without a case-study link.

**Supporting work:** Keep Adidas and Figo Friend in a small “Earlier work and explorations” section. Split the current mixed sprint collection only if there is enough distinct material; otherwise use brief, correctly attributed summaries. Preserve existing slugs for retained projects.

### Evidence rules

- For each number, record the source, date/window, what was measured, and whether it describes a result, estimate, or hypothesis. Avoid implying causation from a business change alone.
- Store verification notes outside the public bundle. Runtime data contains approved public copy only.
- Replace editorial instructions currently visible in copy, such as ranking a project as the strongest proof, with actual project information.
- Use qualitative evidence where no reliable metric exists: an observed usability issue resolved, an approved flow shipped, a documented decision adopted, or a limitation acknowledged.
- Keep medical or financial concepts framed as design projects; do not add claims of clinical effectiveness or financial benefit.
- Confirm current role, résumé, portrait, contact preferences, and availability with Sneha. Omit unconfirmed availability and response-time promises.
- Client-side password screens do not protect static assets. Confidential material stays outside public data, images, and generated HTML. A public-safe summary is sufficient for this release.

### Case-study structure

Target approximately 600–1,000 words for a flagship story, adjusted to available evidence:

1. **Summary:** Problem, users, Sneha’s role, team, dates, delivery status, and the change achieved.
2. **Context and constraints:** What made the work hard; what was outside her scope.
3. **Key insight:** Evidence that changed the direction.
4. **Two or three decisions:** Each pairs a decision with a visual, alternative considered, and reason.
5. **Solution in context:** A readable workflow, before/after pair, or short optional recording.
6. **Outcome and limits:** Measured or qualitative result, attribution, and what remains unknown.
7. **Reflection:** What she would keep or change next time.
8. **Next project / Back to work:** Keep the reader moving.

For a design-system story, replace a generic process timeline with a real component/pattern example, its constraints, and how it reached product teams.

## 5. Page and visual design

### Homepage composition

```text
Header: Sneha Jadhav                       Work   About   Résumé   Contact
Hero: original positioning + short introduction + optional personal image
      View selected work / About me
Selected work: 2–3 large image-led project features
Earlier work: compact, clearly labelled supporting projects
About: portrait or personal artifact + short story + compact experience
Contact: email + LinkedIn + résumé
Footer: name, year, location if confirmed
```

Make the start of selected work visible near the first fold on a typical desktop. Treat this as a composition goal, not a fixed-height rule that breaks when text grows.

### Art direction

- **Canvas:** Keep warm ivory `#FAF7F2`, dark ink `#1C1917`, and the existing terracotta family. Use tinted project backgrounds sparingly. Validate actual text/background pairs before finalizing.
- **Type:** Retain Fraunces for selected display headlines and Inter for body/navigation in the first iteration. This preserves continuity and avoids a font search becoming the redesign. Limit italics to occasional emphasis.
- **Scale:** Hero approximately 44–80 px across mobile/desktop; body 17–20 px; case-study text around 60–70 characters per line. Use fluid sizing, not device-specific fixed heights.
- **Layout:** Main width approximately 1200 px; reading column approximately 720 px; generous 64–112 px desktop section gaps and 40–64 px on mobile.
- **Featured work:** Large 3:2 or 16:10 cover beside short context on desktop, single column on mobile. Use actual screens composed into a cover, not an entire long page shrunk into a thumbnail.
- **Cards:** One subtle surface or border where helpful. Remove the combination of repeated accent rails, dashed outcome boxes, pill overload, and shadows from every section.
- **Personal signature:** A real portrait, sketch, or small personal artifact supplied by Sneha. Until available, use typography and work imagery; do not invent hobbies or generate a substitute person.
- **About:** At most three small tiles for confirmed interests or working principles. Keep full experience and capabilities compact; remove duplicated career summaries.

### Interaction and accessibility

- Visible text links and keyboard focus remain available on every project; no hover-only title or custom cursor dependency.
- Use subtle 150–250 ms hover/focus transitions. Optional reveals must leave content visible if JavaScript or observation fails.
- Respect reduced-motion settings; disable smooth scrolling and nonessential movement in that mode.
- Avoid autoplay hero video. A project recording should have a poster, controls, and a clear purpose.
- Mobile navigation should use an accessible disclosure button if links do not fit: expanded state, Escape closing, and predictable focus.
- Provide a skip link, meaningful landmarks, proper heading order, descriptive figure text, and scroll offsets for the sticky header.
- Use approximately 44 px tap targets as a design target. Validate contrast and zoom with actual rendered content.

## 6. Implementation work packages

The sequence below is an implementation plan, not evidence that the work has already been performed. Paths are repository-relative.

### Task 1 — Establish content and assets

**Create:** `.claude/plans/sneha-content-evidence.md` and `.claude/plans/sneha-asset-manifest.md` during implementation.

- [ ] Inventory `apps/sneha-portfolio/assets/portfolio-source/case-studies/` and `projects/` first, using the curated README as a locator, and identify the exact source for each candidate case study. Exclude private interview transcripts and third-party reference imagery from publication.
- [ ] Create an evidence table with claim, source reference, verified wording, public-use status, and missing information. Keep the notes sanitized: `.claude/plans/` is not ignored, so anything committed there can be published with the repository. Keep participant identities, raw interviews, and restricted documents in their private source location rather than copying them into these notes or app imports.
- [ ] Resolve the role/date conflicts and remove unsupported facts from the proposed copy.
- [ ] Choose the featured lineup using the preferred/fallback rules above.
- [ ] Draft one complete flagship story before designing the other project pages.
- [ ] Map each approved visual to its project, intended placement, caption, alt text, and derivative filename.

**Done when:** At least two stories can be published honestly, or missing content is explicitly identified while layout work proceeds with clearly marked local drafts. Draft material must not be included in the release.

### Task 2 — Define project content and reusable presentation

**Modify:** `apps/sneha-portfolio/src/data/portfolio.ts`

**Create:** `apps/sneha-portfolio/src/data/projects.ts`, `apps/sneha-portfolio/src/types/portfolio.ts`, `apps/sneha-portfolio/src/components/ProjectCard.tsx`, `apps/sneha-portfolio/src/components/ProjectMedia.tsx`

- [ ] Keep profile and experience data in `portfolio.ts`; move project records and galleries into `projects.ts`.
- [ ] Define typed fields for slug, title, summary, role, team, timeframe, delivery status, feature order, cover, public sections, outcomes, and SEO description.
- [ ] Keep delivery status separate from publishability. An approved confidential summary may be public; restricted details may not.
- [ ] Model figures with source, alt text, caption, width/height, and responsive variants. Use one base-aware asset helper.
- [ ] Make project cards real block/grid links; replace `display: contents` so their focus ring has a visible box.
- [ ] Keep case-study sections as a small typed set: text, figure, comparison, and outcomes. Do not build a general-purpose CMS.

**Done when:** Homepage cards and case-study routes read the same approved records, and each visual belongs to the correct project.

### Task 3 — Rebuild the homepage hierarchy

**Modify:** `apps/sneha-portfolio/src/App.tsx`, `src/sections/Hero.tsx`, `Projects.tsx`, `About.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx`, `src/index.css`, `src/App.css`

**Create:** `apps/sneha-portfolio/src/sections/SupportingWork.tsx`

All abbreviated `src/` paths in this task are under `apps/sneha-portfolio/`.

- [ ] Implement the tokens, content width, type scale, and section spacing first.
- [ ] Replace hero copy and remove the unrelated historic-metric strip and duplicate outbound portfolio CTA.
- [ ] Render the chosen flagship projects with large covers and short, original captions.
- [ ] Add supporting work only when its content is ready.
- [ ] Fold compact experience/capabilities into About and simplify contact to clear, working actions.
- [ ] Remove homepage mounts for `HowIWork.tsx`, `DesignToBuild.tsx`, and `BuiltEndToEnd.tsx`; move useful verified material into the relevant case studies.
- [ ] Remove obsolete imports/data/styles after confirming they are unused. This is source cleanup, not deletion of original assets.
- [ ] Review the homepage at 390 px and 1440 px widths before propagating styling.

**Done when:** A reader can identify Sneha’s focus, find featured work, and contact her without navigating repeated sections.

### Task 4 — Build the case-study reading experience

**Modify:** `apps/sneha-portfolio/src/pages/ProjectDetail.tsx`, `src/App.css`

**Create:** `apps/sneha-portfolio/src/components/CaseStudyContents.tsx`, `apps/sneha-portfolio/src/styles/case-study.css`

- [ ] Replace slug-specific prose branches with the typed case-study sections.
- [ ] Put a concise summary before long screenshots; use a shared page container and readable text width.
- [ ] Add desktop section navigation; on mobile provide a compact contents list that does not trap scrolling.
- [ ] Position visuals beside the decision they explain; preserve readable image proportions.
- [ ] Use side-by-side before/after figures with mobile stacking; no comparison slider is necessary.
- [ ] Add next-project and back-to-work links.
- [ ] Retain existing public slugs where their material is still appropriate. For retired content, define an explicit replacement destination or an honest unavailable page with no unsupported claims.

**Done when:** Every published case study explains ownership, at least one substantive decision, and an outcome or limitation. There are no placeholder sections or unrelated screenshots.

### Task 5 — Fix navigation and public URLs

**Modify:** `apps/sneha-portfolio/src/App.tsx`, `src/main.tsx`, `src/components/Navbar.tsx`, `index.html`, `package.json`, `vite.config.ts`, `.github/workflows/deploy-sneha.yml`

**Create:** `apps/sneha-portfolio/src/components/RouteNavigation.tsx`, `apps/sneha-portfolio/src/pages/NotFound.tsx`, `apps/sneha-portfolio/src/entry-server.tsx`, `apps/sneha-portfolio/scripts/prerender.mjs`

- [ ] Move the browser router wrapper to `main.tsx` so the shared App can also render inside a static router.
- [ ] Implement links that navigate to the homepage and requested anchor from case studies; maintain sticky-header offsets.
- [ ] On forward route changes, move to the new page heading; for Back navigation restore the previous work-list position when possible. Handle anchor navigation after the destination has mounted.
- [ ] Keep `/portfolios/sneha/` as the deployment base and existing `/project/:slug` route shape.
- [ ] Use one `NotFound` page for unknown project slugs and a wildcard app route. Its initial content should not depend on the requested URL, so the generated 404 document hydrates consistently at unknown paths.
- [ ] Build a server-renderable entry with React’s server renderer and React Router’s static router. Export the approved public route list and render function from that entry.
- [ ] Add a build step that reads Vite’s built HTML template, inserts each route’s rendered content and metadata, and writes `dist/index.html` plus `dist/project/<slug>/index.html`. Generate an application 404 page too.
- [ ] Put the server build in a separate temporary output such as `dist-ssr/`; publish only `dist/`. Keep both builds on the same Vite base. Do not execute browser-only APIs while rendering.
- [ ] Hydrate pre-rendered pages in production; retain `createRoot` for the empty development shell. Ensure initial client and server content match.
- [ ] Stage the app’s 404 at the Pages site root as `pages/404.html`, as well as preserving the existing `pages/sneha/` app layout.
- [ ] Update workflow path filters for root `package.json` and `package-lock.json`, because dependency changes affect the build.
- [ ] Verify fresh loads and refreshes on a plain static server. Vite’s SPA fallback is insufficient evidence of a fix.

**Done when:** Existing valid case-study links resolve to real content on direct entry and refresh, navigation reaches the correct section, and invalid URLs show a useful 404. No framework migration or new hosting service is required.

**Technical references:** [Vite static pre-rendering/SSR](https://vite.dev/guide/ssr), [React Router StaticRouter](https://reactrouter.com/api/declarative-routers/StaticRouter), [React hydration](https://react.dev/reference/react-dom/client/hydrateRoot). Match APIs to the installed versions; do not upgrade Router merely because the documentation defaults to a newer major.

### Task 6 — Finish media, résumé, and metadata

**Modify:** `apps/sneha-portfolio/index.html`, project/profile data, `src/components/ProjectMedia.tsx`

**Create:** approved derivatives under `apps/sneha-portfolio/public/images/projects/<slug>/`, approved résumé under `public/documents/`, self-hosted font assets if chosen

- [ ] Create responsive WebP/AVIF derivatives from approved originals; preserve the source files. Typical widths: 640, 960, and 1600 px, with larger detail exports only when needed for legibility.
- [ ] Use explicit dimensions, responsive sources, and lazy loading below the fold. Do not lazy-load the likely largest-contentful element.
- [ ] Aim for covers below 250 KB each and initial homepage transfer below 1.5 MB. These are proposed budgets; measure actual loading and document justified exceptions.
- [ ] Add a current approved résumé with a descriptive link. If missing, omit the link rather than shipping a broken or stale file.
- [ ] Add route-specific title, description, canonical URL, and social preview image to generated HTML; use the actual deployed origin, not an assumed custom-domain migration.
- [ ] Update metadata on client navigation as well as direct page loads.
- [ ] Check favicon, images, fonts, and résumé under the Pages base path.
- [ ] Limit animation to the agreed interactions and add reduced-motion behavior.

**Done when:** All assets load at the deployed subpath, image text is readable, and link previews identify the correct project.

### Task 7 — Verification and handoff

**Create:** `apps/sneha-portfolio/tests/portfolio.spec.ts`, `apps/sneha-portfolio/playwright.config.ts`, `apps/sneha-portfolio/scripts/serve-static.mjs`

**Modify:** `apps/sneha-portfolio/package.json`, root `package-lock.json`, `apps/sneha-portfolio/README.md`

- [ ] Add Playwright as a development dependency in Sneha’s workspace and a `test:e2e` script. Limit automated tests to meaningful navigation, rendering, and interaction regressions.
- [ ] Make the test server mount `dist/` at `/portfolios/sneha/`, serve directory index files, and serve the generated 404 document with HTTP 404 for unknown paths. It must not silently return the homepage for missing files. Check hydration and the back-to-work action on an unknown project URL.
- [ ] Test direct entry and refresh for every public route, home anchors from a project, Back navigation, invalid slugs, mobile menu keyboard behavior, and asset availability.
- [ ] Test one flagship page with JavaScript disabled: heading, story, links, and metadata must still exist.
- [ ] Run build, lint, and browser checks. Inspect keyboard order, focus visibility, 200% zoom, image readability, reduced motion, and horizontal overflow at 360, 390, 768, and 1440 px.
- [ ] Check document contrast and automated accessibility findings; manually review key interactions. Do not describe a passing automated scan as full compliance.
- [ ] Capture desktop/mobile screenshots and a short verification summary, including any unresolved content dependencies.
- [ ] Update the app README with actual commands, content locations, asset rules, route generation, and publishing steps.

Existing commands, run from the repository root:

```bash
npm ci
npm run dev:sneha -- --host 127.0.0.1
npm run lint --workspace=sneha-portfolio
npm run build:sneha
```

Use the Node 22 line configured by the existing workflow, with a version satisfying the locked toolchain’s requirements. After the proposed test tooling is added:

```bash
npm exec --workspace=sneha-portfolio -- playwright install chromium
npm run test:e2e --workspace=sneha-portfolio
```

**Expected:** Build and lint exit successfully; browser checks pass on the static artifact; valid routes return 200 after any trailing-slash redirect, invalid routes return 404, and there are no hydration errors or missing assets.

Publishing is a separate handoff. No commit, push, or deployment is part of generating this plan. After a deployment is requested, repeat direct-link checks against the actual Pages URL.

## 7. Scope, dependencies, and definition of done

**First release:** Original positioning; two or three complete featured stories; large, readable imagery; compact About/contact; approved résumé if available; reliable routes; mobile and keyboard usability; metadata and media optimization.

**Defer:** Full-site bento layout, custom cursors, scroll hijacking, animated portrait generation, theme switching, a blog without real articles, fake testimonials, a CMS, contact-form backend, and client-side password protection.

**Content dependencies:** Sneha’s approved current role/timeline, preferred work focus, public-use permissions for professional material, usable case-study visuals, claim evidence, and current résumé. Missing material affects which stories ship; it does not block building the reusable layout.

**Implementation dependencies:** Task 1 informs Task 2; Tasks 3 and 4 use the shared content model; Task 5 supplies deployment reliability; Task 6 finishes assets and metadata; Task 7 validates the combined result. Draft the first flagship story before expanding all pages.

The redesign is ready to publish when:

- [ ] Sneha’s voice and career are represented accurately, with copied narrative and unsupported claims removed.
- [ ] Each featured project has a clear role, real visual evidence, a meaningful design decision, and a defensible outcome or limitation.
- [ ] Professional and concept work are labelled correctly; confidential material is absent from public artifacts.
- [ ] A reader can reach selected work, About, résumé where available, and contact from every page.
- [ ] Direct project links, refresh, Back navigation, mobile navigation, and keyboard use work.
- [ ] Images, metadata, and generated HTML work under the actual Pages subpath.
- [ ] Verification evidence and remaining content limitations are recorded.

## 8. Review scope and limitations

This plan used a live desktop visual review, selected case-study reading, local source inspection, asset measurements, and a direct HTTP route check on 2026-09-19. It did not run the local build or a full mobile/accessibility audit, independently verify Sneha’s career/impact claims, or review every raw source asset. The reference sites’ claims are studied for presentation, not independently endorsed.

The design guidance shaped the visual hierarchy and reference synthesis. The writing-plans workflow shaped the file-level tasks and acceptance criteria. A separate read-only plan review found no material blockers; its recommendations on 404 testing and keeping evidence notes sanitized are incorporated. The proposed work should be reviewed against Sneha’s real material before final copy is published.
