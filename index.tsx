import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- DATA ---
const user = {
  name: 'Anjosh J A',
  tagline: 'Content Writer | Cinephile',
  profilePicture: 'file-service://file-4hUagDGgiegUCiSXBtbuvM', // Replaced with provided image file pointer
  about: `The guy who writes like he talks—and talks a lot about movies. Words are my scenes. Ideas are my scripts. I’m a Content Writer and Cinephile who believes every sentence should leave an impact—like the last line of a good film. I build narratives, shape tone, and write copy that clicks. Whether it’s a digital brand or a dialogue-heavy indie film, I’m here to tell your story with style (and maybe a post-credit scene).`,
  skills: [
    { name: 'Content Writing', icon: 'fa-pencil-alt' },
    { name: 'Problem Solving', icon: 'fa-lightbulb' },
    { name: 'Web Development', icon: 'fa-code' },
    { name: 'Figma', icon: 'fa-figma' },
  ],
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anjosh007', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/DHURANTHAM007', icon: 'fab fa-github' },
    { name: 'Medium', url: 'https://medium.com/@anjosh753', icon: 'fab fa-medium' },
    { name: 'Instagram', url: 'https://www.instagram.com/anjosh_007', icon: 'fab fa-instagram' },
    { name: 'Email', url: 'mailto:anjosh753@gmail.com', icon: 'fas fa-envelope' },
  ],
};

// --- COMPONENTS ---

const Header = () => (
  <header className="app-header">
    <div className="container">
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          ANJOSH J<span>A</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="profile-pic-container">
                        <img src={user.profilePicture} alt={user.name} className="profile-pic" />
                    </div>
                    <h1 className="hero-title">{user.name}</h1>
                    <p className="hero-subtitle">{user.tagline}</p>
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <section id="about" className="section">
        <div className="container">
            <h2 className="section-title">SYSTEM.CHECK <span>// ABOUT ME</span></h2>
            <div className="about-content">
                <p>{user.about}</p>
            </div>
        </div>
    </section>
);

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2 className="section-title">ARMORY <span>// SKILLS</span></h2>
      <div className="skills-grid">
        {user.skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <i className={`skill-icon ${skill.icon}`}></i>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">
            <h2 className="section-title">COMMS.LINK <span>// CONTACT</span></h2>
            <div className="contact-content">
              <p className="contact-text">
                Want to collaborate or just say hi? You can find me on these platforms. Let's create something amazing.
              </p>
              <ul className="social-links">
                  {user.socials.map(social => (
                      <li className="social-link" key={social.name}>
                          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                              <i className={social.icon}></i>
                          </a>
                      </li>
                  ))}
              </ul>
            </div>
        </div>
    </section>
);

const Footer = () => (
  <footer className="app-footer">
      &copy; {new Date().getFullYear()} {user.name}. All rights reserved.
  </footer>
);


const App = () => (
  <div className="app-container">
    <Header />
    <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
    </main>
    <Footer />
  </div>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
{
  "name": "ironman-portfolio",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
