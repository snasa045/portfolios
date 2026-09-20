import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Mirrors GitHub Pages: serves dist/ under the deploy base, returns the real 404
 * document with a 404 status, and never falls back to index.html for missing files.
 */
const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(appRoot, 'dist');
const BASE = '/portfolios/sneha/';
const PORT = Number(process.env.PORT ?? 4178);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
};

const send = (res, status, body, type) => {
  res.writeHead(status, { 'content-type': type });
  res.end(body);
};

const notFound = async (res) => {
  try {
    send(res, 404, await readFile(join(dist, '404.html')), TYPES['.html']);
  } catch {
    send(res, 404, 'Not found', 'text/plain');
  }
};

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/') {
    res.writeHead(302, { location: BASE });
    return res.end();
  }
  if (!url.pathname.startsWith(BASE)) return notFound(res);

  const rel = normalize(url.pathname.slice(BASE.length)).replace(/^(\.\.[/\\])+/, '');
  let file = join(dist, rel);

  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
  } catch {
    // Directory-style route without a trailing slash, e.g. /project/moodofy
    if (!extname(file)) {
      try {
        await stat(join(file, 'index.html'));
        file = join(file, 'index.html');
      } catch {
        return notFound(res);
      }
    } else {
      return notFound(res);
    }
  }

  try {
    send(res, 200, await readFile(file), TYPES[extname(file)] ?? 'application/octet-stream');
  } catch {
    return notFound(res);
  }
}).listen(PORT, () => console.log(`dist/ served at http://localhost:${PORT}${BASE}`));
