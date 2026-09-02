import React from 'react';
import { ArrowRight, MessageSquare, Mail, PhoneCall, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-10 md:pt-28 md:pb-14 min-h-[calc(100vh-70px)] flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="bg-glow-orb-1 top-10 left-1/4 -translate-x-1/2" />
      <div className="bg-glow-orb-2 top-20 right-1/4 translate-x-1/2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-400 text-xs font-mono font-black tracking-widest uppercase mb-4 backdrop-blur-md shadow-lg shadow-blue-500/15">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
          <span>Available for New Projects</span>
          <Sparkles className="w-4 h-4 ml-1 text-blue-400" />
        </div>

        {/* Opening Full Single Line Heading: HI, I'M ZOHAIB ZEESHAN */}
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 whitespace-normal sm:whitespace-nowrap max-w-full">
          <span className="text-white drop-shadow-md">HI, I'M </span>
          <span className="gradient-text drop-shadow-lg">{PERSONAL_INFO.name.toUpperCase()}</span>
        </h1>

        {/* Sub-headline Role & Experience */}
        <h2 className="text-base sm:text-xl lg:text-2xl font-extrabold text-blue-400 max-w-4xl mb-4 leading-snug">
          {PERSONAL_INFO.headline}
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6 font-medium">
          {PERSONAL_INFO.supportingText}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-black text-sm shadow-xl shadow-blue-500/35 hover:shadow-blue-500/60 transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/40 hover:border-blue-500/70 hover:-translate-y-0.5 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Let's Work Together</span>
          </a>
        </div>

        {/* Secondary Social Quick Links - Visible Above Fold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/15 w-full max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-extrabold">
            Connect Directly:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl glass-panel text-white hover:text-blue-400 hover:scale-110 transition-all shadow-md border border-blue-500/30"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl glass-panel text-white hover:text-blue-400 hover:scale-110 transition-all shadow-md border border-blue-500/30"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Me in Gmail Web"
              className="p-2.5 rounded-xl glass-panel text-white hover:text-rose-400 hover:scale-110 transition-all shadow-md border border-blue-500/30"
              title="Compose in Gmail Web"
            >
              <Mail className="w-4 h-4 text-rose-400" />
            </a>

            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="p-2.5 rounded-xl glass-panel text-white hover:text-emerald-400 hover:scale-110 transition-all shadow-md border border-blue-500/30"
              title="WhatsApp Chat"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};




