export const CAREERS_DATA = {
  "Full-Stack Developer": {
    title: "Full-Stack Developer",
    description: "Build both client-side and server-side software systems, APIs, and modern database-backed architectures.",
    estimatedDuration: "6 Months",
    phases: [
      {
        phaseNumber: 1,
        title: "Web Fundamentals",
        skills: ["HTML", "CSS", "JavaScript"]
      },
      {
        phaseNumber: 2,
        title: "Frontend Development",
        skills: ["React", "Git", "Linux"]
      },
      {
        phaseNumber: 3,
        title: "Backend Engineering",
        skills: ["Node.js", "Express", "REST APIs"]
      },
      {
        phaseNumber: 4,
        title: "Databases & Storage",
        skills: ["SQL", "MongoDB"]
      },
      {
        phaseNumber: 5,
        title: "DevOps & Deployment",
        skills: ["Docker", "CI/CD Pipelines"]
      }
    ],
    skillMetadata: {
      "HTML": { desc: "The foundational markup language for web pages.", difficulty: "Beginner", time: "15 hours", prerequisites: [] },
      "CSS": { desc: "Styling language for responsive layouts and designs.", difficulty: "Beginner", time: "20 hours", prerequisites: ["HTML"] },
      "JavaScript": { desc: "Core programming language of the web platform.", difficulty: "Intermediate", time: "50 hours", prerequisites: ["HTML", "CSS"] },
      "React": { desc: "Component-based declarative UI library.", difficulty: "Intermediate", time: "40 hours", prerequisites: ["JavaScript"] },
      "Git": { desc: "Distributed version control system.", difficulty: "Beginner", time: "10 hours", prerequisites: [] },
      "Linux": { desc: "Command-line operating system fundamentals.", difficulty: "Intermediate", time: "15 hours", prerequisites: [] },
      "Node.js": { desc: "JavaScript runtime built on Chrome's V8 engine.", difficulty: "Intermediate", time: "30 hours", prerequisites: ["JavaScript"] },
      "Express": { desc: "Fast, unopinionated web framework for Node.js.", difficulty: "Intermediate", time: "15 hours", prerequisites: ["Node.js"] },
      "REST APIs": { desc: "Architectural style for designing networked applications.", difficulty: "Intermediate", time: "20 hours", prerequisites: ["JavaScript", "Node.js"] },
      "SQL": { desc: "Standard relational database query language.", difficulty: "Intermediate", time: "25 hours", prerequisites: [] },
      "MongoDB": { desc: "NoSQL document-based database platform.", difficulty: "Intermediate", time: "20 hours", prerequisites: ["JavaScript"] },
      "Docker": { desc: "Containerization platform for application deployment.", difficulty: "Advanced", time: "25 hours", prerequisites: ["Linux"] },
      "CI/CD Pipelines": { desc: "Automated code delivery and testing pipelines.", difficulty: "Advanced", time: "20 hours", prerequisites: ["Git", "Docker"] }
    }
  },
  "Data Scientist": {
    title: "Data Scientist",
    description: "Extract actionable insights from massive structured and unstructured datasets using math, statistics, and machine learning.",
    estimatedDuration: "8 Months",
    phases: [
      {
        phaseNumber: 1,
        title: "Programming & Math",
        skills: ["Python", "Statistics", "SQL"]
      },
      {
        phaseNumber: 2,
        title: "Data Wrangling & Analysis",
        skills: ["Pandas", "Data Visualization", "Git"]
      },
      {
        phaseNumber: 3,
        title: "Machine Learning Foundations",
        skills: ["Scikit-Learn", "Linear Algebra", "Model Evaluation"]
      }
    ],
    skillMetadata: {
      "Python": { desc: "Versatile programming language standard for data science.", difficulty: "Beginner", time: "40 hours", prerequisites: [] },
      "Statistics": { desc: "Probability distributions, hypothesis testing, and inference.", difficulty: "Intermediate", time: "30 hours", prerequisites: [] },
      "SQL": { desc: "Querying structured databases for data extraction.", difficulty: "Beginner", time: "25 hours", prerequisites: [] },
      "Pandas": { desc: "Python library for high-performance data manipulation.", difficulty: "Intermediate", time: "25 hours", prerequisites: ["Python"] },
      "Data Visualization": { desc: "Matplotlib, Seaborn, and storytelling with data.", difficulty: "Beginner", time: "15 hours", prerequisites: ["Python"] },
      "Git": { desc: "Version control for tracking code changes.", difficulty: "Beginner", time: "10 hours", prerequisites: [] },
      "Scikit-Learn": { desc: "Machine learning library for predictive modeling.", difficulty: "Advanced", time: "35 hours", prerequisites: ["Python", "Statistics"] },
      "Linear Algebra": { desc: "Matrices, vectors, and tensor operations.", difficulty: "Advanced", time: "25 hours", prerequisites: [] },
      "Model Evaluation": { desc: "Cross-validation, ROC curves, and metrics optimization.", difficulty: "Advanced", time: "20 hours", prerequisites: ["Scikit-Learn"] }
    }
  }
};