import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { profile } from './data/portfolio';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name} · Toronto / Remote
        </span>
        <span>Research → Strategy → Build · Designed & built end to end</span>
      </footer>
    </>
  );
}
