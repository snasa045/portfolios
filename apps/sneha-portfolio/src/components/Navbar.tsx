import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assetUrl, navLinks, profile } from '../data/portfolio';
import useActiveSection from '../lib/useActiveSection';

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds, pathname === '/');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Anchors must resolve against the homepage, not whichever case-study route we're on.
  const goToSection = (hash: string) => {
    setOpen(false);
    if (pathname === '/') {
      requestAnimationFrame(() => {
        const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        document.querySelector(hash)?.scrollIntoView({ behavior, block: 'start' });
      });
    } else {
      navigate('/', { state: { scrollTo: hash } });
    }
  };

  return (
    <header className="nav">
      <a
        className="brand"
        href="#top"
        aria-label={`${profile.name} — home`}
        onClick={(e) => {
          e.preventDefault();
          goToSection('#top');
        }}
      >
        <img src={assetUrl('logo.svg')} className="brand-mark" width="36" height="36" alt="" />
        <span>{profile.name}</span>
      </a>

      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true" className={`nav-icon${open ? ' is-open' : ''}`} />
      </button>

      <nav id="primary-nav" className={`nav-links${open ? ' is-open' : ''}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={active === l.href.slice(1) ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault();
              goToSection(l.href);
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          className="nav-resume"
          href={assetUrl(profile.resume)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
