import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  ArrowRight, 
  Terminal, 
  Database, 
  BarChart2, 
  Activity, 
  Sparkles, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Copy, 
  ExternalLink 
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState('');
  const [activeTab, setActiveTab] = useState('sql');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {resumeData.personal.availability}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                {resumeData.personal.name}
              </span>
              <br />
              <span className="text-slate-300 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Data Analyst & BI Specialist
              </span>
            </h1>

            {/* Sub-summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {resumeData.personal.summary}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['SQL (PostgreSQL / MySQL)', 'Python (Pandas & NumPy)', 'Power BI & DAX', 'Relational Modeling', 'Statistical EDA'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-slate-800 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#playground"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Live Data Sandbox</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume Details</span>
              </button>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-slate-400">
              <button
                onClick={() => copyToClipboard(resumeData.personal.email, 'email')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-slate-300"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{resumeData.personal.email}</span>
                {copied === 'email' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(resumeData.personal.phone, 'phone')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-slate-300"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{resumeData.personal.phone}</span>
                {copied === 'phone' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Analytics Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-card rounded-2xl p-5 border border-slate-700/60 shadow-2xl shadow-cyan-950/40">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">analyst-terminal@prabhat</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE ENGINE
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800 my-3 gap-2">
                {[
                  { id: 'sql', label: 'SQL Aggregations', icon: Database },
                  { id: 'python', label: 'Pandas Pipeline', icon: Terminal },
                  { id: 'powerbi', label: 'Power BI DAX', icon: BarChart2 }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 pb-2 px-2 text-xs font-mono transition-all border-b-2 ${
                        activeTab === tab.id
                          ? 'border-cyan-400 text-cyan-300 font-semibold'
                          : 'border-transparent text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Code / Analytics Viewport */}
              <div className="bg-slate-950/90 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-900 min-h-[175px]">
                {activeTab === 'sql' && (
                  <div className="text-slate-300 space-y-1">
                    <p className="text-cyan-400 font-semibold">// Hospital DB: Revenue Optimization Query</p>
                    <p><span className="text-purple-400">SELECT</span> department, <span className="text-yellow-400">SUM</span>(billing_amount) <span className="text-purple-400">AS</span> total_rev</p>
                    <p><span className="text-purple-400">FROM</span> hospital_records</p>
                    <p><span className="text-purple-400">WHERE</span> appointment_status = <span className="text-emerald-400">'COMPLETED'</span></p>
                    <p><span className="text-purple-400">GROUP BY</span> department</p>
                    <p><span className="text-purple-400">HAVING</span> total_rev &gt; 50000</p>
                    <p><span className="text-purple-400">ORDER BY</span> total_rev <span className="text-purple-400">DESC</span>;</p>
                    <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Executed in 14ms • 0 schema anomalies</span>
                    </div>
                  </div>
                )}

                {activeTab === 'python' && (
                  <div className="text-slate-300 space-y-1">
                    <p className="text-cyan-400 font-semibold"># Automated Live API Ingestion & Cleansing</p>
                    <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
                    <p>raw_data = fetch_live_api_stream(endpoint=<span className="text-emerald-400">'/v1/metrics'</span>)</p>
                    <p>df = pd.DataFrame(raw_data).dropna(subset=[<span className="text-emerald-400">'kpi_id'</span>])</p>
                    <p>df[<span className="text-emerald-400">'normalized_val'</span>] = df[<span className="text-emerald-400">'raw_metric'</span>].apply(standardize)</p>
                    <p>df.to_sql(<span className="text-emerald-400">'reporting_layer'</span>, con=engine, if_exists=<span className="text-emerald-400">'append'</span>)</p>
                    <div className="pt-2 text-[11px] text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Pipeline active • Stream latency 120ms</span>
                    </div>
                  </div>
                )}

                {activeTab === 'powerbi' && (
                  <div className="text-slate-300 space-y-1">
                    <p className="text-cyan-400 font-semibold">// Dynamic DAX Measure: 7-Day Moving Avg</p>
                    <p>Rolling_7D_KPI =</p>
                    <p><span className="text-yellow-400">CALCULATE</span>(</p>
                    <p>&nbsp;&nbsp;<span className="text-yellow-400">AVERAGE</span>(DailyMetrics[TotalValue]),</p>
                    <p>&nbsp;&nbsp;<span className="text-yellow-400">DATESINPERIOD</span>('Calendar'[Date], <span className="text-yellow-400">LASTDATE</span>('Calendar'[Date]), -7, DAY)</p>
                    <p>)</p>
                    <div className="pt-2 text-[11px] text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Auto-refreshed with real-time API triggers</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic KPI Tiles Preview */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center">
                <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Integrity</div>
                  <div className="text-emerald-400 font-mono font-bold text-sm">3NF Normalized</div>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Query Logic</div>
                  <div className="text-cyan-400 font-mono font-bold text-sm">Automated UI</div>
                </div>
                <div className="bg-slate-900/80 rounded-lg p-2 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Refresh</div>
                  <div className="text-amber-400 font-mono font-bold text-sm">Real-Time</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
