import React from 'react';
import { US_SMALL_BIZ_SOLUTIONS } from '../data/portfolioData';
import { CheckCircle2, PhoneCall, Zap, ShieldCheck, MapPin } from 'lucide-react';

export default function USSmallBiz() {
  return (
    <section id="small-biz" style={{ padding: '80px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.9) 0%, rgba(13, 15, 20, 0.95) 100%)',
          border: '1px solid rgba(44, 94, 173, 0.2)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <div className="pill-badge-emerald" style={{ marginBottom: '1rem', gap: '6px' }}>
            <MapPin size={14} />
            <span>US Small Business Websites</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            High-Converting Websites Engineered for <span className="gradient-text-emerald">US Local Service Businesses</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Are you a local business owner in the United States running a <strong>lawn mowing service</strong>, <strong>carpet cleaning business</strong>, <strong>plumbing/HVAC service</strong>, or home service company? I build turnkey WordPress & Shopify websites designed to rank high in local searches and turn visitors into paying phone calls.
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
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
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

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
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
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                <Zap size={16} />
                <span>US Zip Code Local SEO Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Business Guarantee Banner */}
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.08)',
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
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                100% Mobile Optimized & Click-To-Call Ready
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#a7f3d0' }}>
                Over 78% of US service calls originate on mobile devices. Your website will be fast, secure, and ready to capture leads.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-primary" style={{ background: 'var(--accent-emerald)', color: '#07080a', fontWeight: 800 }}>
            <PhoneCall size={16} />
            Request US Biz Demo
          </a>
        </div>
      </div>
    </section>
  );
}
