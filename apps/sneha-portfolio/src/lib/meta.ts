import { profile } from '../data/portfolio';
import { featuredProjects } from '../data/projects';

const origin = 'https://snasa045.github.io';
const base = import.meta.env.BASE_URL;
const widths = [640, 960, 1600];

export type PageMeta = {
  title: string;
  description: string;
  image: string;
  canonical?: string;
};

const previewFor = (cover?: { name: string; width?: number }) => {
  const fallback = featuredProjects[0].cover!;
  const selected = cover ?? fallback;
  const width = widths.filter((candidate) => candidate <= (selected.width ?? Infinity)).pop() ?? 640;
  return `${origin}${base}images/${selected.name}-${width}.webp`;
};

const canonicalFor = (path: string) =>
  `${origin}${base.replace(/\/$/, '')}${path === '/' ? '/' : path}`;

export const homeMeta: PageMeta = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  canonical: canonicalFor('/'),
  image: previewFor(),
};

export const notFoundMeta: PageMeta = {
  title: `Page not found — ${profile.name}`,
  description: 'That page doesn’t exist, or it has moved.',
  image: previewFor(),
};

export const colourPaletteMeta: PageMeta = {
  title: `Design system — ${profile.name}`,
  description: 'Sneha Jadhav’s portfolio colour system, project palettes, and WCAG AA contrast pairings.',
  canonical: canonicalFor('/colour-palette'),
  image: previewFor(),
};

export function metaForPath(path: string): PageMeta {
  if (path === '/' || path === '') return homeMeta;
  if (path === '/colour-palette' || path === '/colour-palette/') return colourPaletteMeta;

  const slug = path.match(/^\/project\/([^/]+)\/?$/)?.[1];
  const project = slug && featuredProjects.find((candidate) => candidate.slug === slug);
  if (!project) return notFoundMeta;

  return {
    title: `${project.title} — ${profile.name}`,
    description: project.seoDescription,
    canonical: canonicalFor(`/project/${project.slug}`),
    image: previewFor(project.cover),
  };
}
