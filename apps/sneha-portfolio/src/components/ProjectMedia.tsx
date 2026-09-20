import { assetUrl } from '../data/portfolio';
import type { Figure } from '../types/portfolio';

/** Must match WIDTHS in scripts/optimize-images.mjs. */
const WIDTHS = [640, 960, 1600];

/** Card images occupy ~62% of the 1200px container; covers and diagrams fill it. */
const SIZES = {
  card: '(max-width: 860px) 100vw, 740px',
  full: '(max-width: 1240px) 100vw, 1200px',
} as const;

type Props = {
  figure: Figure;
  /** Covers above the fold must not lazy-load — they're the likely LCP element. */
  eager?: boolean;
  layout?: keyof typeof SIZES;
  className?: string;
};

export default function ProjectMedia({ figure, eager = false, layout = 'full', className }: Props) {
  const available = WIDTHS.filter((w) => w <= (figure.width ?? Infinity));
  const widths = available.length ? available : [WIDTHS[0]];
  const url = (w: number) => assetUrl(`images/${figure.name}-${w}.webp`);

  return (
    <figure className={className ? `media ${className}` : 'media'}>
      <img
        src={url(widths[widths.length - 1])}
        srcSet={widths.map((w) => `${url(w)} ${w}w`).join(', ')}
        sizes={SIZES[layout]}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}
