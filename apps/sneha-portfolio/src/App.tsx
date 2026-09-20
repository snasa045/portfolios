import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import CurrentWork from './sections/CurrentWork';
import SupportingWork from './sections/SupportingWork';
import About from './sections/About';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { profile } from './data/portfolio';
import { metaForPath } from './lib/meta';
import './App.css';

export default function App() {
  useRouteMeta();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="container">
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

/** Prerendered pages ship correct metadata; this keeps it right across client navigation. */
function useRouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const { title, description } = metaForPath(pathname);
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);
}

function Home() {
  const { state } = useLocation();

  // Anchor arriving from a case-study link: scroll once the homepage has mounted.
  useEffect(() => {
    const hash = (state as { scrollTo?: string } | null)?.scrollTo;
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }, [state]);

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
