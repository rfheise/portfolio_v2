
import Image from 'next/image'
function ContactIcon({ name }: { name: 'email' | 'linkedin' | 'github' | 'phone' | 'website' }) {
  const common = {
    className: 'contact-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  } as const;

  switch (name) {
    case 'email':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 7.5h15v9h-15z" />
          <path d="M4.8 7.8l7.2 5.2 7.2-5.2" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="contact-icon" width="24" height="24" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
      );
    case 'github':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.16-3.35-1.16-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.01A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.28 2.74-1.01 2.74-1.01.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.65-4.55 4.9.36.3.68.9.68 1.82v2.7c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54a2 2 0 0 1 1.72 1.98z" />
        </svg>
      );
    case 'website':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          <path d="M3 12h18" />
          <path d="M12 3c2.8 2.5 4.5 5.7 4.5 9s-1.7 6.5-4.5 9c-2.8-2.5-4.5-5.7-4.5-9S9.2 5.5 12 3z" />
        </svg>
      );
  }
}

export default function Contact() {
  return (
    <div className="block">
      <div className="section-head">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
      </div>

      <div className="contact-grid" role="list">
        <div className="contact-row contact-row--half" role="listitem">
          <ContactIcon name="email" />
          <div className="contact-body">
            <div className="contact-label">Email</div>
            <a href="mailto:ryanfheise@gmail.com">ryanfheise@gmail.com</a>
          </div>
        </div>

        <div className="contact-row contact-row--half" role="listitem">
          <ContactIcon name="linkedin" />
          <div className="contact-body">
            <div className="contact-label">LinkedIn</div>
            <a href="https://linkedin.com/in/ryanfheise" target="_blank" rel="noreferrer noopener">
              linkedin.com/in/ryanfheise
            </a>
          </div>
        </div>

        <div className="contact-row contact-row--third" role="listitem">
          <ContactIcon name="github" />
          <div className="contact-body">
            <div className="contact-label">GitHub</div>
            <a href="https://github.com/rfheise" target="_blank" rel="noreferrer noopener">
              github.com/rfheise
            </a>
          </div>
        </div>

        <div className="contact-row contact-row--third" role="listitem">
          <ContactIcon name="phone" />
          <div className="contact-body">
            <div className="contact-label">Phone</div>
            <a href="tel:+15742073299">574-207-3299</a>
          </div>
        </div>

        <div className="contact-row contact-row--third" role="listitem">
          <ContactIcon name="website" />
          <div className="contact-body">
            <div className="contact-label">Website</div>
            <a href="https://ryanfheise.com" target="_blank" rel="noreferrer noopener">
              ryanfheise.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
