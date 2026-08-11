import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Trophy, CheckCircle, Clock, ArrowRight, RotateCcw } from 'lucide-react';

export default function DashboardPage() {
  const { profile, roadmap, resetProgress } = useApp();

  // Safety check if roadmap or phases are not yet initialized
  if (!roadmap || !roadmap.phases) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-black mb-4">Loading your roadmap...</h2>
        <Link to="/onboarding" className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold">
          Setup Roadmap
        </Link>
      </div>
    );
  }

  const allSkills = roadmap.phases.flatMap(p => p.skills || []);
  const completedCount = allSkills.filter(s => s.completed).length;
  const totalSkills = allSkills.length;
  const progressPercent = totalSkills > 0 ? Math.round((completedCount / totalSkills) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Current Career Goal</span>
          <h1 className="text-3xl font-black mt-1">{profile?.goal || 'Developer'}</h1>
          <p className="text-slate-500 text-sm mt-1">Experience: {profile?.experience || 'Beginner'} • Goal: {profile?.weeklyHours || '10-20 hours'}/week</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/roadmap" className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center gap-2">
            View Roadmap <ArrowRight className="w-4 h-4"/>
          </Link>
          <button onClick={resetProgress} className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800" title="Reset Progress">
            <RotateCcw className="w-5 h-5 text-slate-500"/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4"><span className="text-slate-500 text-xs font-bold uppercase">Overall Progress</span><Trophy className="w-5 h-5 text-amber-500"/></div>
          <div className="text-3xl font-black mb-2">{progressPercent}%</div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4"><span className="text-slate-500 text-xs font-bold uppercase">Skills Mastered</span><CheckCircle className="w-5 h-5 text-emerald-500"/></div>
          <div className="text-3xl font-black mb-1">{completedCount} / {totalSkills}</div>
          <p className="text-xs text-slate-500">Completed milestones</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4"><span className="text-slate-500 text-xs font-bold uppercase">Est. Duration</span><Clock className="w-5 h-5 text-emerald-500"/></div>
          <div className="text-3xl font-black mb-1">{roadmap.estimatedDuration || '3 Months'}</div>
          <p className="text-xs text-slate-500">Based on {profile?.weeklyHours || '10-20 hours'}</p>
        </div>
      </div>
    </div>
  );
}