import React from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Clock, ArrowRight } from 'lucide-react';

export default function CareerExplorerPage() {
  const { updateProfile, profile } = useApp();
  const navigate = useNavigate();

  const handleSelectCareer = (careerKey) => {
    updateProfile({ ...profile, goal: careerKey });
    navigate('/roadmap');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2">Career Explorer</h1>
        <p className="text-slate-500">Discover detailed pathways and skill requirements for modern tech roles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(CAREERS_DATA).map(([key, career]) => (
          <div key={key} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500"><Briefcase className="w-6 h-6"/></div>
                <div>
                  <h3 className="text-xl font-bold">{career.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3.5 h-3.5"/> Est. {career.estimatedDuration}</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{career.description}</p>
            </div>
            <button onClick={() => handleSelectCareer(key)} className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
              Select This Career <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}