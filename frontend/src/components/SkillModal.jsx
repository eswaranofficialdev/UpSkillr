import React from 'react';
import { X, CheckCircle, Clock, ShieldAlert } from 'lucide-react';

export default function SkillModal({ skill, onClose, onToggle }) {
  if (!skill) return null;

  const handleAction = () => {
    onToggle();
    onClose(); // Automatically close modal after clicking action
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            skill.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-500' :
            skill.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-500' : 'bg-rose-500/10 text-rose-500'
          }`}>
            {skill.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3.5 h-3.5"/> {skill.time}</span>
        </div>
        <h2 className="text-2xl font-black mb-2">{skill.name}</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{skill.desc}</p>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5"/> Prerequisites</h4>
            <div className="flex flex-wrap gap-2">
              {skill.prerequisites?.length > 0 ? skill.prerequisites.map(p => <span key={p} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium">{p}</span>) : <span className="text-xs text-slate-500 italic">None</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button 
            onClick={handleAction}
            className={`w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
              skill.completed 
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/25'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {skill.completed ? 'Mark as In Progress' : 'Mark as Complete & Close'}
          </button>
        </div>
      </div>
    </div>
  );
}