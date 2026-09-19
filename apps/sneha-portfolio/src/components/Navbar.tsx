import { navLinks } from '../data/portfolio';

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="brand">
        Sneha Jadhav <em>©</em>
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
