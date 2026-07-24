import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Award, CheckCircle, Cpu, Mail, Calendar } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-full-centered"
      style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1 pulse-animation" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '920px', width: '100%' }}>
        {/* Sleek Compact Trust Badges Row */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pill-badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '0.2rem 0.65rem' }}>
            <Award size={13} color="var(--pill-gold-text)" />
            <span>Top Rated</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>5.0 ★★★★★</span>
          </div>

          <div className="pill-badge-emerald" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '0.2rem 0.65rem' }}>
            <CheckCircle size={13} color="var(--accent-emerald)" />
            <span>100% Job Success</span>
          </div>

          <div className="pill-badge-purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
            <Cpu size={13} color="var(--pill-text)" />
            <span>7+ Yrs Automotive Software Engineer (Tier-1 Industry Background)</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.2vw, 4.1rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            maxWidth: '920px',
          }}
        >
          I build <span className="gradient-text">high-performing websites</span> & <span className="gradient-text-emerald">automated business workflows</span>.
        </h1>

        {/* Subtitle & Value Proposition */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '840px',
            marginBottom: '2rem',
            fontWeight: 400,
            lineHeight: 1.65,
          }}
        >
          Specializing in WordPress, custom website development, E-Commerce, workflow automation, API integrations, and CRM solutions that simplify complex processes and deliver reliable digital experiences.
        </p>

        {/* Action Call to Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2.5rem' }}>
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
            View Client Works
          </a>
        </div>

        {/* Direct Pure Tech Badges Container (Controlled via index.css) */}
        <div className="tech-badges-container">
          {[
            { name: 'WordPress', type: 'purple' },
            { name: 'WooCommerce', type: 'purple' },
            { name: 'React', type: 'purple' },
            { name: 'Shopify', type: 'purple' },
            { name: 'n8n', type: 'emerald' },
            { name: 'Zapier', type: 'emerald' },
            { name: 'Pabbly', type: 'emerald' },
            { name: 'AWS', type: 'cyan' },
            { name: 'GitHub Actions', type: 'cyan' },
            { name: 'CI/CD', type: 'cyan' },
            { name: 'Docker', type: 'cyan' },
            { name: 'Digital Marketing', type: 'gold' },
          ].map((item, idx) => (
            <span key={idx} className={`tech-badge-chip ${item.type}`}>
              <span>{item.name}</span>
            </span>
          ))}
        </div>

        {/* Social Icons & Direct Contact Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            padding: '0.75rem 1.25rem',
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
      </div>
    </section>
  );
}
