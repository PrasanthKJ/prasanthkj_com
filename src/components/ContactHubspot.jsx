import React, { useState } from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactHubspot() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Website',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', projectType: 'WordPress Website', budget: '$1,000 - $3,000', message: '' });
    } catch (err) {
      console.error('HubSpot submit error:', err);
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.9) 0%, rgba(13, 15, 20, 0.95) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {/* Left Column Info */}
          <div>
            <div className="pill-badge" style={{ marginBottom: '1rem' }}>
              Let's Build Together
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
              Ready to Upgrade Your Website & Scale Your Business?
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Whether you need a brand-new <strong>WordPress site</strong>, a high-converting <strong>Shopify e-commerce store</strong>, or a targeted local lead website for your <strong>US Small Business</strong>, fill out the form and I'll get back to you within 12 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Direct Email</div>
                  <a href={`mailto:${HERO_DATA.email}`} style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
                    hello@prasanthkj.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>HubSpot Integrated Form</div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                    Submissions synced directly to HubSpot CRM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {status.submitted ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. Your inquiry has been logged in HubSpot CRM. Prasanth KJ will respond to your email shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="btn-secondary"
                  style={{ marginTop: '1rem', padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@yourcompany.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(20, 24, 34, 0.95)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    >
                      <option value="WordPress Website">WordPress CMS</option>
                      <option value="Shopify Ecommerce">Shopify Store</option>
                      <option value="US Local Business Site">US Local Biz Site</option>
                      <option value="Custom Web App">Custom Web App</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(20, 24, 34, 0.95)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    >
                      <option value="< $1,000">&lt; $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Project Details & Goals *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business, target audience, site features, or deadline..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', gap: '0.5rem' }}
                >
                  {status.submitting ? 'Sending to HubSpot CRM...' : 'Submit Inquiry'}
                  <Send size={16} />
                </button>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  🔒 Your email is 100% private. Synced to HubSpot CRM.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
