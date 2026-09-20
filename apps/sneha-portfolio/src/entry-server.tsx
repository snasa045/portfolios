import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { featuredProjects } from './data/projects';
import { homeMeta, metaForPath, notFoundMeta } from './lib/meta';

const BASE = import.meta.env.BASE_URL;
const ORIGIN = 'https://snasa045.github.io';

export type RouteMeta = {
  path: string;
  /** Output file relative to dist/. */
  out: string;
  title: string;
  description: string;
  /** Social preview filename, without the images/ prefix. */
  preview: string;
};

const WIDTHS = [640, 960, 1600];

/** Sources are never upscaled, so the widest derivative depends on the original. */
const previewFor = (cover?: { name: string; width?: number }) => {
  if (!cover) return `${featuredProjects[0].cover!.name}-960.webp`;
  const w = WIDTHS.filter((x) => x <= (cover.width ?? Infinity)).pop() ?? WIDTHS[0];
  return `${cover.name}-${w}.webp`;
};

const defaultPreview = previewFor(featuredProjects[0].cover);

export const routes: RouteMeta[] = [
  { path: '/', out: 'index.html', ...homeMeta, preview: defaultPreview },
  ...featuredProjects.map((p) => ({
    path: `/project/${p.slug}`,
    out: `project/${p.slug}/index.html`,
    ...metaForPath(`/project/${p.slug}`),
    preview: previewFor(p.cover),
  })),
  { path: '/__404__', out: '404.html', ...notFoundMeta, preview: defaultPreview },
];

export function render(route: RouteMeta) {
  const location = BASE.replace(/\/$/, '') + route.path;
  const html = renderToString(
    <StaticRouter basename={BASE} location={location}>
      <App />
    </StaticRouter>,
  );

  const isError = route.out === '404.html';
  const canonical = `${ORIGIN}${BASE.replace(/\/$/, '')}${route.path === '/' ? '/' : route.path}`;
  const preview = `${ORIGIN}${BASE}images/${route.preview}`;

  const head = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    // A 404 is served at many URLs, so it gets no canonical and stays out of the index.
    isError
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    ...(isError ? [] : [`<meta property="og:url" content="${esc(canonical)}" />`]),
    `<meta property="og:image" content="${esc(preview)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${esc(preview)}" />`,
  ].join('\n    ');

  return { html, head };
}

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
