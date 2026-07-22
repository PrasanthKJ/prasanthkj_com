import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ShieldCheck, Award } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
        <div className="pill-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
          <Award size={14} />
          <span>Client Reviews & Social Proof</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
          What Verified Clients Say About Working With Prasanth KJ
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          100% Job Success Rate & Top Rated Status earned by delivering consistent quality, prompt communication, and high-impact web development.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              {/* Header Rating Stars & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-emerald)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <ShieldCheck size={12} />
                  {item.verified}
                </span>
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: '#e2e8f0',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                "{item.quote}"
              </p>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
                {item.client}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                {item.project} • <span style={{ color: 'var(--text-muted)' }}>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
