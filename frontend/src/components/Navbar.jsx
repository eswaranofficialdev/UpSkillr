import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Compass, LayoutDashboard, Map, BookOpen, Briefcase, User, Sun, Moon, Menu, X, Code } from 'lucide-react';

export default function Navbar() {
  const { darkMode, setDarkMode } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 font-black text-2xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
          <Compass className="w-7 h-7 text-emerald-500" />
          Upskillr
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <Link to="/dashboard" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"><LayoutDashboard className="w-4 h-4"/> Dashboard</Link>
          <Link to="/roadmap" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"><Map className="w-4 h-4"/> Roadmap</Link>
          <Link to="/careers" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"><Briefcase className="w-4 h-4"/> Careers</Link>
          <Link to="/projects" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"><Code className="w-4 h-4"/> Projects</Link>
          <Link to="/resources" className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"><BookOpen className="w-4 h-4"/> Resources</Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <Link to="/profile" className="hidden sm:flex p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all">
            <User className="w-4 h-4" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-2 animate-fade-in">
          <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><LayoutDashboard className="w-5 h-5"/> Dashboard</Link>
          <Link to="/roadmap" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><Map className="w-5 h-5"/> Roadmap</Link>
          <Link to="/careers" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><Briefcase className="w-5 h-5"/> Careers</Link>
          <Link to="/projects" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><Code className="w-5 h-5"/> Projects</Link>
          <Link to="/resources" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><BookOpen className="w-5 h-5"/> Resources</Link>
          <Link to="/profile" onClick={closeMenu} className="flex items-center gap-3 p-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500"><User className="w-5 h-5"/> Profile & Settings</Link>
        </div>
      )}
    </header>
  );
}