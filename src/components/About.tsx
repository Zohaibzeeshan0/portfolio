import React from 'react';
import { PERSONAL_INFO, PROFESSIONAL_STRENGTHS } from '../data/portfolioData';
import { UserCheck, Code, Cpu, Database, Lock, Layout, Server, Sparkles, Terminal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const iconsMap: Record<string, React.ElementType> = {
    'Software Architecture': Cpu,
    'Problem Solving': Terminal,
    'Clean Code': Code,
    'Scalable Applications': Sparkles,
    'API Development': Server,
    'Database Integration': Database,
    'Authentication & Security': Lock,
    'Responsive UI Development': Layout,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Developer Bio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>
        </ScrollReveal>

        {/* Quick Stats Row */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { label: 'Years Experience', value: '3+', color: 'text-blue-400' },
              { label: 'Projects Built', value: '20+', color: 'text-violet-400' },
              { label: 'Technologies', value: '15+', color: 'text-cyan-400' },
              { label: 'Quality Commitment', value: '100%', color: 'text-emerald-400' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/8 bg-slate-900/60 p-5 text-center">
                <div className={`text-3xl font-extrabold font-mono ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Strengths Grid */}
        <ScrollReveal direction="up" delay={180}>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1 h-6 rounded-full bg-blue-500" />
            <h3 className="text-xl font-extrabold text-white">Core Engineering Strengths</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROFESSIONAL_STRENGTHS.map((strength, idx) => {
            const IconComp = iconsMap[strength.title] || Code;
            return (
              <ScrollReveal key={idx} direction="up" delay={100 + idx * 60}>
                <div className="group p-6 rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-white text-sm mb-2 leading-tight">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

