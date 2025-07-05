
import React from 'react';
import './App.css';
import Profile from './assets/Profile Picture.jpeg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>AKASH S L</h1>
        <p>Iron Man Themed Portfolio</p>
      </header>
      <main className="main">
        <img src={Profile} alt="Akash S L" className="profile-pic" />
        <section className="intro">
          <h2>About Me</h2>
          <p>I am a developer and creative technologist...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
