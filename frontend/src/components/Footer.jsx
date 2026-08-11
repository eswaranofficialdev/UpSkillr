import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
          <Compass className="w-5 h-5 text-indigo-500" />
          SkillFlowPro © 2026
        </div>
        <p>Turn your career goal into a learning roadmap entirely offline.</p>
      </div>
    </footer>
  );
}