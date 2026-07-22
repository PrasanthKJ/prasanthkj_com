import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, ExternalLink, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme = 'light', toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'US Biz Solutions', href: '#small-biz' },
    { name: 'Client Works', href: '#works' },
    { name: 'Agency Workflow', href: '#workflow' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Tech Notes', href: '#tech-blog' },
    { name: 'Blog', href: HERO_DATA.blogUrl, external: true },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'var(--nav-bg)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2C5EAD 0%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(44, 94, 173, 0.3)',
            }}
          >
            PK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ lineHeight: 1.1 }}>Prasanth KJ</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }}></span>
              Available for Projects
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            background: 'var(--btn-sec-bg)',
            padding: '0.4rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              style={{
                color: link.external ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: link.external ? 600 : 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.external ? 'var(--accent-emerald)' : 'var(--text-secondary)')}
            >
              {link.name}
              {link.external && <ExternalLink size={12} />}
            </a>
          ))}
        </nav>

        {/* Action CTA & Theme Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Switcher Toggle - Placed right before Get in Touch */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun size={20} color="#f59e0b" /> : <Moon size={20} color="#2C5EAD" />}
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.875rem',
            }}
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: link.external ? 'var(--accent-emerald)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {link.name}
              {link.external && <ExternalLink size={16} />}
            </a>
          ))}
        </div>
      )}

      {/* Mobile CSS responsive helper */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
