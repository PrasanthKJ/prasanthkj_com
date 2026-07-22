import React from 'react';
import { AGENCY_WORKFLOW, HERO_DATA } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2, Workflow, Calendar } from 'lucide-react';

export default function AgencyWorkflow() {
  return (
    <section id="workflow" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
        <div className="pill-badge-emerald" style={{ marginBottom: '1rem', gap: '6px' }}>
          <Workflow size={14} />
          <span>Agency Standard Model</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Structured 5-Step Agency Workflow for 100% Client Peace of Mind
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          No guesswork, no missed deadlines, no hidden surprises. I follow a transparent agency-grade methodology that ensures your website is delivered on time, perfectly built, and optimized for maximum conversions.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
        }}
      >
        {AGENCY_WORKFLOW.map((item, index) => (
          <div
            key={item.step}
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
              {/* Step Number Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'rgba(44, 94, 173, 0.35)',
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent-emerald)',
                    background: 'var(--pill-emerald-bg)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  Phase {index + 1}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {item.description}
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                Key Deliverables:
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.deliverables.map((del, dIdx) => (
                  <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={14} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Guarantee Box */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.75rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--pill-bg)',
          border: '1px solid var(--pill-border)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ShieldCheck size={32} color="var(--accent-purple)" />
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Clear Milestone Agreements & Weekly Progress Demos
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              You retain full ownership of code, assets, and credentials throughout the entire project lifecycle.
            </p>
          </div>
        </div>

        <a
          href={HERO_DATA.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <Calendar size={16} />
          Schedule A 15-Min Call
        </a>
      </div>
    </section>
  );
}
