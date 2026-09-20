import type { ReactNode } from 'react';
import { assetUrl, profile } from '../data/portfolio';
import Reveal from '../components/Reveal';

/* Gmail's mark has a transparent notch that dissolves into the dark pill, so it rides
   on the light container Google's brand guidance calls for on dark surfaces. */
const GmailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 56 56" aria-hidden="true">
    <rect width="56" height="56" rx="12" fill="#fff" />
    <g transform="translate(5 10.5) scale(.885)">
      <path fill="#4285F4" d="M3.545 39.545h8.273V20.455L0 11.591V36a3.545 3.545 0 0 0 3.545 3.545Z" />
      <path fill="#34A853" d="M48.455 39.545h-8.273V20.455L52 11.591V36a3.545 3.545 0 0 1-3.545 3.545Z" />
      <path fill="#FBBC04" d="M52 5.773v5.818l-11.818 8.864V4l1.345-1.009C45.841-.253 52 2.823 52 5.773Z" />
      <path fill="#EA4335" d="M11.818 20.455V4L26 14.636 40.182 4v16.455L26 31.091z" />
      <path fill="#C5221F" d="M0 5.773v5.818l11.818 8.864V4l-1.345-1.009C6.159-.253 0 2.823 0 5.773Z" />
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const PdfIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#D93025" d="M6 2h7.2L20 8.8V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    <path fill="#fff" fillOpacity=".45" d="M13.2 2 20 8.8h-6.8V2Z" />
  </svg>
);

type ContactLink = {
  label: string;
  href: string;
  arrow: string;
  icon: ReactNode;
  external?: boolean;
  primary?: boolean;
};

const links: ContactLink[] = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    arrow: '→',
    icon: <GmailIcon />,
    primary: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    arrow: '↗',
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: 'Résumé, one page PDF',
    href: assetUrl(profile.resume),
    arrow: '↗',
    icon: <PdfIcon />,
    external: true,
  },
];

export default function Contact() {
  return (
    <Reveal as="section" className="section section-contact" id="contact">
      <div className="contact-panel">
        <span className="contact-blob" aria-hidden="true" />
        <span className="contact-orbit" aria-hidden="true" />

        <div className="contact-panel-inner">
          <p className="contact-eyebrow">Get in touch</p>
          <h2>Let’s talk</h2>
          <p className="contact-note">
            I’m always glad to talk about product design, design systems, or accessibility work.
          </p>

          <div className="contact-actions">
            {links.map((link) => (
              <a
                key={link.label}
                className={link.primary ? 'btn btn-primary' : 'btn'}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noreferrer' })}
              >
                {link.icon}
                <span>{link.label}</span>
                <span className="contact-arrow" aria-hidden="true">
                  {link.arrow}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
