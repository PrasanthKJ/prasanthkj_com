import React, { useState, useEffect } from 'react';
import { Layers, Award, Briefcase, Workflow, Star, Code2, Mail, CheckCircle2 } from 'lucide-react';

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Overview', icon: Layers },
    { id: 'highlights', label: 'Highlights', icon: Award },
    { id: 'small-biz', label: 'Local Biz Solutions', icon: Briefcase },
    { id: 'works', label: 'Client Works', icon: CheckCircle2 },
    { id: 'workflow', label: 'Agency Workflow', icon: Workflow },
    { id: 'testimonials', label: 'Client Trust', icon: Star },
    { id: 'tech-blog', label: 'Developer Notes', icon: Code2 },
    { id: 'contact', label: 'Get in Touch', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
