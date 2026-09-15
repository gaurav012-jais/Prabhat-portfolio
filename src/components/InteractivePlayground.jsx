import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCw, 
  Database, 
  BarChart3, 
  Activity, 
  Sliders, 
  Check, 
  TrendingUp, 
  Users, 
  DollarSign, 
  BedDouble,
  Code,
  Sparkles
} from 'lucide-react';

const departmentsData = [
  { id: 'cardio', name: 'Cardiology', consultations: 420, revenue: 148500, avgTicket: 353, beds: 88, share: 28 },
  { id: 'ortho', name: 'Orthopedics', consultations: 380, revenue: 122000, avgTicket: 321, beds: 82, share: 23 },
  { id: 'neuro', name: 'Neurology', consultations: 210, revenue: 104500, avgTicket: 497, beds: 91, share: 20 },
  { id: 'pediatrics', name: 'Pediatrics', consultations: 510, revenue: 86700, avgTicket: 170, beds: 74, share: 16 },
  { id: 'emergency', name: 'Emergency', consultations: 680, revenue: 69200, avgTicket: 101, beds: 96, share: 13 }
];

export default function InteractivePlayground() {
  const [activeDepartment, setActiveDepartment] = useState(departmentsData[0]);
  const [viewMode, setViewMode] = useState('hospital'); // 'hospital' | 'api'
  
  // Real-time API simulation state
  const [streamActive, setStreamActive] = useState(true);
  const [recordsCount, setRecordsCount] = useState(14820);
  const [currentLatency, setCurrentLatency] = useState(16);
  const [activeDaxKpi, setActiveDaxKpi] = useState(384.2);

  useEffect(() => {
    if (!streamActive) return;
    const interval = setInterval(() => {
      setRecordsCount((prev) => prev + Math.floor(Math.random() * 8) + 3);
      setCurrentLatency(Math.floor(Math.random() * 10) + 12);
      setActiveDaxKpi((prev) => Number((prev + (Math.random() * 4 - 2)).toFixed(1)));
    }, 1500);
    return () => clearInterval(interval);
  }, [streamActive]);

  const maxRevenue = Math.max(...departmentsData.map(d => d.revenue));

  return (
    <section id="playground" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            LIVE ANALYST PLAYGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Analytics Sandbox
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Test how Prabhat structures relational queries, aggregates healthcare KPIs, and streams real-time data pipelines.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-6">
            <button
              onClick={() => setViewMode('hospital')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'hospital'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Hospital DB Analytics
            </button>
            <button
              onClick={() => setViewMode('api')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'api'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Live API & DAX Stream
            </button>
          </div>
        </div>

        {/* VIEW 1: Hospital DB & SQL Interactive Explorer */}
        {viewMode === 'hospital' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls & Department Selection */}
            <div className="lg:col-span-4 space-y-4">
              <div className="glass-card p-5 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Select Healthcare Department
                </h3>
                <div className="space-y-2">
                  {departmentsData.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveDepartment(dept)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        activeDepartment.id === dept.id
                          ? 'bg-cyan-950/50 border-cyan-500/60 text-white shadow-md shadow-cyan-950/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeDepartment.id === dept.id ? 'bg-cyan-400' : 'bg-slate-600'
                          }`}
                        />
                        <span className="font-semibold text-sm">{dept.name}</span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400">
                        ${dept.revenue.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic SQL Query Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/90 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-1.5 text-[11px] text-cyan-400">
                    <Code className="w-3.5 h-3.5" />
                    Generated SQL Query
                  </span>
                  <span className="text-[10px] text-emerald-400">Active Filter</span>
                </div>
                <div className="text-slate-300 leading-relaxed overflow-x-auto">
                  <span className="text-purple-400">SELECT</span> dept_name, <span className="text-yellow-400">SUM</span>(billing.amount) <br />
                  <span className="text-purple-400">FROM</span> departments d <br />
                  <span className="text-purple-400">JOIN</span> appointments a <span className="text-purple-400">ON</span> d.id = a.dept_id <br />
                  <span className="text-purple-400">WHERE</span> d.slug = <span className="text-emerald-400">'{activeDepartment.id}'</span> <br />
                  <span className="text-purple-400">GROUP BY</span> dept_name;
                </div>
              </div>
            </div>

            {/* Right KPI Metrics & Visual Distribution */}
            <div className="lg:col-span-8 space-y-6">
              {/* Dynamic Metric Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="glass-card p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-xs font-medium">Revenue</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    ${activeDepartment.revenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-mono">
                    {activeDepartment.share}% hospital share
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-xs font-medium">Consultations</span>
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    {activeDepartment.consultations}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1 font-mono">
                    Patient visits logged
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-xs font-medium">Avg Ticket Size</span>
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    ${activeDepartment.avgTicket}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    Per consultation
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-xs font-medium">Bed Occupancy</span>
                    <BedDouble className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-xl font-extrabold text-white font-mono">
                    {activeDepartment.beds}%
                  </div>
                  <div className="text-[11px] text-purple-400 mt-1 font-mono">
                    Ward capacity
                  </div>
                </div>
              </div>

              {/* Department Comparison Chart */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Department Revenue Contribution
                    </h4>
                    <p className="text-xs text-slate-400">
                      Comparing normalized billing amounts across hospital wings
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                    Live Visualizer
                  </span>
                </div>

                {/* Horizontal Bar Chart */}
                <div className="space-y-4">
                  {departmentsData.map((d) => {
                    const isCurrent = d.id === activeDepartment.id;
                    const percentage = Math.round((d.revenue / maxRevenue) * 100);
                    return (
                      <div
                        key={d.id}
                        onClick={() => setActiveDepartment(d)}
                        className="cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-xs mb-1 font-mono">
                          <span className={`font-semibold ${isCurrent ? 'text-cyan-300' : 'text-slate-300 group-hover:text-white'}`}>
                            {d.name}
                          </span>
                          <span className="text-slate-400">
                            ${d.revenue.toLocaleString()} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isCurrent
                                ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-md shadow-cyan-500/50'
                                : 'bg-slate-700 group-hover:bg-slate-600'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: Real-time Live API & DAX Pipeline Simulator */}
        {viewMode === 'api' && (
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Python Ingestion Pipeline & Power BI DAX Live Stream
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Automated polling loop parsing JSON payloads directly into an auto-refresh reporting model
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStreamActive(!streamActive)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    streamActive
                      ? 'bg-rose-950/60 border border-rose-500/40 text-rose-300 hover:bg-rose-900/60'
                      : 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60'
                  }`}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${streamActive ? 'animate-spin' : ''}`} />
                  {streamActive ? 'Pause Stream' : 'Resume Stream'}
                </button>
              </div>
            </div>

            {/* Pipeline Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Records Ingested
                </span>
                <span className="text-2xl font-bold font-mono text-cyan-400 mt-1 block">
                  {recordsCount.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                  +12 rows / 1.5s
                </span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  API Latency
                </span>
                <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">
                  {currentLatency} ms
                </span>
                <span className="text-[11px] text-slate-400 font-mono mt-1 block">
                  Sub-second response
                </span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Live DAX Index
                </span>
                <span className="text-2xl font-bold font-mono text-amber-400 mt-1 block">
                  {activeDaxKpi}
                </span>
                <span className="text-[11px] text-amber-400 font-mono mt-1 block">
                  Dynamic Rolling Measure
                </span>
              </div>
            </div>

            {/* Pipeline Stage Architecture */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
              <div className="text-cyan-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Live Pipeline Dataflow Steps:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">1. Polling Layer</span>
                  <p className="text-[11px] text-slate-400">Python Requests polls third-party REST API endpoints on scheduled intervals.</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">2. Pandas Clean</span>
                  <p className="text-[11px] text-slate-400">Imputes nulls, parses ISO datetimes, enforces types, and handles duplicate keys.</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">3. Power BI Feed</span>
                  <p className="text-[11px] text-slate-400">Pushes cleaned dataset to Power BI tabular model with dynamic DAX metrics.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
