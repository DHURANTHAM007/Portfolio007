
import React from 'react';

const ArcReactor: React.FC = () => (
  <div className="relative h-48 w-48 md:h-64 md:w-64">
    <div className="absolute inset-0 animate-reactor-pulse">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <radialGradient id="arcGradient" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="90%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="1" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="none" stroke="url(#arcGradient)" strokeWidth="4" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="5 5" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
          <circle cx="50" cy="50" r="25" fill="#083344" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#67e8f9" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#a5f3fc" />
        </svg>
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="container mx-auto flex min-h-screen items-center px-6 py-20">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-orbitron text-5xl font-bold text-white md:text-7xl">
            ANJOSH J A
          </h1>
          <p className="mt-4 text-xl font-medium text-red-500 md:text-2xl">
            Content Writer | Cinephile
          </p>
          <p className="mt-6 text-lg text-gray-300">
            I build narratives, shape tone, and write copy that clicks. Whether it’s a digital brand or a dialogue-heavy indie film, I’m here to tell your story with style.
          </p>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a href="#projects" className="transform rounded-md bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:scale-105 hover:bg-red-500">
              View My Work
            </a>
            <a href="#contact" className="transform rounded-md border-2 border-gray-500 px-6 py-3 font-semibold text-gray-200 transition-all hover:scale-105 hover:border-red-500 hover:bg-red-500 hover:text-white">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 opacity-50 blur-2xl"></div>
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <img 
              src="https://dhurantham007.github.io/Portfolio/Profile%20Picture.jpeg"
              alt="Anjosh J A" 
              className="h-full w-full rounded-full object-cover border-4 border-slate-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
              <ArcReactor />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
