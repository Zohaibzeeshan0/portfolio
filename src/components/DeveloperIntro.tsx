import React, { useState, useEffect } from 'react';
import { TYPING_ROLES } from '../data/portfolioData';
import { Terminal, Code, Cpu, Shield, Database } from 'lucide-react';

export const DeveloperIntro: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const targetRole = TYPING_ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(targetRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === targetRole) {
          // Pause at end of sentence before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setCurrentText(targetRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const backgroundCodeBadges = [
    { text: 'React.tsx', icon: Code, top: '15%', left: '10%' },
    { text: 'Node.js', icon: Cpu, top: '75%', left: '15%' },
    { text: 'PostgreSQL', icon: Database, top: '25%', right: '12%' },
    { text: 'JWT Auth', icon: Shield, top: '70%', right: '10%' },
  ];

  return (
    <section className="relative py-12 bg-slate-950/40 border-y border-white/5 overflow-hidden">
      {/* Background Floating Particles & Code Symbols */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        {backgroundCodeBadges.map((badge, idx) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={idx}
              className="absolute inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono text-slate-300 animate-float"
              style={{
                top: badge.top,
                left: badge.left,
                right: badge.right,
                animationDelay: `${idx * 1.5}s`,
              }}
            >
              <IconComponent className="w-3 h-3 text-blue-400" />
              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl glass-panel border border-blue-500/20 shadow-xl shadow-blue-500/5">
          <Terminal className="w-5 h-5 text-blue-400 shrink-0" />
          <span className="text-slate-400 font-mono text-sm sm:text-base">I am a </span>
          <span className="font-mono text-lg sm:text-2xl font-bold gradient-text min-w-[240px] text-left">
            {currentText}
            <span className="inline-block w-2 h-5 ml-1 bg-blue-500 animate-pulse align-middle" />
          </span>
        </div>
      </div>
    </section>
  );
};



