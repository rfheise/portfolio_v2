import React, { useEffect, useMemo } from 'react';
import './App.css';
import ExperienceList from './Experience/ExperienceList'
import Education from './Education/Education'
import ProjectList from './Project/ProjectList'
import SkillList from './Skills/SkillList'

import Header from './Header'
import Contact from './Contact/Contact'


function App() {
  const navItems = useMemo(
    () => [
      { id: 'top', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    document.documentElement.classList.add('js');

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (revealElements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!(entry.target instanceof HTMLElement)) return;
          if (entry.isIntersecting || entry.intersectionRatio > 0) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
        <div id="top" aria-hidden="true" />
        <div className="deco-backdrop" aria-hidden="true" />
        <nav className="deco-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <Header />
        <main className="deco-main">
          <ExperienceList />
          <Education />
          <ProjectList />
          <SkillList />
          <section id="contact" className="contact reveal" aria-label="Contact">
            <Contact />
          </section>
        </main>
    </div>
  );
}

export default App;
