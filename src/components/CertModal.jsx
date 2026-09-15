import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function CertModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Card Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Certificate Credential
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 space-y-6 text-center">
          {/* Badge */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
              Verified Credential
            </span>
            <h2 className="text-xl font-bold text-white mt-3">
              {cert.title}
            </h2>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              Awarded to: <strong className="text-white">{resumeData.personal.name}</strong>
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left space-y-3 text-xs">
            <div className="flex justify-between pb-2 border-b border-slate-800/80">
              <span className="text-slate-400 font-mono">Curriculum / Track:</span>
              <span className="text-slate-200 font-semibold">{cert.issuer}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-slate-800/80">
              <span className="text-slate-400 font-mono">Verification:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-mono block mb-2">Validated Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {cert.keySkills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 text-[11px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
