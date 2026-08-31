import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeveloperIntro } from './components/DeveloperIntro';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { TechMarquee } from './components/TechMarquee';
import { Process } from './components/Process';
import { GitHubSection } from './components/GitHubSection';
import { LinkedInSection } from './components/LinkedInSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize theme preference from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 relative selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <DeveloperIntro />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Services />
        <TechMarquee />
        <Process />
        <GitHubSection />
        <LinkedInSection />
        <Contact />
      </main>

      {/* Footer & Final CTA */}
      <Footer />
    </div>
  );
}

export default App;


