/** Relative paths (no leading slash) so assets resolve under the Vite `base`. */
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Sneha Jadhav',
  shortName: 'Sneha',
  role: 'Senior Product Designer at CSA Group',
  location: 'Toronto, Ontario, Canada',
  email: 'snehaj382@gmail.com',
  linkedin: 'https://www.linkedin.com/in/snehajadhav22',
  resume: 'documents/Sneha-Jadhav-Resume.pdf',
  headline: 'I design software for people doing careful work.',
  intro:
    'I’m Sneha, a Toronto-based product designer. I work across research, interaction, and design systems — currently at CSA Group, on the digital tools behind Canadian safety standards.',
};

export const socials = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
];

/**
 * CSA work is described only at the level Sneha has already published on LinkedIn.
 * No screens, flows, or internal detail — the employer material is confidential.
 */
export const currentWork = {
  heading: 'What I’m working on now',
  org: 'CSA Group',
  role: 'Senior Product Designer',
  period: 'Sept 2021 – present',
  context:
    'CSA Group develops standards in 57 areas, from electrical and industrial equipment to construction materials. Around 40% of them are referenced in Canadian legislation — so the people using our software are professionals who have to find, read, and correctly apply rules that carry real legal weight.',
  body: [
    'I lead development of the CSA Design System, setting the framework and standards that keep design coherent across the organisation. Alongside it I served as UX Lead on a brand identity transformation, extending into logo and identity updates.',
    'Most of my product work has been on CSA Advantage across mobile and desktop, as part of the wider Standards Digital Transformation. That means working closely with stakeholders to turn dense business requirements into flows people can actually follow, and running the research — interviews, journeys, focus groups, market analysis — that tells us whether they can.',
    'Accessibility runs through all of it. WCAG 2.0/2.1 and AODA conformance are not a final check on this work; they shape the patterns from the start.',
  ],
  note: 'CSA work is confidential, so there are no screens here. Happy to talk through the thinking.',
};

export const about = {
  heading: 'About',
  body: [
    'My two greatest passions are technology and people, which is what brought me to user experience in the first place.',
    'I started in Pune as a junior designer at SevenMentor, moved to Toronto for a UX diploma at BrainStation, and spent 2020–21 across agency, contract, and startup work before joining CSA Group in 2021.',
    'I like problems where the stakes are real and the material is dense — healthcare, finance, regulated industries. The work is figuring out what someone actually needs to do, then removing everything in their way.',
  ],
};

export const experience = [
  {
    role: 'Senior Product Designer',
    org: 'CSA Group',
    period: 'Oct 2025 – Present',
    place: 'Toronto',
    points: [
      'Leading development of the CSA Design System — framework and standards for cohesive design across the organisation',
      'UX Lead on a comprehensive brand identity transformation, including logo and identity updates',
    ],
  },
  {
    role: 'Product Designer',
    org: 'CSA Group',
    period: 'Sept 2021 – Oct 2025',
    place: 'Toronto',
    points: [
      'CSA Advantage across mobile and desktop, as part of the Standards Digital Transformation',
      'UX research end to end: user interviews, journeys, focus groups, market analysis, testing',
      'WCAG 2.0/2.1 accessibility built into interface patterns rather than retrofitted',
    ],
  },
  {
    role: 'Product Designer',
    org: 'Travel Discounters',
    period: 'Jan – Aug 2021',
    place: 'Toronto',
    points: [
      'User research that boosted the business by 80%, and product service changes that lifted profit margin by roughly 50%',
      'Built an internal quoting portal for sales agents; accessibility work for a largely senior audience',
    ],
  },
  {
    role: 'UI/UX Designer',
    org: 'Rafiki Digital',
    period: 'Oct – Dec 2020',
    place: 'Toronto',
    points: ['Defined UX strategy, methodology, and delivery milestones with the product owner'],
  },
  {
    role: 'UI/UX Designer',
    org: "Recruit 'N' Refer",
    period: 'Apr – Oct 2020',
    place: 'Toronto',
    points: [
      'Wireframes and prototypes for a responsive portal; usability testing on new pages',
      'Shipped phase one with developers',
    ],
  },
  {
    role: 'Product Designer',
    org: 'Upwork',
    period: 'Feb – Oct 2020',
    place: 'Remote',
    points: ['10+ projects for 5+ clients across web, mobile, and redesign work'],
  },
  {
    role: 'Junior UI/UX Designer',
    org: 'SevenMentor Pvt Ltd',
    period: 'Feb 2018 – Jan 2020',
    place: 'Pune, Maharashtra',
    points: [
      'Website redesign: +11% user satisfaction and −33% mobile bounce rate',
      'Admissions lift reported at roughly Rs. 500K per year',
    ],
  },
];

export const capabilities = [
  {
    title: 'Research',
    items: [
      'User interviews',
      'Journey mapping',
      'Usability testing',
      'Market analysis',
      'Heuristic evaluation',
      'A/B testing',
    ],
  },
  {
    title: 'Design',
    items: [
      'Interaction design',
      'Information architecture',
      'Design systems',
      'Wireframing',
      'Prototyping',
      'Visual design',
    ],
  },
  {
    title: 'Practice',
    items: [
      'WCAG 2.0/2.1 · AODA',
      'Cross-functional leadership',
      'Design documentation',
      'Storytelling',
      'Responsive and mobile',
    ],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin', 'Miro / Mural', 'HTML / CSS'],
  },
];

export const education = [
  'BrainStation — Diploma, User Experience Design · Toronto · 2020',
  'SevenMentor — UI/UX Training · Pune · 2017–2018',
];

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Now', href: '#now' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
