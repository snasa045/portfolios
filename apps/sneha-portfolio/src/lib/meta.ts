import { profile } from '../data/portfolio';
import { featuredProjects } from '../data/projects';

export type PageMeta = { title: string; description: string };

export const homeMeta: PageMeta = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
};

export const notFoundMeta: PageMeta = {
  title: `Page not found — ${profile.name}`,
  description: 'That page doesn’t exist, or it has moved.',
};

/** `path` is route-relative (basename already stripped). */
export function metaForPath(path: string): PageMeta {
  if (path === '/' || path === '') return homeMeta;

  const slug = path.match(/^\/project\/([^/]+)\/?$/)?.[1];
  const project = slug && featuredProjects.find((p) => p.slug === slug);
  if (!project) return notFoundMeta;

  return {
    title: `${project.title} — ${profile.name}`,
    description: project.seoDescription,
  };
}
