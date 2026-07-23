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
    { name: 'Services & Solutions', href: '#small-biz' },
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
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'var(--nav-bg)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '1.15rem',
            fontFamily: 'var(--font-heading)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2C5EAD 0%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(44, 94, 173, 0.3)',
              fontSize: '0.95rem',
              fontWeight: 800,
            }}
          >
            PK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ lineHeight: 1.1, whiteSpace: 'nowrap' }}>Prasanth KJ</span>
            <span className="navbar-status-badge" style={{ fontSize: '0.675rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block', flexShrink: 0 }}></span>
              <span className="status-text">Available for Projects</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            background: 'var(--btn-sec-bg)',
            padding: '0.4rem 1.1rem',
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
                fontSize: '0.85rem',
                fontWeight: link.external ? 600 : 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                whiteSpace: 'nowrap',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark/light theme"
            style={{ padding: '0.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#2C5EAD" />}
          </button>

          <a
            href="#contact"
            className="nav-cta-btn btn-primary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.825rem',
              whiteSpace: 'nowrap',
            }}
          >
            Get in Touch
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.45rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
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
                fontSize: '0.95rem',
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

          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem',
              fontSize: '0.9rem',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Mobile Responsive Helpers */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (max-width: 640px) {
          .status-text { display: none !important; }
          .nav-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
