import { useEffect, useState } from 'react';
import './Nav.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.12h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.2-8.25 8.2Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>

      <div className="wrap nav-inner">

        {/* Logo */}

        <a href="#top" className="nav-logo">
          <span className="nav-logo-mark" aria-hidden="true">AH</span>
          <span className="nav-logo-text">Ali Hasnain</span>
        </a>


        {/* Center Navigation */}

        <nav className="nav-links">

          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
            >
              {l.label}
            </a>
          ))}

        </nav>


        {/* Right Let's Talk */}

        <a
          href="https://wa.me/923057707321"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          {WHATSAPP_ICON}
          <span>Let's Talk</span>
        </a>


        {/* Mobile Burger */}

        <button
          className={`nav-burger ${open ? 'nav-burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* Mobile Navigation */}

      {open && (
        <div className="nav-mobile">

          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://wa.me/923057707321"
            target="_blank"
            rel="noreferrer"
            className="nav-cta nav-cta--mobile"
            onClick={() => setOpen(false)}
          >
            {WHATSAPP_ICON}
            <span>Let's Talk</span>
          </a>

        </div>
      )}

    </header>
  );
}