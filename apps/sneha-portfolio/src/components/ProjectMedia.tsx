import { assetUrl } from '../data/portfolio';
import type { Figure } from '../types/portfolio';

/** Must match WIDTHS in scripts/optimize-images.mjs. */
const WIDTHS = [400, 640, 960, 1600];

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
  const isTall = Boolean(figure.height && figure.width && figure.height > figure.width * 1.5);
  const isPhone = figure.name === 'moodofy-flows' || figure.name === 'moodofy-homepage';
  const isScrollablePhone = figure.name === 'moodofy-homepage';

  const classes = ['media', isTall && 'media-tall', isPhone && 'media-phone', className]
    .filter(Boolean)
    .join(' ');
  const image = (
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
  );

  return (
    <figure className={classes} data-media={figure.name}>
      <div className="media-frame">
        <div
          className="media-screen"
          role={isScrollablePhone ? 'region' : undefined}
          tabIndex={isScrollablePhone ? 0 : undefined}
          aria-label={isScrollablePhone ? 'Scrollable prototype screen' : undefined}
        >
          {image}
        </div>
      </div>
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}
