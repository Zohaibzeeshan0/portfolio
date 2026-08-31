import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, MessageSquare, Code2, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/8 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/8 blur-3xl rounded-full" />
      </div>

      {/* Final CTA Banner */}
      <div className="py-20 border-b border-white/8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Available for New Projects
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let's turn your idea into a powerful, scalable digital solution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Start a Project
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              View My Work
              <ExternalLink className="w-4 h-4 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-white tracking-wide text-sm">{PERSONAL_INFO.name}</div>
              <div className="text-slate-500 font-mono text-[10px] mt-0.5">Full Stack JavaScript Developer</div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/40 transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/40 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 border border-white/8 text-slate-400 hover:text-white hover:border-blue-500/40 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/8 text-center text-[11px] text-slate-600 font-mono">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved. Built with React, Vite & TypeScript.
        </div>
      </div>

    </footer>
  );
};

