import React, { useState } from 'react';
import { US_SMALL_BIZ_SOLUTIONS, HERO_DATA } from '../data/portfolioData';
import { CheckCircle2, Calendar, Zap, ShieldCheck, MapPin, Wrench, ShoppingBag, Target } from 'lucide-react';

export default function USSmallBiz() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = US_SMALL_BIZ_SOLUTIONS[activeTab] || US_SMALL_BIZ_SOLUTIONS[0];

  const tabIcons = [Wrench, ShoppingBag, Target];

  return (
    <section id="small-biz" style={{ padding: '80px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
          <div className="pill-badge-emerald" style={{ marginBottom: '1rem', gap: '6px' }}>
            <MapPin size={14} />
            <span>Tailored Web Solutions</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            High-Converting Websites Engineered for <span className="gradient-text-emerald">Business Growth</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Select a business category below to explore custom web features, capabilities, and conversion architecture:
          </p>
        </div>

        {/* High-UX Segmented Control Tab Switcher */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            background: 'var(--btn-sec-bg)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '2.5rem',
            maxWidth: '100%',
          }}
        >
          {US_SMALL_BIZ_SOLUTIONS.map((item, idx) => {
            const isSelected = activeTab === idx;
            const IconComponent = tabIcons[idx] || Wrench;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: isSelected ? 'linear-gradient(135deg, var(--accent-purple) 0%, #1e4078 100%)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: isSelected ? '0 4px 15px rgba(44, 94, 173, 0.35)' : 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                <IconComponent size={16} color={isSelected ? '#ffffff' : 'var(--accent-purple)'} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Industry Showcase Panel */}
        <div
          style={{
            background: 'var(--btn-sec-bg)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            border: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="pill-badge-gold" style={{ fontSize: '0.75rem' }}>
                {activeSolution.tag}
              </span>
              <span className="pill-badge-emerald" style={{ fontSize: '0.75rem' }}>
                {activeSolution.impact}
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {activeSolution.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
              {activeSolution.subtitle}
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent-purple)',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              <Zap size={16} />
              <span>Mobile-First & Performance Engineered</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Key Included Features & Capabilities:
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {activeSolution.features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-card)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local Business Guarantee Banner */}
        <div
          style={{
            background: 'var(--pill-emerald-bg)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                100% Mobile Optimized & Conversion Focused
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Over 78% of web traffic originates on mobile devices. Your website will be fast, secure, and built to turn visitors into leads.
              </p>
            </div>
          </div>

          <a
            href={HERO_DATA.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ background: 'var(--accent-emerald)', color: '#ffffff', fontWeight: 800 }}
          >
            <Calendar size={16} />
            Schedule Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
