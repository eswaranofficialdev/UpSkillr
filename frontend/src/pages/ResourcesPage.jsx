import React, { useState } from 'react';
import { RESOURCES_DATA } from '../data/resourcesData';
import { BookOpen, ExternalLink, Star } from 'lucide-react';

export default function ResourcesPage() {
  const [search, setSearch] = useState('');

  const filtered = RESOURCES_DATA.filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black mb-2">Free Learning Resources</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search resources..." 
          value={search} 
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-80"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(res => (
          <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-lg hover:border-indigo-500 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500">100% Free</span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-500"><Star className="w-3.5 h-3.5 fill-amber-500"/> {res.rating}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{res.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{res.type} • {res.category}</p>
            </div>
            <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm">
              Visit Resource <ExternalLink className="w-4 h-4"/>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}