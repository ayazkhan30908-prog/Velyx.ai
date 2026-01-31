import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#020617] text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:flex flex-col">
        <div className="text-xl font-bold text-white mb-10 tracking-tighter">VELYX.AI</div>
        <nav className="space-y-2 flex-1">
          <div className="flex items-center gap-3 p-3 bg-indigo-500/10 text-indigo-400 rounded-xl cursor-pointer">
            <LayoutDashboard size={18} /> Overview
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:text-white rounded-xl transition">
            <Users size={18} /> Leads
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics Overview</h1>
            <p className="text-slate-400 text-sm">Welcome back to your AI command center.</p>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <div className="text-slate-500 text-xs mb-1">TOTAL VISITORS</div>
            <div className="text-3xl font-bold font-mono">42,892</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <div className="text-slate-500 text-xs mb-1">QUALIFIED LEADS</div>
            <div className="text-3xl font-bold font-mono text-indigo-400">1,204</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <div className="text-slate-500 text-xs mb-1">CONVERSION</div>
            <div className="text-3xl font-bold font-mono">4.8%</div>
          </div>
        </div>

        <div className="p-8 bg-indigo-600 rounded-2xl text-white">
          <h2 className="text-xl font-bold mb-2">Ready to scale?</h2>
          <p className="opacity-90">Upgrade to Pro to unlock unlimited lead tracking and AI insights.</p>
        </div>
      </main>
    </div>
  );
}
