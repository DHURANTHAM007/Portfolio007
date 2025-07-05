
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold font-orbitron text-white">
          INITIATE <span className="text-red-500">CONTACT</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-red-500"></div>
        <p className="mt-8 max-w-2xl mx-auto text-center text-lg text-gray-400">
          Have a project, an idea, or just want to talk about movies? Let's connect.
        </p>

        <div className="mt-12 flex justify-center space-x-6">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group relative h-14 w-14 flex items-center justify-center rounded-full border-2 border-slate-600 text-slate-400 transition-all duration-300 hover:border-red-500 hover:text-red-500 hover:scale-110"
            >
              <div className="absolute -inset-px rounded-full bg-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30"></div>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
