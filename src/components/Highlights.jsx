import React from 'react';
import { HIGHLIGHTS } from '../data/portfolioData';
import { Award, Code, Target, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function Highlights() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={28} color="#f59e0b" />;
      case 'Code': return <Code size={28} color="#10b981" />;
      case 'Target': return <Target size={28} color="#2C5EAD" />;
      case 'CheckCircle': return <CheckCircle size={28} color="#06b6d4" />;
      default: return <Award size={28} color="#f59e0b" />;
    }
  };

  return (
    <section id="highlights" style={{ padding: '60px 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
          Key Achievements & Experience
        </div>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Why US Clients & Agencies Trust Prasanth KJ</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.id}
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {getIcon(item.icon)}
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: item.color === 'gold' ? '#fde68a' : item.color === 'emerald' ? '#a7f3d0' : '#60a5fa',
                }}
              >
                {item.badge}
              </span>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0.5rem 0 0.75rem 0' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <span>Verified Proof</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
