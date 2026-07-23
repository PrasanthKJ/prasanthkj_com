import React, { useState, useEffect } from 'react';
import { Award, Briefcase, Workflow, Star, Code2, Mail, CheckCircle2 } from 'lucide-react';

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('highlights');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'highlights', label: 'Highlights', icon: Award },
    { id: 'small-biz', label: 'Services & Solutions', icon: Briefcase },
    { id: 'works', label: 'Client Works', icon: CheckCircle2 },
    { id: 'workflow', label: 'Agency Workflow', icon: Workflow },
    { id: 'testimonials', label: 'Client Trust', icon: Star },
    { id: 'tech-blog', label: 'Developer Notes', icon: Code2 },
    { id: 'contact', label: 'Get in Touch', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const highlightsEl = document.getElementById('highlights');
      const heroEl = document.getElementById('hero');

      if (highlightsEl) {
        const highlightsTop = highlightsEl.offsetTop;
        // Trigger sidebar fade-in when the Highlights section reaches 50% from the bottom of the viewport
        const triggerPoint = highlightsTop - window.innerHeight * 0.5;
        setIsVisible(window.scrollY >= triggerPoint);
      } else if (heroEl) {
        const triggerPoint = heroEl.offsetTop + heroEl.offsetHeight - window.innerHeight * 0.5;
        setIsVisible(window.scrollY >= triggerPoint);
      } else {
        setIsVisible(window.scrollY > 300);
      }

      // Track active section for highlights & below
      const scrollPosition = window.scrollY + 250;
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className="sidebar-container"
      style={{
        position: 'sticky',
        top: '100px',
        height: 'calc(100vh - 120px)',
        width: '240px',
        paddingRight: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          background: 'transparent',
          border: 'none',
          padding: '0.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
        }}
      >
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            marginBottom: '0.5rem',
            paddingLeft: '0.75rem',
          }}
        >
          Quick Index
        </div>

        {sections.map((sec) => {
          const IconComponent = sec.icon;
          const isActive = activeSection === sec.id;

          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={isActive ? 'sidebar-active-glow' : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.55rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--accent-purple)' : 'var(--text-secondary)',
                background: isActive ? 'var(--sidebar-active-bg)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--accent-purple)' : '3px solid transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <IconComponent
                size={16}
                color={isActive ? 'var(--accent-purple)' : 'var(--text-muted)'}
              />
              <span>{sec.label}</span>
            </a>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .sidebar-container { display: none !important; }
        }
      `}</style>
    </aside>
  );
}
