import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_STATS } from '../data/portfolioData';
import { Award, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(EXPERIENCE_STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // ms
    const steps = 35;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        EXPERIENCE_STATS.map((stat) => {
          const current = Math.round(stat.value * Math.min(progress, 1));
          return current;
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>3+ Years of Professional Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineering High-Performance <span className="gradient-text">Software Systems</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Focused on building clean, efficient, and maintainable software with a strong track record of successful project execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Counter Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EXPERIENCE_STATS.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={120 + idx * 90}>
              <div className="p-6 rounded-2xl glass-card text-center relative overflow-hidden group hover:border-blue-500/60 shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
                <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight gradient-text mb-2">
                  {counts[idx]}
                  {stat.suffix}
                </div>
                <div className="text-sm font-extrabold text-slate-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Commitment Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal direction="up" delay={150}>
            <div className="p-6 rounded-2xl glass-panel flex items-start gap-4 hover:border-blue-500/50 transition-colors shadow-lg">
              <div className="p-3 rounded-xl bg-blue-500/15 text-blue-400 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-100 text-base mb-1">Optimal Performance</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Optimized frontends and APIs engineered for lightning-fast latency and high reliability.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <div className="p-6 rounded-2xl glass-panel flex items-start gap-4 hover:border-violet-500/50 transition-colors shadow-lg">
              <div className="p-3 rounded-xl bg-violet-500/15 text-violet-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-100 text-base mb-1">Secure Architecture</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Industry standard authentication workflows, data encryption, and role-based permissions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350}>
            <div className="p-6 rounded-2xl glass-panel flex items-start gap-4 hover:border-emerald-500/50 transition-colors shadow-lg">
              <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-100 text-base mb-1">Production Delivery</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Disciplined engineering practices ensuring on-time deployment and clean maintainability.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};



