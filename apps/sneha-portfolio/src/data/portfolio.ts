export const profile = {
  name: 'Sneha Jadhav',
  shortName: 'Sneha',
  role: 'UI/UX & Product Designer',
  tagline: 'I design clear, useful, and engaging digital products.',
  positioning:
    'I turn complex business and user needs into thoughtful flows, prototypes, and shipped products — across research, strategy, interaction, visual design, and usability testing.',
  location: 'Toronto, Ontario, Canada',
  email: 'snehaj382@gmail.com',
  phone: '+1 416-824-4497',
  website: 'https://snehajadhav.me',
  socials: [
    { label: 'Portfolio', href: 'https://snehajadhav.me' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/snehajadhav22' },
    { label: 'Email', href: 'mailto:snehaj382@gmail.com' },
  ],
};

export const heroStats = [
  { value: '+11%', label: 'user satisfaction (SevenMentor redesign)' },
  { value: '−33%', label: 'mobile bounce rate' },
  { value: '10+', label: 'client projects shipped (Upwork)' },
  { value: 'Winner', label: 'Adidas × BrainStation 24-hr hackathon' },
];

export const about = {
  heading: 'Design with engineering logic and human empathy',
  body: [
    'I’m Sneha Jadhav, a UI/UX and product designer in Toronto. I combine a technical foundation in computer engineering, formal training in interior design, and a UX diploma from BrainStation to design products that are both buildable and human.',
    'I work across research, design strategy, interaction design, visual design, prototyping, and usability testing — collaborating closely with product owners, developers, and clients to go from ambiguous requirements to clear, tested experiences.',
    'I’m a quick learner who loves challenging work and hitting delivery timelines. My favourite problems are the complicated ones: portals, flows, and systems where clarity is the feature.',
  ],
  journey: [
    {
      title: 'Engineering',
      detail: 'B.E. Computer Engineering, University of Pune — technical fluency I bring into every handoff.',
    },
    {
      title: 'Spatial craft',
      detail: 'Diploma in Interior Design, Fergusson College — visual systems, proportion, and art direction.',
    },
    {
      title: 'Product',
      detail: 'UX Diploma, BrainStation Toronto + shipped work at Rafiki Digital, Recruit N Refer, SevenMentor, Upwork.',
    },
  ],
};

export const skillsGrouped = [
  {
    title: 'Design',
    items: [
      'User research',
      'Design thinking',
      'UX strategy',
      'Information architecture',
      'Interaction design',
      'Visual design',
      'Responsive web',
      'Mobile design',
    ],
  },
  {
    title: 'Delivery',
    items: [
      'Wireframing',
      'Prototyping',
      'Usability testing',
      'A/B testing',
      'Journey mapping',
      'Task flows & user stories',
      'Design documentation',
      'Storyboarding',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Figma',
      'Sketch',
      'InVision',
      'Adobe XD',
      'Photoshop',
      'Zeplin',
      'Miro / Mural',
      'HTML / CSS',
    ],
  },
];

export const skills = skillsGrouped.flatMap((g) => g.items);

export type Project = {
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  meta: string;
  accent: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Moodofy — supporting international students through low moods',
    outcome: 'End-to-end 10-week capstone, research → shipped mobile concept + marketing site',
    description:
      'Lead case study. Research-led mobile app for international students experiencing depressive feelings. Secondary research, hypotheses, task prioritization, core flows, wireframes, UI, and a marketing site with moodboard and interaction concepts.',
    tags: ['0 to 1', 'Mobile', 'UX Research', 'UI System', 'Shipped concept'],
    meta: 'BrainStation Capstone · Aug–Oct 2020 · UX/UI Designer + Researcher',
    accent: '#C14A2E',
  },
  {
    title: 'SevenMentor website redesign',
    outcome: '+11% satisfaction · −33% mobile bounce · ~Rs. 500K/yr admissions lift',
    description:
      'Metrics-led redesign of an education website using UX principles. Strongest proof of outcome in the portfolio — redesigned journeys, responsive patterns, and measured before/after impact.',
    tags: ['Redesign', 'Responsive', 'UX Strategy', 'Measured impact'],
    meta: 'SevenMentor, Pune · Feb 2019–Jan 2020 · Junior UI/UX Designer',
    accent: '#4A6C6F',
  },
  {
    title: 'Recruit N Refer — responsive hiring portal',
    outcome: 'From requirements to tested portal, shipped phase 1 with developers',
    description:
      'Wireframes and prototypes for a responsive web app from raw business requirements. Redesigned the portal experience, ran usability tests on new pages, and collaborated with developers to land phase one.',
    tags: ['Enterprise', 'Responsive Web', 'Prototyping', 'Usability Testing'],
    meta: 'Recruit N Refer, Toronto · Apr 2020+ · Junior UI/UX Designer',
    accent: '#7C5C3E',
  },
  {
    title: 'Adidas hackathon — 24-hour mobile concept',
    outcome: 'Winner · BrainStation × Adidas Canada',
    description:
      'High-energy sprint: prioritized a complete mobile product solution in 24 hours and pitched it to win. Proof of fast product thinking under pressure.',
    tags: ['Hackathon', 'Mobile', '0 to 1', 'Winner'],
    meta: 'Oct 2020 · Product Designer',
    accent: '#1C1917',
  },
  {
    title: 'Figo Friend — debt, made navigable',
    outcome: 'Mobile concept for young professionals facing unexpected debt',
    description:
      'Financial-wellbeing concept (Scotiabank-adjacent) that makes a sensitive money problem calmer and clearer through mobile interaction design.',
    tags: ['Fintech', 'Mobile', 'Interaction Design'],
    meta: 'Sep 2020 · Product Designer',
    accent: '#3B5BFD',
  },
  {
    title: 'Food-waste sprint + PatientsFirst + [24]7 AI',
    outcome: 'Research sprints, healthcare flows, and conversation design',
    description:
      'Supporting range: collaborative food-waste design sprint (research → testing), PatientsFirst healthcare task flows and prototypes, and multi-channel conversation design — chatbot, Messenger, and IVR for Ma & Pa Pizza.',
    tags: ['Design Sprint', 'Healthcare', 'Conversation Design', 'Research'],
    meta: 'BrainStation · Sprint + Unit work',
    accent: '#7D8C6F',
  },
];

export const experience = [
  {
    role: 'UI/UX Designer — Rafiki Digital',
    period: 'Oct 2020–present · Toronto',
    points: [
      'Defined UX strategy by scope and methodology with the product owner',
      'Set milestones and deliverables that tied business requirements to UX outcomes',
    ],
  },
  {
    role: 'Junior UI/UX Designer — Recruit N Refer',
    period: 'Apr 2020–present · Toronto',
    points: [
      'Built wireframes + prototypes for a responsive portal from requirements',
      'Redesigned portal UX and ran usability tests; shipped phase 1 with developers',
    ],
  },
  {
    role: 'Product Designer — Upwork',
    period: 'Feb 2020–present · Remote',
    points: [
      '10+ projects for 5+ clients across web, mobile, and redesigns',
      'Figma, Sketch, InVision — client needs into online + offline media',
    ],
  },
  {
    role: 'Junior UI/UX Designer — SevenMentor',
    period: 'Feb 2019–Jan 2020 · Pune',
    points: [
      'Website redesign: +11% satisfaction, −33% mobile bounce, ~Rs. 500K/yr admissions',
    ],
  },
];

export const education = [
  'BrainStation — Diploma, UX Design · Toronto · Aug–Oct 2020',
  'SevenMentor — UI/UX Training · Pune · Nov 2018–Feb 2019',
  'Fergusson College — Diploma, Interior Design · Pune · 2016–2018',
  'University of Pune — B.E. Computer Engineering · 2010–2014',
];

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
