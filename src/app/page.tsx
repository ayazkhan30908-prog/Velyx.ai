import React from 'react';
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center bg-[#020617]/80">
        <div className="text-2xl font-bold tracking-tighter text-white">
          VELYX<span className="text-indigo-500">.AI</span>
        </div>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6">
          <Zap size={14} /> <span>POWERED BY NEXT-GEN AI</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Turn Data into <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Revenue</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one AI analytics platform built for agencies. Track leads, analyze behavior, and grow your business on autopilot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="border border-slate-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all">
            Live Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <BarChart3 className="text-indigo-500" />, title: "Real-time Tracking", desc: "Monitor every visitor interaction with millisecond precision." },
            { icon: <Users className="text-purple-500" />, title: "Lead Scoring", desc: "Our AI automatically identifies your highest-value prospects." },
            { icon: <ShieldCheck className="text-emerald-500" />, title: "Enterprise Security", desc: "Bank-grade encryption for all your business data." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#020617] border border-slate-800 hover:border-indigo-500/50 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
