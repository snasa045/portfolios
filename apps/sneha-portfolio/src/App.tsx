import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import HowIWork from './sections/HowIWork';
import DesignToBuild from './sections/DesignToBuild';
import BuiltEndToEnd from './sections/BuiltEndToEnd';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';
import { profile } from './data/portfolio';
import './App.css';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name} · Toronto / Remote
        </span>
        <span>Research → Strategy → Build · Designed & built end to end</span>
      </footer>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <HowIWork />
      <DesignToBuild />
      <BuiltEndToEnd />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}