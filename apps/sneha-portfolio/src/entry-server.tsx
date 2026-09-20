import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { featuredProjects } from './data/projects';
import { metaForPath, type PageMeta } from './lib/meta';

const base = import.meta.env.BASE_URL;

export type RouteMeta = PageMeta & {
  path: string;
  out: string;
};

export const routes: RouteMeta[] = [
  { path: '/', out: 'index.html', ...metaForPath('/') },
  ...featuredProjects.map((project) => ({
    path: `/project/${project.slug}`,
    out: `project/${project.slug}/index.html`,
    ...metaForPath(`/project/${project.slug}`),
  })),
  { path: '/__404__', out: '404.html', ...metaForPath('/__404__') },
];

export function render(route: RouteMeta) {
  const location = base.replace(/\/$/, '') + route.path;
  const html = renderToString(
    <StaticRouter basename={base} location={location}>
      <App />
    </StaticRouter>,
  );

  const isError = route.out === '404.html';
  const head = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    isError
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${esc(route.canonical!)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    ...(isError ? [] : [`<meta property="og:url" content="${esc(route.canonical!)}" />`]),
    `<meta property="og:image" content="${esc(route.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${esc(route.image)}" />`,
  ].join('\n    ');

  return { html, head };
}

function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
