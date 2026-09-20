import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(appRoot, 'dist');

const { routes, render } = await import(resolve(appRoot, 'dist-ssr/entry-server.js'));
const template = await readFile(resolve(dist, 'index.html'), 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Prerender: root mount point not found in built index.html');
}

for (const route of routes) {
  const { html, head } = render(route);

  // Drop the template's static title/description so the per-route ones are not duplicates.
  const page = template
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/, '')
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('</head>', `  ${head}\n  </head>`);

  const outFile = resolve(dist, route.out);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, page, 'utf8');
  console.log(`  prerendered ${route.out}`);
}

console.log(`Prerendered ${routes.length} routes.`);
