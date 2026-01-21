import React, { useEffect, useMemo, useState } from 'react';
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

  const [activeSectionId, setActiveSectionId] = useState<string>('top');

  useEffect(() => {
    const updateScrollOffset = () => {
      const nav = document.querySelector<HTMLElement>('.deco-nav');
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      const navTop = Number.parseFloat(getComputedStyle(nav).top || '0') || 0;
      const gap = 2;
      const offset = Math.ceil(navRect.height + navTop + gap);
      document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
    };

    updateScrollOffset();
    void (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts?.ready?.then(() => updateScrollOffset());
    window.addEventListener('resize', updateScrollOffset, { passive: true });
    return () => window.removeEventListener('resize', updateScrollOffset);
  }, []);

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

  useEffect(() => {
    const readScrollOffset = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset').trim();
      const value = Number.parseFloat(raw.replace('px', ''));
      return Number.isFinite(value) ? value : 120;
    };

    let rafId = 0;
    const updateActive = () => {
      const doc = document.documentElement;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const atBottom = window.innerHeight + scrollY >= doc.scrollHeight - 2;
      if (atBottom) {
        setActiveSectionId('contact');
        return;
      }

      const cursorY = scrollY + readScrollOffset() + 8;
      let currentId = 'top';

      for (const item of navItems) {
        if (item.id === 'top') continue;
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= cursorY) currentId = item.id;
      }

      setActiveSectionId(currentId);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActive();
      });
    };

    updateActive();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('load', onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('load', onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [navItems]);

  return (
    <div className="App">
        <div id="top" aria-hidden="true" />
        <div className="deco-backdrop" aria-hidden="true" />
        <nav className="deco-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSectionId === item.id ? 'page' : undefined}
            >
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
