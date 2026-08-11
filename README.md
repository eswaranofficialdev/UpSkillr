⚡ SkillFlowPro
A high-performance, modern career roadmap generator and skill tracker built with React and Tailwind CSS. SkillFlowPro helps users discover customized learning pathways, evaluate prior skills, track real-time mastery progress, and access curated resources entirely client-side with full offline persistence.

🚀 Live Demo
Check out the live app here

📦 GitHub Repository
View Source Code on GitHub

✨ Key Features
🎯 Smart Skill Detection & Pruning: Analyzes your existing skill set to automatically bypass redundant milestones and sequence remaining requirements.

🗺️ Interactive Career Roadmaps: Step-by-step visual learning phases with interactive skill nodes, difficulty tags, and prerequisites.

📊 Real-Time Progress Dashboard: Tracks overall completion percentages, mastered skills, and estimated learning timelines.

📚 Curated Free Resources: Integrated directory of 100% free educational platforms, documentation, and video courses.

🛠️ Practical Project Recommendations: Hands-on project milestones tailored directly to your chosen career path (Beginner, Intermediate, Advanced).

🔒 Complete Privacy & Offline Support: Powered completely client-side with persistent storage via localStorage—no backend or database required.

🛠️ Tech Stack
Framework: React (Hooks, Context API)

Styling: Tailwind CSS (Responsive Glassmorphism UI & Custom Dark/Light Modes)

Routing: React Router (Client-side routing with clean URL architecture)

Build Tool: Vite for lightning-fast bundling

📂 Project Structure
Plaintext
skillflowpro/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SkillModal.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   ├── careersData.js
│   │   ├── resourcesData.js
│   │   └── projectsData.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── OnboardingPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── RoadmapPage.jsx
│   │   ├── CareerExplorerPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   └── ProfilePage.jsx
│   ├── utils/
│   │   └── recommendationEngine.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vercel.json
└── README.md
💻 How to Run Locally
To get a local copy up and running, follow these simple steps:

Clone the repository:

Bash
git clone https://github.com/eswaranofficialdev/UpSkillr.git
Navigate to the project directory:

Bash
cd UpSkillr
Install the dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open in your browser:
Click the local link provided in your terminal (typically http://localhost:5173).
