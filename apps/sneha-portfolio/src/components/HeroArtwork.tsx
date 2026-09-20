import { useRef, type CSSProperties, type PointerEvent } from 'react';
import { assetUrl } from '../data/portfolio';

const panels = [
  {
    name: 'Moodofy',
    detail: 'Wellbeing · Mobile',
    image: 'moodofy-cover-960.webp',
    width: 2618,
    height: 1730,
  },
  {
    name: 'Adidas',
    detail: 'Retail · Concept',
    image: 'adidas-1-960.webp',
    width: 2876,
    height: 1626,
  },
  {
    name: 'PHICA',
    detail: 'Strategy · B2B',
    image: 'rafiki-persona-960.webp',
    width: 3444,
    height: 1839,
  },
] as const;

export default function HeroArtwork() {
  const stageRef = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!matchMedia('(min-width: 861px) and (hover: hover) and (pointer: fine)').matches) return;
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    [0.35, 0.65, 1].forEach((depth, index) => {
      stage.style.setProperty(`--pointer-x-${index + 1}`, `${(x * depth).toFixed(2)}px`);
      stage.style.setProperty(`--pointer-y-${index + 1}`, `${(y * depth).toFixed(2)}px`);
    });
  };

  const reset = () => {
    [1, 2, 3].forEach((index) => {
      stageRef.current?.style.setProperty(`--pointer-x-${index}`, '0px');
      stageRef.current?.style.setProperty(`--pointer-y-${index}`, '0px');
    });
  };

  return (
    <div
      ref={stageRef}
      className="hero-artwork"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <span className="hero-orbit hero-orbit-one" />
      <span className="hero-orbit hero-orbit-two" />
      {panels.map((panel, index) => (
        <figure
          key={panel.name}
          className={`hero-artwork-panel hero-artwork-panel-${index + 1}`}
          style={
            {
              '--panel-index': index,
              '--panel-delay': `${140 + index * 110}ms`,
              '--float-delay': `${index * -1.25}s`,
            } as CSSProperties
          }
        >
          <div className="hero-artwork-card">
            <img
              src={assetUrl(`images/${panel.image}`)}
              width={panel.width}
              height={panel.height}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : undefined}
            />
            <figcaption>
              <strong>{panel.name}</strong>
              <span>{panel.detail}</span>
            </figcaption>
          </div>
        </figure>
      ))}
      <span className="hero-artwork-note">Selected work · 2020—now</span>
    </div>
  );
}
