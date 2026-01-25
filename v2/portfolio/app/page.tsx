'use client'


import { useEffect, useMemo, useState } from 'react';
import ExperienceList from './_components/Experience/ExperienceList';
import Education from './_components/Education/Education';
import ProjectList from './_components/Project/ProjectList';
import SkillList from './_components/Skills/SkillList';
import Header from './_components/Header';
import Contact from './_components/Contact/Contact';


function App() {
  const navItems = useMemo(
    () => [
      { id: 'top', label: 'Home' },
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
      const nav = document.querySelector<HTMLElement>('.topbar');
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      const gap = 2;
      const offset = navRect.height + gap;
      document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
    };

    updateScrollOffset();
    void (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts?.ready?.then(() => updateScrollOffset());
    window.addEventListener('resize', updateScrollOffset, { passive: true });
    return () => window.removeEventListener('resize', updateScrollOffset);
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
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />

      <header className="topbar" aria-label="Site">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <a className="brand-name" href="#top">Ryan Heise</a>
          </div>
          <nav className="nav" aria-label="Primary">
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
        </div>
      </header>

      <main id="main" className="main">
        <Header />
        <section className="section" id="experience" aria-label="Experience">
          <ExperienceList />
        </section>
        <section className="section" id="education" aria-label="Education">
          <Education />
        </section>
        <section className="section" id="projects" aria-label="Projects">
          <ProjectList />
        </section>
        <section className="section" id="skills" aria-label="Skills">
          <SkillList />
        </section>
        <section className="section" id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 Ryan Heise</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
