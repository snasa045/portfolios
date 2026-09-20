import { useRef, type PointerEvent } from 'react';

/** Tilt in degrees at the very edge of the portrait. */
const MAX_TILT = 14;

type Props = { src: string; alt: string };

export default function PortraitTilt({ src, alt }: Props) {
  const stage = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);

  const track = (event: PointerEvent<HTMLDivElement>) => {
    const el = stage.current;
    const inner = tilt.current;
    if (!el || !inner) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    el.classList.add('is-live');
    inner.style.setProperty('--ry', `${(x - 0.5) * 2 * MAX_TILT}deg`);
    inner.style.setProperty('--rx', `${(0.5 - y) * 2 * MAX_TILT}deg`);
    inner.style.setProperty('--tz', '32px');
    inner.style.setProperty('--sc', '1.03');
    inner.style.setProperty('--mx', `${x * 100}%`);
    inner.style.setProperty('--my', `${y * 100}%`);
  };

  // Dropping the properties lets the slow easing carry it back rather than snapping.
  const release = () => {
    const el = stage.current;
    const inner = tilt.current;
    if (!el || !inner) return;
    el.classList.remove('is-live');
    for (const prop of ['--rx', '--ry', '--tz', '--sc']) inner.style.removeProperty(prop);
  };

  return (
    <div className="about-portrait" ref={stage} onPointerMove={track} onPointerLeave={release}>
      <div className="about-portrait-tilt" ref={tilt}>
        <img src={src} alt={alt} width={400} height={400} loading="lazy" decoding="async" />
        <span className="about-portrait-sheen" aria-hidden="true" />
      </div>
    </div>
  );
}
