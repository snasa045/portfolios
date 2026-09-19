import { navLinks, profile } from '../data/portfolio';

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="brand">
        {profile.name}
        <span className="brand-dot">.</span>
      </a>
      <nav>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
