import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExperienceList from './Experience/ExperienceList'
import About from './About/About'
import Education from './Education/Education'
import ProjectList from './Project/ProjectList'
import SkillList from './Skills/SkillList'
function App() {
  return (
    <div className="App">
      <header>
        <h1>Ryan Heise</h1>
        <p className="title">Aspiring Memer</p>
        </header>
        <About />
        <ExperienceList />
        <Education />
        <ProjectList />
        <SkillList />
    </div>
  );
}

export default App;
