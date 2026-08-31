import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ExternalLink, Activity, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const GitHubSection: React.FC = () => {
  // Generate 52 weeks x 7 days contribution grid simulation for developer aesthetic
  const weeks = 40;
  const daysPerWeek = 7;
  
  const getContributionColor = (val: number) => {
    if (val === 0) return 'bg-slate-800/60';
    if (val === 1) return 'bg-emerald-900/80';
    if (val === 2) return 'bg-emerald-700';
    if (val === 3) return 'bg-emerald-500';
    return 'bg-emerald-400 shadow-[0_0_8px_#34d399]';
  };

  // Seeded values for consistent realistic contribution heatmap pattern
  const generateContributionMatrix = () => {
    const matrix = [];
    for (let w = 0; w < weeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Generate pseudo activity pattern higher in weekdays
        const val = ((w * 3 + d * 7) % 5);
        weekDays.push(val);
      }
      matrix.push(weekDays);
    }
    return matrix;
  };

  const contributionMatrix = generateContributionMatrix();

  const featuredRepos = [
    {
      name: 'Hospital-Management-System',
      desc: 'Full-stack healthcare administration software with role-based access control and patient EHR tracking.',
      lang: 'TypeScript',
      langColor: 'bg-blue-500',
    },
    {
      name: 'Library-Management-System',
      desc: 'Digital library catalog system with automated book checkout workflows and fine calculations.',
      lang: 'JavaScript',
      langColor: 'bg-yellow-400',
    },
    {
      name: 'E-Commerce-Storefront',
      desc: 'Modern web store built with Next.js, Express REST API backend, and MongoDB integration.',
      lang: 'TypeScript',
      langColor: 'bg-blue-500',
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            CODE & <span className="gradient-text">OPEN SOURCE</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Active GitHub repository contributions, clean code commits, and project repositories.
          </p>
        </div>

        {/* GitHub Activity Heatmap Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 border border-white/10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  GitHub Contribution Activity
                </h3>
                <p className="text-xs text-slate-400">
                  @Zohaibzeeshan0 • Recent contribution activity
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Matrix Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[640px]">
              {contributionMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((val, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm ${getContributionColor(val)} transition-transform hover:scale-125`}
                      title={`Activity level: ${val}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-2">
            <span>Recent Activity Graph</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-3 h-3 rounded-sm bg-slate-800" />
              <span className="w-3 h-3 rounded-sm bg-emerald-900" />
              <span className="w-3 h-3 rounded-sm bg-emerald-700" />
              <span className="w-3 h-3 rounded-sm bg-emerald-500" />
              <span className="w-3 h-3 rounded-sm bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRepos.map((repo, idx) => (
            <a
              key={idx}
              href={`${PERSONAL_INFO.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white text-sm group-hover:text-emerald-400 transition flex items-center gap-2">
                    <Code className="w-4 h-4 text-emerald-400" />
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.lang}</span>
                </div>
                <a
                  href={`${PERSONAL_INFO.github}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] text-emerald-400 hover:underline font-mono"
                >
                  View on GitHub →
                </a>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};




