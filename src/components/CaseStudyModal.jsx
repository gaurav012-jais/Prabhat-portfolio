import React, { useState } from 'react';
import { X, Copy, CheckCircle2, Database, Terminal, BarChart2, ShieldCheck, Sparkles } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.sampleQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/50">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Project Overview & Problem Solved
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              {project.summary}
            </p>
          </div>

          {/* Key Deliverables & Resume Bullets */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Implementation Highlights & Engineering Decisions
            </h4>
            <div className="space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture / Schema Entities */}
          {project.schemaOverview && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Schema Architecture & Modular Components
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.schemaOverview.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">
                      {item.table}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.cols}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code / Logic Snippet */}
          {project.sampleQuery && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Sample Analytical Query / Transformation Pipeline
                </h4>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/30 transition-all"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-cyan-300/90 overflow-x-auto border border-slate-800 leading-relaxed">
                <code>{project.sampleQuery}</code>
              </pre>
            </div>
          )}

          {/* Business Impact Box */}
          <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                Measurable Impact
              </span>
              <p className="text-sm text-emerald-200 mt-1">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
