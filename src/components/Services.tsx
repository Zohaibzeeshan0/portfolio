import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Layout, Layers, Server, ShieldCheck, Briefcase, Smartphone, Check, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const SERVICE_THEMES: Record<string, { icon: string; border: string; iconBg: string; glow: string; check: string }> = {
  'web-applications':           { icon: 'text-blue-400',   border: 'hover:border-blue-500/60',   iconBg: 'bg-blue-500/15 border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white',   glow: 'bg-blue-500/8',   check: 'text-blue-400' },
  'full-stack-solutions':       { icon: 'text-violet-400', border: 'hover:border-violet-500/60', iconBg: 'bg-violet-500/15 border-violet-500/30 group-hover:bg-violet-600 group-hover:text-white', glow: 'bg-violet-500/8', check: 'text-violet-400' },
  'api-development':            { icon: 'text-cyan-400',   border: 'hover:border-cyan-500/60',   iconBg: 'bg-cyan-500/15 border-cyan-500/30 group-hover:bg-cyan-600 group-hover:text-white',   glow: 'bg-cyan-500/8',   check: 'text-cyan-400' },
  'authentication-systems':     { icon: 'text-emerald-400',border: 'hover:border-emerald-500/60',iconBg: 'bg-emerald-500/15 border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white',glow: 'bg-emerald-500/8',check: 'text-emerald-400' },
  'business-management-systems':{ icon: 'text-amber-400',  border: 'hover:border-amber-500/60',  iconBg: 'bg-amber-500/15 border-amber-500/30 group-hover:bg-amber-600 group-hover:text-white',  glow: 'bg-amber-500/8',  check: 'text-amber-400' },
  'mobile-applications':        { icon: 'text-pink-400',   border: 'hover:border-pink-500/60',   iconBg: 'bg-pink-500/15 border-pink-500/30 group-hover:bg-pink-600 group-hover:text-white',   glow: 'bg-pink-500/8',   check: 'text-pink-400' },
};

const DEFAULT_THEME = { icon: 'text-slate-400', border: 'hover:border-slate-500/60', iconBg: 'bg-slate-500/15 border-slate-500/30', glow: 'bg-slate-500/8', check: 'text-slate-400' };

const iconMap: Record<string, React.ElementType> = {
  'web-applications': Layout,
  'full-stack-solutions': Layers,
  'api-development': Server,
  'authentication-systems': ShieldCheck,
  'business-management-systems': Briefcase,
  'mobile-applications': Smartphone,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              What <span className="gradient-text">I Build</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Tailored software solutions engineered to elevate digital products and business operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const theme = SERVICE_THEMES[service.id] ?? DEFAULT_THEME;
            const IconComponent = iconMap[service.id] || Layout;

            return (
              <ScrollReveal key={service.id} direction="up" delay={100 + (idx % 3) * 90}>
                <div
                  className={`group relative flex flex-col rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden ${theme.border}`}
                >
                  {/* Corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none opacity-60 ${theme.glow}`} />

                  {/* Icon */}
                  <div className={`relative z-10 p-3.5 rounded-xl border w-fit mb-5 transition-all duration-300 ${theme.iconBg} ${theme.icon}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-extrabold text-white mb-3 leading-tight group-hover:text-slate-100 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description — FIXED: always white-ish on dark */}
                  <p className="relative z-10 text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="relative z-10 pt-5 border-t border-white/8 space-y-2.5 mt-auto">
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-[12px] text-slate-300 font-medium">
                        <Check className={`w-3.5 h-3.5 shrink-0 ${theme.check}`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};


