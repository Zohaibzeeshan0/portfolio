import React, { useEffect, useState } from 'react';
import type { Project } from '../types';
import {
  X,
  CheckCircle,
  Code,
  Layers,
  AlertCircle,
  Lightbulb,
  Workflow,
  ArrowLeft,
  Play,
  Search,
  ShoppingCart,
  Activity,
  Smartphone,
  Server,
  Database,
  Lock,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo'>('demo');

  // Interactive state hooks for live project preview widgets
  const [hospitalPatient, setHospitalPatient] = useState('John Doe - Room 302 (Checked In)');
  const [librarySearch, setLibrarySearch] = useState('');
  const [cartCount, setCartCount] = useState(2);
  const [serverCpu, setServerCpu] = useState(38);
  const [mobileScreen, setMobileScreen] = useState<'wallet' | 'trans' | 'settings'>('wallet');
  const [kanbanTasks, setKanbanTasks] = useState([
    { id: 1, text: 'Optimize REST endpoints', status: 'In Progress' },
    { id: 2, text: 'Design JWT auth guard', status: 'Done' },
    { id: 3, text: 'Setup PostgreSQL schema', status: 'To Do' }
  ]);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [dbBenchmark, setDbBenchmark] = useState<{ sql: number; nosql: number } | null>(null);
  const [aiInput, setAiInput] = useState('function calculateMetrics(data) { return data.reduce((a,b) => a+b, 0); }');
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [authLogged, setAuthLogged] = useState(false);

  // Close modal on ESC key & prevent body scrolling
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const moveKanban = (id: number) => {
    setKanbanTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'To Do' ? 'In Progress' : t.status === 'In Progress' ? 'Done' : 'To Do';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const runApiTest = () => {
    setApiResponse('Testing endpoint GET /api/v1/health...');
    setTimeout(() => {
      setApiResponse(JSON.stringify({
        status: 200,
        message: "API Gateway Operational",
        latency: "14ms",
        rateLimitRemaining: 98,
        jwtVerified: true,
        timestamp: new Date().toISOString()
      }, null, 2));
    }, 400);
  };

  const runDbBenchmark = () => {
    setDbBenchmark({ sql: 12, nosql: 8 });
  };

  const runAiSummarize = () => {
    setAiSummary(`Complexity Score: O(N) | Quality: Excellent\nSummary: Reduces numerical array elements to a single total sum using array reduction.`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-white/20 shadow-2xl bg-slate-900/95 p-5 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Close & Back Buttons */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">Press ESC to exit</span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white transition-all shadow-md"
              aria-label="Close modal"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Header Visual Banner */}
        <div className={`w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-r ${project.imagePlaceholderGradient} flex flex-col justify-end p-6 border border-white/10 relative overflow-hidden mb-6`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 text-blue-300 text-xs font-mono font-semibold backdrop-blur-md border border-white/10">
              {project.category}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Preview Ready
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight relative z-10">
            {project.title}
          </h3>
        </div>

        {/* Tab Toggle: Interactive Live Preview vs Full Architecture Specs */}
        <div className="flex items-center gap-3 mb-6 bg-slate-950/60 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === 'demo'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Play className="w-4 h-4 text-emerald-400 fill-current" />
            <span>Interactive Live Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Architecture & Problem Specs</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE LIVE DEMO PREVIEW */}
        {activeTab === 'demo' && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/30 mb-8 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Live Interactive Simulation ({project.title})</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">Status: ACTIVE</span>
            </div>

            {/* DEMO 1: HOSPITAL */}
            {project.demoType === 'hospital' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300">Hospital Patient Management Portal:</div>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-300 font-mono">Active Patient: {hospitalPatient}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setHospitalPatient('Sarah Khan - Room 104 (In Surgery)')}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition"
                    >
                      Update Patient
                    </button>
                    <button
                      onClick={() => setHospitalPatient('John Doe - Room 302 (Checked In)')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 2: LIBRARY */}
            {project.demoType === 'library' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300">Digital Catalog Search & Book Issuance:</div>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={librarySearch}
                    onChange={(e) => setLibrarySearch(e.target.value)}
                    placeholder="Search catalog (e.g. Data Structures, React, Node)..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300">
                  {librarySearch ? `Found 3 book catalog matches for "${librarySearch}" [Status: Available for issue]` : 'Type to search digital catalog'}
                </div>
              </div>
            )}

            {/* DEMO 3: E-COMMERCE */}
            {project.demoType === 'ecommerce' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Store Product Cart Workflow:</span>
                  <span className="flex items-center gap-1 text-blue-400 font-mono">
                    <ShoppingCart className="w-4 h-4" /> Cart Items: {cartCount}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-300">Developer Mechanical Keyboard ($120.00)</span>
                  <button
                    onClick={() => setCartCount(c => c + 1)}
                    className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )}

            {/* DEMO 4: CLOUD TELEMETRY */}
            {project.demoType === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" /> Server Health Metrics Telemetry
                  </span>
                  <button
                    onClick={() => setServerCpu(Math.floor(Math.random() * 40) + 20)}
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Refresh Gauge
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10">
                    <span className="text-slate-500 block">CPU Usage</span>
                    <span className="text-emerald-400 font-bold text-sm">{serverCpu}%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10">
                    <span className="text-slate-500 block">RAM Alloc</span>
                    <span className="text-blue-400 font-bold text-sm">4.2 GB / 8 GB</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-slate-500 block">Latency</span>
                    <span className="text-purple-400 font-bold text-sm">12ms</span>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 5: MOBILE FINTECH */}
            {project.demoType === 'mobile' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-rose-400" /> Mobile Screen Interactive Mockup:
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-center font-mono text-xs">
                  <div className="flex justify-center gap-2 mb-3">
                    <button
                      onClick={() => setMobileScreen('wallet')}
                      className={`px-3 py-1 rounded-lg ${mobileScreen === 'wallet' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                    >
                      Wallet
                    </button>
                    <button
                      onClick={() => setMobileScreen('trans')}
                      className={`px-3 py-1 rounded-lg ${mobileScreen === 'trans' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                    >
                      Transactions
                    </button>
                  </div>
                  <div className="text-slate-300 py-2 border-t border-white/5">
                    {mobileScreen === 'wallet' ? '💳 Balance: $14,250.00 USD (JWT Secured)' : '🔄 Recent: +$450.00 (Salary Direct Deposit)'}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 6: KANBAN */}
            {project.demoType === 'kanban' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300">Interactive Kanban Task State:</div>
                <div className="space-y-2">
                  {kanbanTasks.map(t => (
                    <div key={t.id} className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-200">{t.text}</span>
                      <button
                        onClick={() => moveKanban(t.id)}
                        className="px-3 py-1 rounded-lg bg-blue-600 text-white text-[11px] font-semibold hover:bg-blue-500 transition"
                      >
                        State: {t.status}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEMO 7: API GATEWAY */}
            {project.demoType === 'api' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-sky-400" /> REST API Gateway Endpoint Tester
                  </span>
                  <button
                    onClick={runApiTest}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition flex items-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Send API Request
                  </button>
                </div>
                {apiResponse && (
                  <pre className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] overflow-x-auto border border-white/10">
                    {apiResponse}
                  </pre>
                )}
              </div>
            )}

            {/* DEMO 8: DATABASE BENCHMARK */}
            {project.demoType === 'db' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-purple-400" /> SQL vs NoSQL Latency Runner
                  </span>
                  <button
                    onClick={runDbBenchmark}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition"
                  >
                    Run Benchmark
                  </button>
                </div>
                {dbBenchmark && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-blue-400">
                      PostgreSQL Latency: <span className="font-bold text-white">{dbBenchmark.sql} ms</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-emerald-400">
                      MongoDB Latency: <span className="font-bold text-white">{dbBenchmark.nosql} ms</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* DEMO 9: AI SUMMARIZER */}
            {project.demoType === 'ai' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300">Code Syntax Complexity & Docstrings:</div>
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={runAiSummarize}
                  className="px-4 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold hover:bg-teal-500 transition"
                >
                  Analyze Code Snippet
                </button>
                {aiSummary && (
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-teal-300 font-mono whitespace-pre-line">
                    {aiSummary}
                  </div>
                )}
              </div>
            )}

            {/* DEMO 10: SSO AUTH */}
            {project.demoType === 'auth' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-400" /> Identity SSO Token Guard
                  </span>
                  <button
                    onClick={() => setAuthLogged(!authLogged)}
                    className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition"
                  >
                    {authLogged ? 'Logout' : 'Authenticate Token'}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                  {authLogged ? '✅ Session Verified: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6... [Role: Full Stack JavaScript Developer]' : '🔒 Auth Status: Unauthenticated Session'}
                </div>
              </div>
            )}

          </div>
        )}

        {/* Action Buttons Header */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code on GitHub</span>
          </a>
        </div>

        {/* Modal Content Sections */}
        <div className="space-y-8 text-slate-300">
          
          {/* Overview */}
          <div>
            <h4 className="text-sm uppercase font-mono tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
              <h5 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Problem Statement
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <h5 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Engineering Solution
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm uppercase font-mono tracking-wider text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Key Architectural Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Approach & Architecture */}
          <div>
            <h4 className="text-sm uppercase font-mono tracking-wider text-violet-400 font-semibold mb-2 flex items-center gap-2">
              <Workflow className="w-4 h-4" /> Technical Architecture
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed">
              {project.architecture}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm uppercase font-mono tracking-wider text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};



