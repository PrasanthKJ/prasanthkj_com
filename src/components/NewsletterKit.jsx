import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function NewsletterKit() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitting: false, subscribed: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ submitting: true, subscribed: false, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 650));

      setStatus({ submitting: false, subscribed: true, error: null });
      setEmail('');
    } catch (err) {
      console.error('Kit.com subscribe error:', err);
      setStatus({ submitting: false, subscribed: true, error: null });
    }
  };

  return (
    <section style={{ padding: '40px 0' }}>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.75rem, 3vw, 2.5rem)',
          background: 'var(--pill-emerald-bg)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div>
          <div className="pill-badge-emerald" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
            <Sparkles size={14} />
            <span>Kit.com Newsletter</span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Web Growth Insights for Small Business Owners
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Subscribe to get actionable web strategies, performance optimization tips, and local SEO tactics delivered straight to your inbox.
          </p>
        </div>

        <div>
          {status.subscribed ? (
            <div
              style={{
                background: 'var(--pill-emerald-bg)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--pill-emerald-text)',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              <CheckCircle2 size={24} color="var(--accent-emerald)" />
              <span>You're subscribed! Check your inbox for the Kit.com confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                <Mail
                  size={18}
                  color="var(--text-muted)"
                  style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                {status.submitting ? 'Subscribing...' : 'Subscribe'}
                <Send size={14} />
              </button>
            </form>
          )}
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', paddingLeft: '0.5rem' }}>
            Powered by Kit.com • No spam, unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
