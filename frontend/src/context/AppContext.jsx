import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateRoadmap } from '../utils/recommendationEngine';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Default to light theme (false) instead of dark
  const [darkMode, setDarkMode] = useLocalStorage('upskillr_dark', false);
  const [profile, setProfile] = useLocalStorage('upskillr_profile', {
    name: 'Developer',
    goal: 'Full-Stack Developer',
    experience: 'Beginner',
    weeklyHours: '10-20 hours',
    knownSkills: ['HTML', 'CSS']
  });

  const [roadmap, setRoadmap] = useLocalStorage('upskillr_roadmap', () => 
    generateRoadmap(profile.goal, profile.knownSkills, profile.experience)
  );

  const [completedProjects, setCompletedProjects] = useLocalStorage('upskillr_projects', []);
  const [toast, setToast] = useLocalStorage('upskillr_toast', null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    const newRoadmap = generateRoadmap(newProfile.goal, newProfile.knownSkills, newProfile.experience);
    setRoadmap(newRoadmap);
    showToast('Roadmap regenerated successfully!');
  };

  const toggleSkillCompletion = (phaseIndex, skillIndex) => {
    const updated = { ...roadmap };
    const skill = updated.phases[phaseIndex].skills[skillIndex];
    skill.completed = !skill.completed;
    skill.status = skill.completed ? 'completed' : 'pending';
    setRoadmap(updated);
    showToast(`Marked ${skill.name} as ${skill.completed ? 'Completed' : 'Pending'}`);
  };

  const resetProgress = () => {
    setRoadmap(generateRoadmap(profile.goal, [], profile.experience));
    setCompletedProjects([]);
    showToast('Progress reset successfully.', 'info');
  };

  return (
    <AppContext.Provider value={{
      darkMode, setDarkMode,
      profile, updateProfile,
      roadmap, toggleSkillCompletion,
      completedProjects, setCompletedProjects,
      resetProgress,
      toast, showToast
    }}>
      <div className={darkMode ? 'dark min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900'}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}