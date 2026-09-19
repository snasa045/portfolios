# Portfolios — Sneha & Sid

Scalable monorepo for two portfolio websites, built with React + Vite + TypeScript.

## Structure

```
portfolios/
  apps/
    sneha-portfolio/   # Sneha's modern portfolio (active development)
    sid-portfolio/     # Sid's portfolio (placeholder, same stack)
  packages/
    ui/                # Shared React components (@portfolios/ui)
  package.json         # npm workspaces + helper scripts
```

## Why monorepo?

- One repo, two independent deploys (Vercel / Netlify / GitHub Pages per app)
- Shared `packages/ui` for Button, SectionHeading, etc.
- Each app has its own `src/data/` so content edits don't touch components
- Add a third portfolio later with `npm create vite@latest apps/new-name`

## Quickstart

```bash
# install all workspaces (from repo root)
npm install

# run Sneha's site
npm run dev:sneha
# → http://localhost:5173

# run Sid's site
npm run dev:sid
# → http://localhost:5174 (run with --port flag if both at once)

# build
npm run build:sneha
npm run build:sid
```

## Editing Sneha's content

All copy lives in one file:

`apps/sneha-portfolio/src/data/portfolio.ts`

- `profile` — name, role, tagline, email, socials
- `about`, `skills`, `projects`, `navLinks`

Sections are in `apps/sneha-portfolio/src/sections/` and compose in `src/App.tsx`.

## Deploy

Each app in `apps/*` is a standalone Vite app — point your host at the app
folder with build command `npm run build` and output `dist`.

## Remote

GitHub: https://github.com/snasa045/portfolios (private)
