import React from 'react';
import { resumeData } from '../data/resumeData';
import { X, Printer, Download, Mail, Phone, ExternalLink, Award, BookOpen, Briefcase, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              Prabhat Yadav — Official Resume
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-lg transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-slate-950/60 text-slate-200 space-y-6 text-sm font-sans">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {resumeData.personal.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {resumeData.personal.email}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {resumeData.personal.phone}
              </span>
              <span>|</span>
              <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
              <span>|</span>
              <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {resumeData.personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-300">
              <p>
                <strong className="text-white">Programming & Querying: </strong>
                Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (MySQL, PostgreSQL)
              </p>
              <p>
                <strong className="text-white">Data Visualization & BI: </strong>
                Tableau, Power BI, Excel (PivotTables, VLOOKUP, Charts)
              </p>
              <p>
                <strong className="text-white">Statistics & Analysis: </strong>
                Hypothesis testing, regression, A/B testing, data cleaning and wrangling
              </p>
              <p>
                <strong className="text-white">Tools: </strong>
                Jupyter Notebook, Git, GitHub, Google Sheets
              </p>
              <p>
                <strong className="text-white">Core Concepts: </strong>
                Data modeling, ETL basics, exploratory data analysis (EDA)
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      ({proj.category})
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Bachelor of Technology</span>
                  <span className="font-mono text-cyan-400">2022 - 2026</span>
                </div>
                <div className="text-slate-400">
                  Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur — <strong className="text-emerald-300">CGPA: 7.5/10</strong>
                </div>
                <div className="text-slate-400 mt-0.5">
                  Relevant coursework: Statistics, Database Management Systems, Data Structures, Data Analytics
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Intermediate</span>
                  <span className="font-mono text-cyan-400">2021</span>
                </div>
                <div className="text-slate-400">
                  Sterling School, Baragaon Babatpur, Varanasi
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>High School</span>
                  <span className="font-mono text-cyan-400">2019</span>
                </div>
                <div className="text-slate-400">
                  Amar Memo St. George's Prep School, Sarnath, Varanasi
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li>
                <span className="font-semibold text-white">Data Visualisation</span> — Verified Certificate
              </li>
              <li>
                <span className="font-semibold text-white">30 Days Power BI Micro Course</span> — Verified Certificate
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Full Resume Data of Prabhat Yadav
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
