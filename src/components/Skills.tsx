import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Cpu, Database, Terminal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesList = ['All', ...SKILL_CATEGORIES.map(cat => cat.title)];

  const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Development': Code2,
    'Backend Development': Cpu,
    'Databases & Storage': Database,
    'Developer Tools & Workflow': Terminal,
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title === selectedCategory);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-blue-500 to-cyan-400';
    if (level >= 80) return 'from-violet-500 to-blue-400';
    return 'from-slate-500 to-slate-400';
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return { label: 'Expert', color: 'text-blue-400' };
    if (level >= 80) return { label: 'Advanced', color: 'text-violet-400' };
    return { label: 'Proficient', color: 'text-slate-400' };
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech Stack & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Technical <span className="gradient-text-cyan">Skills & Stack</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Technologies, frameworks, and engineering tools I use in my daily development workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoriesList.map((catName) => (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
                  selectedCategory === catName
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-blue-500/40 hover:text-blue-400'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Groups */}
        <div className="space-y-10">
          {filteredCategories.map((category, catIdx) => {
            const CategoryIcon = categoryIcons[category.title] || Code2;
            return (
              <ScrollReveal key={catIdx} direction="up" delay={120 + catIdx * 80}>
                <div className="rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/8">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-white">{category.title}</h3>
                    <span className="ml-auto text-xs text-slate-500 font-mono">{category.skills.length} skills</span>
                  </div>

                  {/* Skills Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIdx) => {
                      const lvl = getLevelLabel(skill.level);
                      return (
                        <div
                          key={skillIdx}
                          className="p-4 rounded-xl bg-slate-800/60 border border-white/8 hover:border-blue-500/40 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="font-bold text-white text-sm">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-mono font-bold ${lvl.color}`}>{lvl.label}</span>
                              <span className="text-xs font-mono font-bold text-slate-400">{skill.level}%</span>
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-400 mb-3 leading-relaxed line-clamp-1">
                            {skill.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="w-full h-1.5 rounded-full bg-slate-700 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
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

