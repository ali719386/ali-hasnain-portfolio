import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_7kgtcoc';
const EMAILJS_TEMPLATE_ID = 'template_ga34eze';
const EMAILJS_PUBLIC_KEY = 'wbiqI5iwbDAAhiWDJ';

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
            Faisalabad-based, happy to relocate for on-site roles.
          </p>
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