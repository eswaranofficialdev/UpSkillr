import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold text-sm mb-6 border border-indigo-500/20">
          <Zap className="w-4 h-4" /> 100% Offline & Client-Side Powered
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-4xl mb-6">
          Turn your career goal into a <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">learning roadmap.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
          Upskillr analyzes your existing skills, experience level, and available time to generate a bespoke, step-by-step career roadmap instantly.
        </p>
        <Link to="/onboarding" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-xl shadow-indigo-500/25 transition-all hover:scale-105">
          Create My Roadmap <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6"><CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-3"/><h3 className="font-bold text-lg mb-1">Smart Skill Detection</h3><p className="text-sm text-slate-500">Skips what you already know and builds custom milestones.</p></div>
          <div className="p-6"><Compass className="w-8 h-8 text-indigo-500 mx-auto mb-3"/><h3 className="font-bold text-lg mb-1">Top Career Tracks</h3><p className="text-sm text-slate-500">Full-Stack, Data Science, AI/ML, Cloud, Cybersecurity & more.</p></div>
          <div className="p-6"><ShieldCheck className="w-8 h-8 text-purple-500 mx-auto mb-3"/><h3 className="font-bold text-lg mb-1">Complete Privacy</h3><p className="text-sm text-slate-500">All data stored locally in your browser via localStorage.</p></div>
        </div>
      </div>
    </div>
  );
}