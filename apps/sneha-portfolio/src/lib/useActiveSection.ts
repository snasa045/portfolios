import { useEffect, useState } from 'react';

/**
 * A section takes the indicator once its top crosses roughly a third down the viewport —
 * the point where it starts to fill the screen. The floor keeps short viewports sane and
 * stays clear of .section's 80px scroll-margin so a clicked link registers immediately.
 */
const triggerLine = () => Math.max(120, window.innerHeight * 0.35);

/**
 * Tracks which of `ids` the reader is currently in. `ids` must be a stable reference —
 * define it at module scope or memoise it.
 */
export default function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      // The last section is often too short to reach the trigger line, so once the page
      // bottoms out it owns the indicator outright.
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        setActive(ids.at(-1) ?? null);
        return;
      }
      // Sections without a nav link (#earlier) simply leave the previous one lit.
      const line = triggerLine();
      let current: string | null = null;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line) current = id;
      }
      setActive(current);
    };

    const schedule = () => {
      frame ||= requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids, enabled]);

  // Derived rather than cleared inside the effect, which would cost a cascading render.
  return enabled ? active : null;
}
