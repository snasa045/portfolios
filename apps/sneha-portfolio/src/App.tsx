import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { profile } from './data/portfolio';
import { metaForPath } from './lib/meta';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import About from './sections/About';
import Contact from './sections/Contact';
import CurrentWork from './sections/CurrentWork';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import SupportingWork from './sections/SupportingWork';
import './App.css';

type RouteState = { scrollTo?: string } | null;

export default function App() {
  useRouteMeta();
  useRouteBehavior();

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={() =>
          requestAnimationFrame(() => document.querySelector<HTMLElement>('#main')?.focus())
        }
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="container" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}

function useRouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', { name: 'description' }, meta.description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, meta.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, meta.description);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, meta.image);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, meta.image);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogUrl = document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');

    if (meta.canonical) {
      const link = canonical ?? document.createElement('link');
      link.rel = 'canonical';
      link.href = meta.canonical;
      if (!canonical) document.head.append(link);
      setMeta('meta[property="og:url"]', { property: 'og:url' }, meta.canonical);
      robots?.remove();
    } else {
      canonical?.remove();
      ogUrl?.remove();
      setMeta('meta[name="robots"]', { name: 'robots' }, 'noindex');
    }
  }, [pathname]);
}

function useRouteBehavior() {
  const { pathname, state } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const target = pathname === '/' ? (state as RouteState)?.scrollTo : undefined;
    requestAnimationFrame(() => {
      if (target) {
        const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        document.querySelector(target)?.scrollIntoView({ behavior, block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
      document.querySelector<HTMLElement>('#main')?.focus({ preventScroll: true });
    });
  }, [pathname, state]);
}

function setMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => element!.setAttribute(name, value));
    document.head.append(element);
  }
  element.content = content;
}

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <CurrentWork />
      <SupportingWork />
      <About />
      <Contact />
    </>
  );
}
