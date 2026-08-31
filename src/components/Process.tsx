import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { GitCommit, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <GitCommit className="w-3.5 h-3.5" />
              <span>Workflow & Discipline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              DEVELOPMENT <span className="gradient-text">PROCESS</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              A structured 6-step engineering methodology ensuring predictable, high-quality software delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.number} direction="up" delay={100 + (idx % 3) * 100}>
              <div className="rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-7 relative group hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl overflow-hidden">
                {/* Glow corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/8 rounded-bl-full pointer-events-none" />

                {/* Step Number Banner */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-4xl font-extrabold font-mono gradient-text opacity-90 group-hover:opacity-100 transition">
                    {step.number}
                  </span>
                  <span className="p-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Sub-details */}
                <div className="relative z-10 pt-4 border-t border-white/8 space-y-2.5">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[12px] text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};




