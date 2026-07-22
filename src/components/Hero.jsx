import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Award, CheckCircle, Mail, Calendar } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1 pulse-animation"></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Trust Status Pill */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <div className="pill-badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Award size={16} color="var(--pill-gold-text)" />
            <span>{HERO_DATA.upworkStatus.title}</span>
            <span style={{ opacity: 0.6 }}>•</span>
            <span>{HERO_DATA.upworkStatus.rating}</span>
          </div>

          <div className="pill-badge-emerald" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle size={14} color="var(--accent-emerald)" />
            <span>{HERO_DATA.upworkStatus.successRate}</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            color: 'var(--text-primary)',
          }}
        >
          I'm a <span className="gradient-text">Website Developer</span> crafting high-converting WordPress & Shopify sites.
        </h1>

        {/* Subtitle & Value Proposition */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            maxWidth: '780px',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Specializing in agency-grade web builds, WooCommerce e-commerce, and high-ROI local lead generation websites for <strong style={{ color: 'var(--text-primary)' }}>small business owners</strong> (lawn care, carpet cleaning, local contractors) and global brands.
        </p>

        {/* Social Icons & Email Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            padding: '1rem 1.25rem',
            background: 'var(--btn-sec-bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            maxWidth: 'fit-content',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Connect directly:</span>
          
          <a
            href={HERO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            style={{ color: '#0a66c2', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
          >
            <LinkedinIcon size={18} color="#0a66c2" />
            <span>LinkedIn</span>
          </a>

          <span style={{ color: 'var(--border-subtle)' }}>|</span>

          <a
            href={HERO_DATA.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter"
            style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
          >
            <TwitterIcon size={18} color="var(--text-primary)" />
            <span>X (Twitter)</span>
          </a>

          <span style={{ color: 'var(--border-subtle)' }}>|</span>

          <a
            href={HERO_DATA.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook Page"
            style={{ color: '#1877f2', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
          >
            <FacebookIcon size={18} color="#1877f2" />
            <span>Facebook</span>
          </a>

          <span style={{ color: 'var(--border-subtle)' }}>|</span>

          <a
            href={`mailto:${HERO_DATA.email}`}
            style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
          >
            <Mail size={18} />
            <span>hello@prasanthkj.com</span>
          </a>
        </div>

        {/* Action Call to Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href={HERO_DATA.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
          >
            <Calendar size={18} />
            Book a 15-Min Strategy Call
          </a>

          <a href="#works" className="btn-secondary" style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}>
            View Client Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
