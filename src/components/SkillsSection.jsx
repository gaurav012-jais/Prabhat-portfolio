import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { Code2, BarChart3, PieChart, Database, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  BarChart3: BarChart3,
  PieChart: PieChart,
  Database: Database
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...resumeData.skillCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? resumeData.skillCategories
      : resumeData.skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL TOOLKIT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Science, SQL & Analytics Stack
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Proficiencies across relational databases, statistical modeling, end-to-end ETL pipelines, and executive business intelligence.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === 'Advanced'
                              ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300'
                              : 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Concepts Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Analytical Methodologies & Core Concepts
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Practicing disciplined database architecture and data-driven exploratory methods
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Data Modeling (3NF)',
                'ETL Pipeline Basics',
                'Exploratory Data Analysis (EDA)',
                'Role-Based Access Control (RBAC)',
                'DAX Time Intelligence',
                'ACID Compliance'
              ].map((concept) => (
                <div
                  key={concept}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
