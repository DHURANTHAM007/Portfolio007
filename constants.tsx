import React from 'react';
import { Project, Skill, SocialLink } from './types';

// --- ICONS ---

const GithubIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MediumIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.4,1.4C7.2,1.2,7,1,6.8,0.9C6.8,0.9,6.8,0.9,6.7,0.9C6.5,0.8,6.3,0.8,6.1,0.8C5.8,0.8,5.5,0.9,5.2,1l-4,4 C1,5.2,0.8,5.5,0.8,5.8c0,0.2,0.1,0.5,0.2,0.7l5.3,9.2c0.2,0.3,0.5,0.6,0.8,0.7c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2 c0.5,0,1-0.2,1.4-0.6l7.8-7.8l6.4,11c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.5,0.2,0.8,0.2c0.3,0,0.5-0.1,0.8-0.2c0.2-0.1,0.4-0.3,0.5-0.5 c0.1-0.2,0.2-0.5,0.2-0.8c0-0.3-0.1-0.5-0.2-0.8L17.7,8.5L7.4,1.4z"></path></svg>
);

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PenToolIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
);

const BrainCircuitIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.716a1 1 0 0 1-1.242.97L4.04 4.96a2.5 2.5 0 0 0-3.008 3.51l.952 1.905a1 1 0 0 1-.31 1.365L0 12l1.674.258a1 1 0 0 1 .31 1.365l-.952 1.905a2.5 2.5 0 0 0 3.008 3.51l4.218-1.23a1 1 0 0 1 1.242.97v.716A2.5 2.5 0 0 0 12 22a2.5 2.5 0 0 0 2.5-2.5v-.716a1 1 0 0 1 1.242-.97l4.218 1.23a2.5 2.5 0 0 0 3.008-3.51l-.952-1.905a1 1 0 0 1 .31-1.365L24 12l-1.674-.258a1 1 0 0 1-.31-1.365l.952-1.905a2.5 2.5 0 0 0-3.008-3.51l-4.218 1.23a1 1 0 0 1-1.242-.97V4.5A2.5 2.5 0 0 0 12 2Z"></path><path d="M12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0v-2a2 2 0 1 1 4 0 2 2 0 1 1-4 0"></path><path d="M12 12a2 2 0 1 0-4 0 2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0 2 2 0 1 0 4 0"></path><path d="M12 12a2 2 0 1 1 0 4 2 2 0 1 1 0-4v2a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path><path d="M12 12a2 2 0 1 0 0-4 2 2 0 1 0 0 4v2a2 2 0 1 1 0-4 2 2 0 1 1 0 4"></path></svg>
);

const CodeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const FigmaIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><title>Figma</title><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.25 12c0-2.073 1.677-3.75 3.75-3.75s3.75 1.677 3.75 3.75A3.752 3.752 0 0 1 12 15.75c-1.033 0-1.97-.42-2.65-1.1H12v-2.4h-3.75c-.001-.08-.001-.16-.001-.24zm3.75-1.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm-3.75.001a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zM12 8.25a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0zm.001 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"></path></svg>
);

// --- DATA ---

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anjosh007', icon: <LinkedinIcon /> },
  { name: 'GitHub', url: 'https://github.com/DHURANTHAM007', icon: <GithubIcon /> },
  { name: 'Medium', url: 'https://medium.com/@anjosh753', icon: <MediumIcon /> },
  { name: 'Instagram', url: 'https://www.instagram.com/anjosh_007', icon: <InstagramIcon /> },
  { name: 'Email', url: 'mailto:anjosh753@gmail.com', icon: <MailIcon /> },
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Content Writing', icon: <PenToolIcon /> },
  { name: 'Problem Solving', icon: <BrainCircuitIcon /> },
  { name: 'Web Development', icon: <CodeIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'CineVerse',
    description: 'A dynamic, user-focused blog platform for movie reviews and film analysis, built with a modern tech stack.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Content'],
    image: '/Portfolio007/images/cineverse.jpg',
    liveUrl: 'https://dhurantham007.github.io/CineVerse',
    repoUrl: 'https://github.com/DHURANTHAM007/CineVerse',
  },
  {
    title: 'ScriptCraft',
    description: 'A real-time collaborative screenwriting tool designed to streamline the creative process for writers.',
    tags: ['TypeScript', 'WebSockets', 'Node.js', 'Collaboration'],
    image: '/Portfolio007/images/scriptcraft.jpg',
    liveUrl: 'https://dhurantham007.github.io/ScriptCraft',
    repoUrl: 'https://github.com/DHURANTHAM007/ScriptCraft',
  },
  {
    title: 'DevFolio',
    description: 'An intuitive portfolio builder for developers, leveraging Figma designs to create pixel-perfect, responsive websites.',
    tags: ['Next.js', 'Figma', 'Vercel', 'UI/UX'],
    image: '/Portfolio007/images/devfolio.jpg',
    liveUrl: 'https://dhurantham007.github.io/DevFolio',
    repoUrl: 'https://github.com/DHURANTHAM007/DevFolio',
  },
];
