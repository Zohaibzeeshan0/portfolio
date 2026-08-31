import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal, Code2 } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      setIsScrolled(window.scrollY > 20);

      // Scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Section highlighting
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-slate-950/95 py-4 backdrop-blur-md border-b border-blue-500/30'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Pure White: Code with Zohaib Zeeshan (Dot removed) */}
        <a
          href="#home"
          className="flex items-center gap-3 group tracking-tight text-white"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-wider text-white leading-none text-xl sm:text-2xl drop-shadow">
              Code with Zohaib Zeeshan
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/95 p-1.5 rounded-full border border-blue-500/40 shadow-xl backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-black tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'text-white hover:text-blue-400 hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Theme Switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl glass-panel text-white hover:text-blue-400 transition-colors duration-200 shadow-md border border-blue-500/30"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black tracking-wide shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl glass-panel text-white hover:text-blue-400 border border-blue-500/30"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-blue-500/40 mt-2 px-4 py-6 mx-4 rounded-2xl animate-in slide-in-from-top duration-300 shadow-2xl bg-slate-950">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-black transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-white hover:bg-blue-500/20 hover:text-blue-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-500/30"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};



