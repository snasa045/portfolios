import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { profile } from './data/portfolio';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name} — Built with React
        </span>
      </footer>
    </>
  );
}
