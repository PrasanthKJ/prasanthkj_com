import React from 'react';
import Navbar from './components/Navbar';
import SidebarNav from './components/SidebarNav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import USSmallBiz from './components/USSmallBiz';
import Projects from './components/Projects';
import AgencyWorkflow from './components/AgencyWorkflow';
import Testimonials from './components/Testimonials';
import TechnicalBlog from './components/TechnicalBlog';
import NewsletterKit from './components/NewsletterKit';
import ContactHubspot from './components/ContactHubspot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Top Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Page Layout Container */}
      <div className="container" style={{ flex: 1 }}>
        <div className="page-wrapper">
          {/* Sticky Side Index Navigator inspired by jonnyczar.com */}
          <SidebarNav />

          {/* Main Content Area */}
          <main className="main-content">
            <Hero />
            <Highlights />
            <USSmallBiz />
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
