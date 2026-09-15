import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

export default function EducationSection({ onOpenCert }) {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMICS & CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal technical education combined with industry-relevant analytics credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Timeline (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Academic Background
            </h3>

            <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

                  <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 group-hover:border-cyan-500/40 transition-all shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30 font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-emerald-300 font-semibold">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.coursework && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-emerald-400" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    {cert.issuer}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.keySkills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      onClick={() => onOpenCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{cert.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Hiring Value Proposition Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/20 shadow-lg">
                <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ready to Deliver Immediate Value
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Prabhat combines rigorous undergraduate training with practical mastery of SQL aggregations, Python data cleaning, and Power BI visualization, ready for fast onboarding.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
