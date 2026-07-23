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
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
          What Clients Say About Working With Prasanth
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          100% Job Success Rate & Top Rated Status earned by delivering consistent quality, prompt communication, and high-impact web development.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="glass-card"
            style={{
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxSizing: 'border-box',
              maxWidth: '100%',
              overflow: 'hidden',
            }}
          >
            <div>
              {/* Header Rating Stars & Verified Badge - Single Line on Desktop */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'nowrap', gap: '0.4rem', width: '100%' }}>
                <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  ))}
                </div>

                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--pill-emerald-text)',
                    background: 'var(--pill-emerald-bg)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxSizing: 'border-box',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={12} style={{ flexShrink: 0 }} />
                  <span>{item.verified}</span>
                </span>
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  wordBreak: 'break-word',
                }}
              >
                "{item.quote}"
              </p>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                {item.client}
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--accent-purple)', fontWeight: 600, wordBreak: 'break-word' }}>
                {item.project} • <span style={{ color: 'var(--text-muted)' }}>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
