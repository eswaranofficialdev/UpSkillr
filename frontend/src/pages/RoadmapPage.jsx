import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import SkillModal from '../components/SkillModal';
import { CheckCircle2, ChevronRight, Sparkles, Clock } from 'lucide-react';

export default function RoadmapPage() {
  const { roadmap, toggleSkillCompletion } = useApp();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState(null);
  const [selectedSkillIdx, setSelectedSkillIdx] = useState(null);

  const handleOpenModal = (skill, pIdx, sIdx) => {
    setSelectedSkill(skill);
    setSelectedPhaseIdx(pIdx);
    setSelectedSkillIdx(sIdx);
  };

  const handleToggleFromModal = () => {
    if (selectedPhaseIdx !== null && selectedSkillIdx !== null) {
      toggleSkillCompletion(selectedPhaseIdx, selectedSkillIdx);
      setSelectedSkill({
        ...selectedSkill,
        completed: !selectedSkill.completed,
        status: !selectedSkill.completed ? 'completed' : 'pending'
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Target Role</span>
          <h1 className="text-2xl sm:text-4xl font-black mt-1">{roadmap.careerTitle} Path</h1>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 self-start sm:self-auto">
          <Clock className="w-4 h-4"/> Est. Duration: {roadmap.estimatedDuration}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-300 dark:before:to-slate-800">
        {roadmap.phases.map((phase, pIdx) => (
          <div key={phase.phaseNumber} className="relative pl-10 sm:pl-16">
            {/* Timeline Dot */}
            <div className="absolute left-3.5 sm:left-6 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-slate-100 dark:ring-slate-950 z-10"></div>
            
            <h3 className="text-base sm:text-lg font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <span>Phase {phase.phaseNumber}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-slate-800 dark:text-slate-200">{phase.title}</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {phase.skills.map((skill, sIdx) => (
                <div 
                  key={skill.name}
                  onClick={() => handleOpenModal(skill, pIdx, sIdx)}
                  className={`node-card p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-0 flex flex-col justify-between ${
                    skill.completed 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100 shadow-sm' 
                      : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md ${
                        skill.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-500' :
                        skill.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-500' : 'bg-rose-500/10 text-rose-500'
                      }`}>
                        {skill.difficulty}
                      </span>
                      {skill.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                    </div>
                    <h4 className="font-bold text-base mb-1">{skill.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{skill.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{skill.time}</span>
                    <span className="font-semibold">{skill.completed ? 'Mastered ✓' : 'Tap to View'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} onToggle={handleToggleFromModal} />
    </div>
  );
}