import React from 'react';
import { TECH_MARQUEE_ITEMS } from '../data/portfolioData';
import { Code2 } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TECH_MARQUEE_ITEMS, ...TECH_MARQUEE_ITEMS];

  return (
    <section className="py-12 bg-slate-950/80 border-y border-white/10 overflow-hidden relative">
      {/* Gradient Fades on Left & Right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 mx-4 px-6 py-3 rounded-2xl glass-panel border border-white/10 text-slate-300 font-mono text-sm font-semibold hover:border-blue-500/40 hover:text-white transition"
          >
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>{item.name}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-sans uppercase">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};



