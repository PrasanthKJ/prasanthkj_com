import React from 'react';
import { TECHNICAL_ARTICLES } from '../data/portfolioData';
import { Code2, ExternalLink, ArrowRight } from 'lucide-react';

export default function TechnicalBlog() {
  return (
    <section id="tech-blog" style={{ padding: '80px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid var(--border-subtle)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.15)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        ></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div>
            <div className="pill-badge-emerald" style={{ marginBottom: '0.75rem', gap: '6px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)' }}>
              <Code2 size={14} />
              <span>Developer's Corner & Engineering Blog</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Technical Engineering Notes & Code Breakdown
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px', lineHeight: 1.6 }}>
              {TECHNICAL_ARTICLES.description} Hosted on Hashnode at{' '}
              <a
                href={TECHNICAL_ARTICLES.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-cyan)', fontWeight: 700, textDecoration: 'none' }}
              >
                hash.prasanthkj.com
              </a>
            </p>
          </div>

          <div>
            <a
              href={TECHNICAL_ARTICLES.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                borderColor: 'rgba(6, 182, 212, 0.4)',
                padding: '0.75rem 1.25rem',
              }}
            >
              Visit Technical Blog
              <ExternalLink size={16} color="var(--accent-cyan)" />
            </a>
          </div>
        </div>

        {/* Featured Technical Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {TECHNICAL_ARTICLES.articles.map((art, idx) => (
            <a
              key={idx}
              href={TECHNICAL_ARTICLES.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'var(--btn-sec-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--border-subtle)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                      {art.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {art.summary}
                  </p>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
