import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, Play, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

const CATEGORY_COLORS: Record<string, { badge: string; dot: string; hover: string }> = {
  'Full Stack': { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30',   dot: 'bg-blue-400',   hover: 'hover:border-blue-500/60' },
  'Web Apps':   { badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30', dot: 'bg-violet-400', hover: 'hover:border-violet-500/60' },
  'Mobile':     { badge: 'bg-pink-500/15 text-pink-400 border-pink-500/30',    dot: 'bg-pink-400',   hover: 'hover:border-pink-500/60' },
  'Systems':    { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', dot: 'bg-emerald-400', hover: 'hover:border-emerald-500/60' },
};

const DEFAULT_COLOR = { badge: 'bg-slate-500/15 text-slate-400 border-slate-500/30', dot: 'bg-slate-400', hover: 'hover:border-slate-500/60' };

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Web Apps', 'Full Stack', 'Mobile', 'Systems'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Full-stack web applications, backend systems, and mobile platforms — each with live interactive demos.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-blue-500/40 hover:text-blue-400 hover:bg-white/8'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const colors = CATEGORY_COLORS[project.category] ?? DEFAULT_COLOR;
            return (
              <ScrollReveal key={project.id} direction="up" delay={100 + (idx % 3) * 80}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer flex flex-col rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${colors.hover} overflow-hidden`}
                >
                  {/* Card Top Banner */}
                  <div className="relative h-44 bg-slate-800/60 border-b border-white/8 p-5 flex flex-col justify-between overflow-hidden">
                    {/* subtle grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                    {/* Glow accent */}
                    <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 ${colors.dot.replace('bg-', 'bg-')}`} />

                    {/* Top row badges */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold ${colors.badge}`}>
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                        <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`} />
                        Live Demo
                      </span>
                    </div>

                    {/* Project title */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-extrabold text-white leading-tight group-hover:text-blue-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Description */}
                      <p className="text-[13px] text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Feature bullets */}
                      <div className="space-y-2 mb-5">
                        {project.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[12px] text-slate-300">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                            <span className="leading-relaxed line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack pills */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-4 flex-wrap">
                        <Cpu className="w-3 h-3 text-slate-500 shrink-0" />
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-slate-800 border border-white/10 text-[10px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-white/10 text-[10px] font-mono text-slate-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div
                        className="flex items-center gap-2 pt-4 border-t border-white/8"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Live Demo & Specs</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all duration-200 border border-white/10 hover:border-white/20"
                          title="View on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};


