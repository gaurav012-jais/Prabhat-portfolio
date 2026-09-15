import React from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/90 text-slate-400 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                PY
              </div>
            </div>
            <div>
              <span className="font-bold text-sm text-white">
                {resumeData.personal.name}
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                {resumeData.personal.role} • {resumeData.personal.location}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#playground" className="hover:text-cyan-400 transition-colors">Playground</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono">
            <span>Built with React + Tailwind CSS</span>
            <span>•</span>
            <span className="text-cyan-400">Optimized for Data Analysis Showcase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
