import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ExternalLink, Star, ArrowUpRight, Zap, Code2, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <section id="works" style={{ padding: '80px 0' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div className="pill-badge" style={{ marginBottom: '0.75rem' }}>
          Portfolio Showcase
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          Delivered Client Works & Case Studies
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px' }}>
          A selection of live client projects delivered with high performance, seamless user experience, and measurable business growth.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.75rem)',
              position: 'relative',
              overflow: 'hidden',
              boxSizing: 'border-box',
              maxWidth: '100%',
            }}
          >
            {/* Background Ambient Glow per Card */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: project.accentGlow,
                filter: 'blur(80px)',
                pointerEvents: 'none',
              }}
            ></div>

            {/* Upper Content & Action Button Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: '1.5rem',
                maxWidth: '100%',
              }}
            >
              <div style={{ flex: '1 1 300px', minWidth: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', maxWidth: '100%' }}>
                  <span
                    className={
                      project.badgeColor === 'gold'
                        ? 'pill-badge-gold'
                        : project.badgeColor === 'emerald'
                        ? 'pill-badge-emerald'
                        : 'pill-badge'
                    }
                    style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                  >
                    {project.category}
                  </span>

                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--pill-gold-text)', fontWeight: 600 }}>
                    <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    {project.metrics.rating}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                  {project.title}
                </h3>

                <a
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : '_self'}
                  rel={project.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-cyan)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginBottom: '1.25rem',
                    wordBreak: 'break-all',
                    maxWidth: '100%',
                  }}
                >
                  <Globe size={16} style={{ flexShrink: 0 }} />
                  <span>{project.displayUrl}</span>
                  {project.url.startsWith('http') && <ExternalLink size={14} style={{ flexShrink: 0 }} />}
                </a>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '850px', marginBottom: '1.5rem', wordBreak: 'break-word' }}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '100%' }}>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.825rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                        wordBreak: 'break-word',
                        boxSizing: 'border-box',
                        maxWidth: '100%',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - Reinstated for Desktop & Mobile */}
              <div style={{ flexShrink: 0 }}>
                <a
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : '_self'}
                  rel={project.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="btn-secondary"
                  style={{
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  View Case Details
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                maxWidth: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                  <Zap size={16} style={{ flexShrink: 0 }} />
                  <span>{project.metrics.result}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  <Code2 size={16} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                  <span>{project.metrics.speed}</span>
                </div>
              </div>

              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Client Verified Project Delivery
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
