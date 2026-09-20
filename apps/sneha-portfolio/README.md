# Sneha's portfolio

React 19 + Vite 8 + TypeScript. Deployed to GitHub Pages at
`https://snasa045.github.io/portfolios/sneha/`.

## Commands

Run from the repo root:

```bash
npm install
npm run dev:sneha                              # dev server (empty shell, client-rendered)
npm run build:sneha                            # client build → SSR build → prerender
npm run lint --workspace=sneha-portfolio
```

From this folder, to check the real deployed behaviour:

```bash
npm run serve:dist     # serves dist/ at http://localhost:4178/portfolios/sneha/
```

`serve:dist` mirrors GitHub Pages: it returns a real 404 with the 404 document and never falls
back to `index.html`. **Vite's dev server returns 200 for every path**, so it cannot tell you
whether project links work — always verify against `serve:dist`.

## Content

| What | Where |
|---|---|
| Name, role, CSA section, experience, capabilities | `src/data/portfolio.ts` |
| Case studies and supporting projects | `src/data/projects.ts` |
| Types for the content model | `src/types/portfolio.ts` |
| Page titles and descriptions | `src/lib/meta.ts` |

`meta.ts` is the single source for titles and descriptions — the prerenderer and client
navigation both read it, so they cannot drift.

### Content rules

- Every project carries a `status`: `shipped`, `prototype`, `capstone`, `concept`, or `summary`.
  Concept work is never presented as shipped.
- Outcomes carry a `kind`: `result`, `estimate`, `hypothesis`, or `qualitative`. Anything that is
  not a measured result says so.
- CSA work is confidential. The `currentWork` section stays at the level Sneha has already
  published on her own LinkedIn — no screens, no internal detail.
- Claim provenance lives in `.claude/plans/sneha/sneha-content-evidence.md`.

### Images

| Location | Contents | Published? |
|---|---|---|
| `assets/images-src/` | Source PNGs — the originals | No |
| `public/images/` | Generated WebP derivatives at 640/960/1600 | Yes |
| `public/documents/` | Approved résumé PDF | Yes |
| `assets/retired-images/` | Images no longer used but worth keeping | No |
| `assets/portfolio-source/` | Full design archive (gitignored, 1.3 GB) | No |

To add an image: drop the PNG in `assets/images-src/`, then reference it by base name —
`{ name: 'moodofy-homepage', alt: '…', width, height }`. `npm run images` generates the
derivatives; the build runs it automatically and prunes orphans.

Everything ships as WebP, no PNG fallback — baseline support since Safari 14 (2020). The
originals never reach `dist/`.

### Résumé

`public/documents/Sneha-Jadhav-Resume.pdf`, linked from the header and the contact section via
`profile.resume`. Replacing it means dropping in a new file at that path — no code change.

The published PDF is Sneha's two-column layout, which reads well for a human but is riskier
through strict ATS parsers. An ATS-safe single-column DOCX of the same content is kept locally
in `assets/` and ignored by git. Use that one for job-board uploads.

Rules:

- **Look at an image before publishing it.** A cohort Zoom screenshot containing 25
  identifiable faces was previously shipped as an "Adidas case-study figure".
- Real `alt` text describing what is actually in the image, plus `width`/`height` from the
  source so `srcset` picks correctly and layout doesn't shift.
- Card covers crop to 16:10; case-study heroes and in-body figures use `contain` so whole
  artefacts stay readable.
- `sevenmentor-*` and `recruit-1` in `assets/retired-images/` are the **only surviving copies**
  of that work — nothing else in the archive or the Downloads dumps matches them.

## Route generation

`npm run build` runs four steps:

1. `node scripts/optimize-images.mjs` → WebP derivatives (skipped if `cwebp` is absent, since
   they're committed)
2. `vite build` → client bundle and `dist/index.html` template
3. `vite build --ssr src/entry-server.tsx --outDir dist-ssr` → server renderer
4. `node scripts/prerender.mjs` → writes real HTML per route

Output:

```
dist/index.html
dist/project/moodofy/index.html
dist/project/adidas-hackathon/index.html
dist/project/rafiki-phica/index.html
dist/404.html
```

`dist-ssr/` is a build artefact and is not published. Adding a project to `featuredProjects`
automatically adds its prerendered route — no separate registration.

Pages hydrate rather than client-render in production (`src/main.tsx` checks whether the root
already has children).

## Publishing

`.github/workflows/deploy-sneha.yml` runs on pushes to `main` that touch this app, the workflow,
or the root `package.json` / `package-lock.json`. It stages `dist/` under `pages/sneha/`, copies
the app's `404.html` to the Pages site root, and deploys.
