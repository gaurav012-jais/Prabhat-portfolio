import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { FolderGit2, ArrowUpRight, Database, Terminal, BarChart2, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const projectIcons = [Database, Terminal, BarChart2];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            FLAGSHIP PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Data & Analytics Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            End-to-end engineering from raw relational database modeling and automated ETL scripts to intuitive executive dashboards.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, idx) => {
            const Icon = projectIcons[idx % projectIcons.length];
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl flex flex-col justify-between p-6 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  {/* Top Bar: Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-emerald-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Highlights from Resume */}
                  <div className="space-y-2.5 text-xs text-slate-300 mt-4">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Box & Action */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                  <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-200 font-medium leading-relaxed">
                      <strong className="text-emerald-300">Impact: </strong>
                      {project.impact}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 hover:text-white bg-slate-900 hover:bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400 rounded-xl transition-all group/btn shadow-sm"
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Case Study & Queries</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
