import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Briefcase, Clock, Award, Save } from 'lucide-react';

export default function ProfilePage() {
  const { profile, updateProfile, resetProgress } = useApp();
  const [name, setName] = useState(profile.name);
  const [goal, setGoal] = useState(profile.goal);
  const [experience, setExperience] = useState(profile.experience);
  const [weeklyHours, setWeeklyHours] = useState(profile.weeklyHours);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ ...profile, name, goal, experience, weeklyHours });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2">Profile & Settings</h1>
        <p className="text-slate-500">Manage your learning preferences and profile configuration.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <label className="block font-bold text-sm mb-2">Your Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500"/>
        </div>
        <div>
          <label className="block font-bold text-sm mb-2">Career Goal</label>
          <input type="text" value={goal} onChange={e => setGoal(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500"/>
        </div>
        <div>
          <label className="block font-bold text-sm mb-2">Experience Level</label>
          <select value={experience} onChange={e => setExperience(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
          <button type="button" onClick={resetProgress} className="px-4 py-2 rounded-xl text-rose-500 hover:bg-rose-500/10 font-bold text-sm">
            Reset Progress
          </button>
          <button type="submit" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2">
            <Save className="w-4 h-4"/> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}