import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SidebarNav from './components/SidebarNav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import WebSolutions from './components/WebSolutions';
import Projects from './components/Projects';
import AgencyWorkflow from './components/AgencyWorkflow';
import Testimonials from './components/Testimonials';
import TechnicalBlog from './components/TechnicalBlog';
import NewsletterKit from './components/NewsletterKit';
import ContactHubspot from './components/ContactHubspot';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Top Floating Glassmorphism Navbar with Theme Switcher */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Page Layout Container */}
      <div className="container" style={{ flex: 1 }}>
        <div className="page-wrapper">
          {/* Sticky Side Index Navigator (Pinned at top: 100px) */}
          <SidebarNav />

          {/* Main Content Area */}
          <main className="main-content">
            <Hero />
            <Highlights />
            <WebSolutions />
            <Projects />
            <AgencyWorkflow />
            <Testimonials />
            <TechnicalBlog />
            <NewsletterKit />
            <ContactHubspot />
          </main>
        </div>
      </div>

      {/* Footer with SEO Keywords & Social Links */}
      <Footer />
    </div>
  );
}
