import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_7kgtcoc';
const EMAILJS_TEMPLATE_ID = 'template_ga34eze';
const EMAILJS_PUBLIC_KEY = 'wbiqI5iwbDAAhiWDJ';

const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.12h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.2-8.25 8.2Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.53 3H21l-7.19 8.21L22 21h-6.53l-5.02-6.36L4.7 21H1.22l7.7-8.8L2 3h6.7l4.53 5.79L17.53 3Zm-1.14 16.17h1.77L7.7 4.73H5.8l10.59 14.44Z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.18 4.32 15.09 4.22 13.82 4.22c-2.66 0-4.48 1.62-4.48 4.6V10.5H6.8v3h2.54V21h4.16Z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.34-3.84-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z"/>
    </svg>
  ),
};

const CHANNELS = [
  { key: 'email', label: 'Email', href: 'mailto:alihasnain719386@gmail.com', external: false },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/923057707321', external: true },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/alihasnainn16/', external: true },
  { key: 'twitter', label: 'Twitter', href: 'https://x.com/ali_hasnai28019?s=11', external: true },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100052953360998', external: true },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/ali-hasnain-483921258', external: true },
  { key: 'github', label: 'GitHub', href: 'https://github.com/ali719386', external: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-inner">
        <div className="contact-copy">
          <span className="eyebrow">Contact Me</span>
          <h2>Let's work together</h2>

          <h3 className="contact-subheading">Get in touch with me</h3>
          <p className="contact-lede">
            Open to full-time backend / full-stack roles in Pakistan, and freelance work.
            Faisalabad-based, happy to relocate to Lahore for the right on-site role.
          </p>

          <div className="contact-socials">
            {CHANNELS.map(c => (
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="contact-social"
                aria-label={c.label}
                key={c.key}
              >
                {ICONS[c.key]}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about the role / project..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="contact-status contact-status-ok">Message sent - I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="contact-status contact-status-error">
              Something went wrong. Please fill all fields correctly or try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}