import {
  createElement,
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
} from 'react';

type Direction = 'up' | 'left' | 'right' | 'none';

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  direction?: Direction;
  delay?: number;
};

const callbacks = new Map<Element, () => void>();
let observer: IntersectionObserver | undefined;
let scrollFrame = 0;

function stopWhenIdle() {
  if (callbacks.size > 0) return;
  observer?.disconnect();
  observer = undefined;
  window.removeEventListener('scroll', schedulePassedCheck);
  cancelAnimationFrame(scrollFrame);
  scrollFrame = 0;
}

function revealPassedElements() {
  callbacks.forEach((callback, element) => {
    if (element.getBoundingClientRect().bottom >= 0) return;
    callback();
    callbacks.delete(element);
    observer?.unobserve(element);
  });
  stopWhenIdle();
}

function schedulePassedCheck() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    revealPassedElements();
  });
}

function sharedObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
        stopWhenIdle();
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  return observer;
}

function observe(element: Element, callback: () => void) {
  if (element.getBoundingClientRect().bottom < 0) {
    callback();
    return () => undefined;
  }

  const wasIdle = callbacks.size === 0;
  callbacks.set(element, callback);
  sharedObserver().observe(element);
  if (wasIdle) window.addEventListener('scroll', schedulePassedCheck, { passive: true });

  return () => {
    callbacks.delete(element);
    observer?.unobserve(element);
    stopWhenIdle();
  };
}

export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className,
  children,
  ...rest
}: RevealProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!element || !document.documentElement.classList.contains('motion-ready')) return;
    return observe(element, () => setVisible(true));
  }, [element]);

  const classes = ['reveal', `reveal-${direction}`, visible && 'is-visible', className]
    .filter(Boolean)
    .join(' ');
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return createElement(Tag, { ...rest, ref: setElement, className: classes, style }, children);
}
