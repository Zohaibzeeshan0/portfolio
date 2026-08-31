import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export const LinkedInSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/20 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>Professional Network</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              LET'S <span className="gradient-text">CONNECT</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Interested in technology, collaboration, or building something meaningful? Let's connect on LinkedIn.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-3 shrink-0 group hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-5 h-5 fill-current" />
            <span>Connect on LinkedIn</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

      </div>
    </section>
  );
};




