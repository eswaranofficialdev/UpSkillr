import React from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { useApp } from '../context/AppContext';
import { Code, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const { profile } = useApp();
  const projects = PROJECTS_DATA[profile.goal] || PROJECTS_DATA["Full-Stack Developer"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2">Recommended Projects</h1>
        <p className="text-slate-500">Hands-on practical projects tailored for your goal: {profile.goal}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 mb-4 inline-block">{proj.level}</span>
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{proj.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map(t => <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium">{t}</span>)}
              </div>
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2">
                <Code className="w-4 h-4"/> Start Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}