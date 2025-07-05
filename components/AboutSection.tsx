
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
              <span className="text-red-500">SYSTEM.</span>IDENTITY
            </h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-red-500"></div>
          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            The guy who writes like he talks—and talks a lot about movies. Words are my scenes. Ideas are my scripts.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            I’m a <span className="text-yellow-400 font-semibold">Content Writer and Cinephile</span> who believes every sentence should leave an impact—like the last line of a good film. I'm passionate about crafting compelling narratives and using technology to tell stories in new and exciting ways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
