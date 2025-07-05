
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-red-500/30 hover:-translate-y-2">
      <div className="absolute -inset-px bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-slate-800 rounded-lg">
        <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="p-6">
          <h3 className="text-xl font-bold font-orbitron text-white">{project.title}</h3>
          <p className="mt-2 text-gray-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-yellow-400">{tag}</span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-end gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors font-semibold">Live Demo</a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-500">View Code</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold font-orbitron text-white">
          PROJECT <span className="text-red-500">ARCHIVES</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-red-500"></div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
