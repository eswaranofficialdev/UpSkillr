import { CAREERS_DATA } from '../data/careersData';

export function generateRoadmap(careerGoal, knownSkills = [], experienceLevel = 'Beginner') {
  const career = CAREERS_DATA[careerGoal] || CAREERS_DATA["Full-Stack Developer"];
  
  const processedPhases = career.phases.map(phase => {
    const evaluatedSkills = phase.skills.map(skillName => {
      const isKnown = knownSkills.includes(skillName);
      const meta = career.skillMetadata[skillName] || {
        desc: "Essential skill for career progression.",
        difficulty: "Intermediate",
        time: "20 hours",
        prerequisites: []
      };

      let status = 'locked';
      if (isKnown) {
        status = 'completed';
      } else {
        // If experience is advanced, auto-unlock all or evaluate prerequisites
        status = experienceLevel === 'Advanced' ? 'current' : 'current';
      }

      return {
        name: skillName,
        ...meta,
        status: isKnown ? 'completed' : 'pending',
        completed: isKnown
      };
    });

    return {
      phaseNumber: phase.phaseNumber,
      title: phase.title,
      skills: evaluatedSkills
    };
  });

  return {
    careerTitle: career.title,
    estimatedDuration: career.estimatedDuration,
    phases: processedPhases
  };
}