import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Briefcase, Clock, Award, Check } from 'lucide-react';

const COMMON_SKILLS = ["HTML", "CSS", "JavaScript", "React", "Python", "Java", "SQL", "Git", "Linux", "Docker", "Node.js", "MongoDB", "Statistics"];

export default function OnboardingPage() {
  const { profile, updateProfile } = useApp();
  const navigate = useNavigate();

  const [goal, setGoal] = useState(profile.goal);
  const [customGoal, setCustomGoal] = useState('');
  const [experience, setExperience] = useState(profile.experience);
  const [weeklyHours, setWeeklyHours] = useState(profile.weeklyHours);
  const [knownSkills, setKnownSkills] = useState(profile.knownSkills);

  const toggleSkill = (skill) => {
    setKnownSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalGoal = goal === 'Custom' ? customGoal : goal;
    if (!finalGoal) return;
    updateProfile({
      ...profile,
      goal: finalGoal,
      experience,
      weeklyHours,
      knownSkills
    });
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-2">Build Your Custom Roadmap</h1>
      <p className="text-slate-500 mb-8">Tell us about your background and targets to generate your personalized learning path.</p>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl">
        <div>
          <label className="block font-bold text-sm mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4 text-indigo-500"/> What do you want to become?</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Full-Stack Developer', 'Data Scientist', 'Cloud Engineer'].map(g => (
              <button type="button" key={g} onClick={() => setGoal(g)} className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all ${goal === g ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500' : 'border-slate-200 dark:border-slate-800'}`}>
                {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-bold text-sm mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-indigo-500"/> Experience Level</label>
          <div className="grid grid-cols-3 gap-3">
            {['Beginner', 'Intermediate', 'Advanced'].map(exp => (
              <button type="button" key={exp} onClick={() => setExperience(exp)} className={`p-3 rounded-xl border text-center font-semibold text-sm ${experience === exp ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500' : 'border-slate-200 dark:border-slate-800'}`}>
                {exp}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-bold text-sm mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-500"/> Weekly Learning Time</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['2–5 hours', '5–10 hours', '10–20 hours', '20+ hours'].map(time => (
              <button type="button" key={time} onClick={() => setWeeklyHours(time)} className={`p-3 rounded-xl border text-center font-semibold text-xs ${weeklyHours === time ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500' : 'border-slate-200 dark:border-slate-800'}`}>
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-bold text-sm mb-3">Skills You Already Know (Select to skip)</label>
          <div className="flex flex-wrap gap-2">
            {COMMON_SKILLS.map(skill => {
              const active = knownSkills.includes(skill);
              return (
                <button type="button" key={skill} onClick={() => toggleSkill(skill)} className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${active ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-700 dark:text-slate-300'}`}>
                  {active && <Check className="w-3.5 h-3.5"/>} {skill}
                </button>
              );
            })}
          </div>
        </div>

        <button type="submit" className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.01]">
          Generate My Roadmap 🚀
        </button>
      </form>
    </div>
  );
}