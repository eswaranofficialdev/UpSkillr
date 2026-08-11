import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();
  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 animate-fade-in">
      {toast.type === 'info' ? <Info className="w-5 h-5 text-sky-400" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
      <span className="font-medium text-sm">{toast.message}</span>
    </div>
  );
}