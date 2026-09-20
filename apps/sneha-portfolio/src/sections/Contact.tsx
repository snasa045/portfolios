import { assetUrl, profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <h2>Let’s talk</h2>
      <p>
        I’m always glad to talk about product design, design systems, or accessibility work.
      </p>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={assetUrl(profile.resume)} target="_blank" rel="noreferrer">
          Résumé (PDF)
        </a>
      </div>
      <p className="contact-meta">{profile.location}</p>
    </section>
  );
}
