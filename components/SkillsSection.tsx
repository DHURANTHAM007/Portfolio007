
import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';

interface HexagonCardProps {
  skill: Skill;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ skill }) => {
  return (
    <div className="group relative h-40 w-36 cursor-pointer [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
      {/* Background and border */}
      <div className="absolute inset-0 bg-slate-800 transition-all duration-300 group-hover:bg-slate-700"></div>
      <div className="absolute inset-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-1">
          <div className="absolute inset-0 bg-slate-800 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-300 group-hover:bg-slate-700"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-2 text-center">
        <div className="text-yellow-400 transition-transform duration-300 group-hover:scale-125 group-hover:text-white">
          {skill.icon}
        </div>
        <p className="mt-3 text-sm font-semibold text-white">{skill.name}</p>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold font-orbitron text-white">
          SKILL <span className="text-red-500">MATRIX</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-red-500"></div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
          {SKILLS_DATA.map((skill) => (
            <HexagonCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
