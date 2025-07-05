
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans selection:bg-red-500/40 selection:text-white">
      {/* Background HUD/Grid Effect */}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#ef444412_1px,transparent_1px),linear-gradient(to_bottom,#ef444412_1px,transparent_1px)] bg-[size:36px_36px] opacity-30"></div>
      <div className="fixed inset-0 z-0 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#dc262633,transparent)]"></div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
