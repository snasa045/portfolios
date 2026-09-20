import { execFile } from 'node:child_process';
import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

/**
 * Generates the WebP derivatives the site actually serves.
 * Sources live outside public/ so the originals are never published.
 */
const run = promisify(execFile);
const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(appRoot, 'assets/images-src');
const outDir = join(appRoot, 'public/images');

export const WIDTHS = [640, 960, 1600];
const QUALITY = 80;

const pixelWidth = async (file) => {
  const { stdout } = await run('sips', ['-g', 'pixelWidth', file]);
  return Number(stdout.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
};

const isStale = async (src, out) => {
  try {
    return (await stat(src)).mtimeMs > (await stat(out)).mtimeMs;
  } catch {
    return true;
  }
};

// Derivatives are committed, so CI can build without cwebp installed.
try {
  await run('cwebp', ['-version']);
} catch {
  console.log('  cwebp not found — using committed derivatives in public/images/');
  process.exit(0);
}

await mkdir(outDir, { recursive: true });

const sources = (await readdir(srcDir)).filter((f) => extname(f).toLowerCase() === '.png');
const expected = new Set();
let written = 0;

for (const file of sources) {
  const src = join(srcDir, file);
  const name = basename(file, extname(file));
  const srcWidth = await pixelWidth(src);

  // Never upscale: a 1242px-wide source gains nothing from a 1600px derivative.
  for (const w of WIDTHS.filter((w) => w <= srcWidth)) {
    const out = join(outDir, `${name}-${w}.webp`);
    expected.add(basename(out));
    if (!(await isStale(src, out))) continue;

    await run('cwebp', ['-quiet', '-q', String(QUALITY), '-sharp_yuv', '-resize', String(w), '0', src, '-o', out]);
    written += 1;
  }
}

// A renamed or deleted source would otherwise leave its derivatives behind forever.
let pruned = 0;
for (const f of await readdir(outDir)) {
  if (f.endsWith('.webp') && !expected.has(f)) {
    await rm(join(outDir, f));
    pruned += 1;
  }
}

console.log(`  ${written} written, ${pruned} pruned, ${expected.size} derivatives current`);
