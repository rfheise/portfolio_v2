import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExperienceList from './Experience/ExperienceList'
import About from './About/About'
import Education from './Education/Education'
import ProjectList from './Project/ProjectList'
import SkillList from './Skills/SkillList'

import Header from './Header'


function App() {
  return (
    <div className="App">
        <Header />
        {/* <About /> */}
        <ExperienceList />
        <Education />
        <ProjectList />
        <SkillList />
    </div>
  );
}

export default App;
