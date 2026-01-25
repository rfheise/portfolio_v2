let propic = '/images/header/propic_v3.jpg';
let linkedinIcon = '/images/header/linkedin.svg';

function Icon({
  name,
  className,
}: {
  name: 'mail' | 'github' | 'camera' | 'download';
  className?: string;
}) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  } as const;

  switch (name) {
    case 'mail':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 7.5h15v9h-15z" />
          <path d="M4.8 7.8l7.2 5.2 7.2-5.2" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.16-3.35-1.16-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.01A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.28 2.74-1.01 2.74-1.01.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.65-4.55 4.9.36.3.68.9.68 1.82v2.7c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 7.5h2l1-1.5h5l1 1.5h2A2.5 2.5 0 0 1 20 10v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2.5 2.5 0 0 1 2.5-2.5z" />
          <path d="M12 17a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 12 17z" />
        </svg>
      );
    case 'download':
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v10" />
          <path d="M8.5 10.5L12 13.9l3.5-3.4" />
          <path d="M5 20h14" />
        </svg>
      );
  }
}

export default function Header() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-frame" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-kicker">Austin, TX</p>
          <h1 className="hero-name">Ryan Heise</h1>
          <p className="hero-tagline">My life goal is to organically get the best SEO for &quot;Ryan Heise&quot;</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="https://ryanfheise.com/files/resume" target="_blank" rel="noreferrer noopener">
              <Icon name="download" className="btn-icon" />
              <span>View Resume</span>
            </a>
            <a className="btn btn-ghost" href="#contact">
              <span>Contact</span>
            </a>
          </div>

          <div className="hero-links" aria-label="Links">
            <a className="icon-link" href="mailto:ryanfheise@gmail.com" aria-label="Email">
              <Icon name="mail" className="icon" />
            </a>
            <a className="icon-link" href="https://github.com/rfheise" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <Icon name="github" className="icon" />
            </a>
            <a
              className="icon-link"
              href="https://linkedin.com/in/ryanfheise"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <span
                className="icon icon-mask"
                style={{
                  WebkitMaskImage: `url(${linkedinIcon})`,
                  maskImage: `url(${linkedinIcon})`,
                }}
                aria-hidden="true"
              />
            </a>
            <a className="icon-link" href="https://meter.heise.ai" target="_blank" rel="noreferrer noopener" aria-label="Photos">
              <Icon name="camera" className="icon" />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait">
            <img src={propic} alt="Ryan Heise" />
            <div className="portrait-ornament" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
