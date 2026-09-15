import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsSummary from './components/MetricsSummary';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import InteractivePlayground from './components/InteractivePlayground';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertModal from './components/CertModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern relative">
      {/* Background ambient gradient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-radial-gradient opacity-80" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <MetricsSummary />
        <SkillsSection />
        <ProjectsSection />
        <InteractivePlayground />
        <EducationSection onOpenCert={(cert) => setSelectedCert(cert)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
