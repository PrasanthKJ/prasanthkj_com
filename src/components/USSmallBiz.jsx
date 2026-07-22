import React from 'react';
import { US_SMALL_BIZ_SOLUTIONS, HERO_DATA } from '../data/portfolioData';
import { CheckCircle2, Calendar, Zap, ShieldCheck, MapPin } from 'lucide-react';

export default function USSmallBiz() {
  return (
    <section id="small-biz" style={{ padding: '80px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <div className="pill-badge-emerald" style={{ marginBottom: '1rem', gap: '6px' }}>
            <MapPin size={14} />
            <span>Local Business Web Solutions</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            High-Converting Websites Engineered for <span className="gradient-text-emerald">Local Service Businesses</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Whether you run a <strong>lawn mowing service</strong>, <strong>carpet cleaning business</strong>, <strong>plumbing/HVAC service</strong>, or local trade company in the US or globally, I build turnkey WordPress & Shopify websites designed to rank high in local search results and convert visitors into paying phone calls.
          </p>
        </div>

        {/* Solutions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {US_SMALL_BIZ_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'var(--btn-sec-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="pill-badge-gold" style={{ fontSize: '0.75rem' }}>
                    {item.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                    {item.impact}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 500 }}>
                  {item.subtitle}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {item.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                <Zap size={16} />
                <span>Local SEO & Microdata Schema Included</span>
              </div>
            </div>
          ))}
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
                100% Mobile Optimized & Click-To-Call Ready
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Over 78% of local service inquiries originate on mobile devices. Your website will be fast, secure, and ready to capture leads.
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
