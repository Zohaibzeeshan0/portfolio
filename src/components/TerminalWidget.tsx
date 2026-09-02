import React, { useState } from 'react';
import { Terminal, FileCode, Cpu, Check, Copy, Sparkles, Circle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const TerminalWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'skills' | 'terminal'>('developer');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    developer: `// Zohaib Zeeshan - Full Stack JavaScript Developer
export class EngineerProfile implements ISoftwareEngineer {
  readonly name: string = "${PERSONAL_INFO.name}";
  readonly role: string = "${PERSONAL_INFO.role}";
  readonly experience: string = "${PERSONAL_INFO.experience}";
  readonly location: string = "${PERSONAL_INFO.location}";
  
  public coreStack: string[] = [
    "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL"
  ];
  
  public buildScalableSolution(requirements: ProjectSpec): SystemArchitecture {
    const cleanCode = this.refactorAndOptimize(requirements);
    const secureAuth = this.implementJWTAuth({ rbac: true });
    const databaseSchema = this.designACIDCompliantSchema();

    return {
      status: "PRODUCTION_READY",
      performance: "100%",
      scalability: "HIGH",
      deployedAt: new Date().getFullYear()
    };
  }
}`,
    skills: `{
  "developer": "${PERSONAL_INFO.name}",
  "title": "Full Stack JavaScript Developer",
  "experienceYears": 3,
  "specializations": [
    "Full-Stack Web Applications",
    "RESTful API Development",
    "Database Architecture",
    "Authentication & Security",
    "Responsive Frontend Systems"
  ],
  "contact": {
    "email": "${PERSONAL_INFO.email}",
    "whatsapp": "${PERSONAL_INFO.phone}",
    "github": "${PERSONAL_INFO.github}"
  }
}`,
    terminal: `zohaib@dev-workstation:~$ zohaib-cli info --detailed
[INFO] Initializing Zohaib Zeeshan Environment...
[SUCCESS] Full-Stack Stack Loaded (Node.js, React, Next.js, Express, SQL/NoSQL)
[STATUS] 3+ Years Experience • 20+ Projects Delivered
[LOG] Commitment: 100% Quality & Clean Architecture
zohaib@dev-workstation:~$ zohaib-cli deploy --target production
🚀 Deploying scalable digital product... DONE in 1.2s!
zohaib@dev-workstation:~$ _`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-blue-900/20 group">
      {/* Glow Effect Backdrop */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-lg" />

      <div className="relative bg-slate-950/90 rounded-2xl overflow-hidden">
        {/* Window Top Header Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle className="w-3 h-3 fill-rose-500 text-rose-500" />
            <Circle className="w-3 h-3 fill-amber-500 text-amber-500" />
            <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
            <span className="ml-2 text-xs font-mono text-slate-400">zohaib-workspace ~ ide</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              title="Copy code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* IDE Tabs */}
        <div className="flex border-b border-white/10 bg-slate-900/50 text-xs font-mono overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveTab('developer')}
            className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/10 transition-colors ${
              activeTab === 'developer'
                ? 'bg-slate-950 text-blue-400 border-t-2 border-t-blue-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span>developer.ts</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/10 transition-colors ${
              activeTab === 'skills'
                ? 'bg-slate-950 text-violet-400 border-t-2 border-t-violet-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>skills.json</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-4 py-2.5 flex items-center gap-2 transition-colors ${
              activeTab === 'terminal'
                ? 'bg-slate-950 text-emerald-400 border-t-2 border-t-emerald-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>terminal.sh</span>
          </button>
        </div>

        {/* Editor Code Viewer */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[320px] max-h-[360px] text-slate-300">
          <pre className="whitespace-pre">
            {codeSnippets[activeTab].split('\n').map((line, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="select-none text-slate-600 w-5 text-right font-mono text-xs">{idx + 1}</span>
                <span className="flex-1">
                  {line.includes('export') || line.includes('class') || line.includes('readonly') || line.includes('public') ? (
                    <span className="text-purple-400">{line}</span>
                  ) : line.includes('//') ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : line.includes('PRODUCTION_READY') || line.includes('SUCCESS') ? (
                    <span className="text-emerald-400 font-bold">{line}</span>
                  ) : line.includes('🚀') || line.includes('INFO') ? (
                    <span className="text-cyan-400">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </pre>
        </div>

        {/* Editor Footer Status Bar */}
        <div className="px-4 py-2 bg-slate-900/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              TypeScript 5.0 Active
            </span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>Zohaib Zeeshan Dev Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
};



