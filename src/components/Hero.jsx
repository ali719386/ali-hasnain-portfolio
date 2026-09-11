import { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = ['Software Engineer', 'Full Stack Developer', 'Backend Developer', 'Python Developer'];

const TYPING_SPEED = 200;      // ms per letter while typing
const ERASING_SPEED = 80;     // ms per letter while erasing
const PAUSE_AFTER_TYPE = 2000; // ms to wait after word is fully typed

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'erasing'

  useEffect(() => {
    const currentWord = ROLES[roleIndex];

    if (phase === 'typing') {
      if (displayText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPE);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'pausing') {
      const timeout = setTimeout(() => setPhase('erasing'), 0);
      return () => clearTimeout(timeout);
    }

    if (phase === 'erasing') {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, ERASING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setPhase('typing');
      }
    }
  }, [displayText, phase, roleIndex]);

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">★ Full Stack Developer - Open To Work</span>
          <h1>
            Hello, I'm ALI HASNAIN<br />
            <span className="hero-role">
              {displayText}
              <span className="hero-role-cursor" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-lede">
           Backend &amp; Full-Stack Developer - Python, Django, FastAPI, REST APIs, React.
           AI/ML enthusiast building real systems, not just tutorials. Fresh graduate,
           open to full-time roles in Pakistan.
          </p>
          <div className="hero-actions">

          <a href="/cv/Ali_Hasnain_CV.pdf" className="btn btn-primary">
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
    <path d="M14 3v5h5"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="15" y2="17"/>
    <line x1="9" y1="9" x2="11" y2="9"/>
  </svg>

</a>
  <a href="https://github.com/ali719386" target="_blank" rel="noreferrer" className="btn btn-icon" aria-label="GitHub">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.34-3.84-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z"/>
    </svg>
  </a>
  <a href="https://linkedin.com/in/ali-hasnain-483921258" target="_blank" rel="noreferrer" className="btn btn-icon" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  </a>
  <a href="mailto:alihasnain719386@gmail.com" className="btn btn-icon" aria-label="Email">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  </a>
</div>
          <div className="hero-meta">
            <div><span className="hero-meta-num">2+</span> internships shipped</div>
            <div><span className="hero-meta-num">3.51</span> CGPA / BSSE</div>
            <div><span className="hero-meta-num">FAISALABAD</span> Open To Work</div>
          </div>
        </div>

<div className="hero-photo-wrap">

          <div className="hero-photo-card">
            <img src="/images/Ali image.jpeg" alt="Ali Hasnain" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}