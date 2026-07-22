import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Award, Mail, Code2, Globe, Calendar } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand & Profile Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2C5EAD 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                }}
              >
                PK
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                Prasanth KJ
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '440px', marginBottom: '1.25rem' }}>
              Expert <strong>WordPress freelancer</strong> and <strong>website freelancer</strong> helping small business owners, e-commerce brands, and global agencies build fast, high-converting websites.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="pill-badge-gold" style={{ fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Award size={14} />
                <span>Upwork Top Rated Freelancer</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a href="#highlights" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Achievements & Proof
                </a>
              </li>
              <li>
                <a href="#small-biz" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Local Service Solutions
                </a>
              </li>
              <li>
                <a href="#works" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Client Works & Portfolio
                </a>
              </li>
              <li>
                <a href="#workflow" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Agency Workflow Model
                </a>
              </li>
              <li>
                <a href="#testimonials" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Client Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Blogs & Resources Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Blogs & Scheduling
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a
                  href={HERO_DATA.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-purple)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Calendar size={14} />
                  Book 15-Min Meeting
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-emerald)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Globe size={14} />
                  Personal Blog
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.techBlogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Code2 size={14} />
                  Technical Developer Blog
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Contact & Project Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Direct Social Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href={HERO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <LinkedinIcon size={16} color="#0a66c2" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <TwitterIcon size={16} color="var(--text-primary)" />
                  <span>X (formerly Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <FacebookIcon size={16} color="#1877f2" />
                  <span>Facebook Page</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HERO_DATA.email}`}
                  style={{ color: 'var(--accent-emerald)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                >
                  <Mail size={16} />
                  <span>hello@prasanthkj.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Footer Bar */}
        <div
          style={{
            padding: '1.25rem 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          <strong>Prasanth KJ</strong> • Professional <strong>WordPress Freelancer</strong> & <strong>Website Freelancer</strong> • Specialized <strong>Shopify Freelancer</strong> and <strong>Web Developer</strong> for small business owners, local service providers, e-commerce stores & global agency partners.
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} Prasanth KJ (prasanthkj.com). All rights reserved.
          </div>
          <div>
            Crafted with React & Modern Web Standards
          </div>
        </div>
      </div>
    </footer>
  );
}
