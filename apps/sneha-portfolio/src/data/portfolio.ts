export const profile = {
  name: 'Sneha Jadhav',
  shortName: 'Sneha',
  role: 'Senior Product Designer at CSA Group',
  tagline: 'I design clear, useful, and engaging digital products.',
  positioning:
    'Toronto-based designer with 5+ years of experience turning complex business and user needs into thoughtful flows, prototypes, and shipped products — across research, strategy, interaction, visual design, accessibility (WCAG 2.0/2.1), and usability testing.',
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
  { value: '5+ yrs', label: 'Product design · CSA Group Senior Product Designer' },
  { value: '+80%', label: 'business boost (Travel Discounters research)' },
  { value: '+11%', label: 'user satisfaction (SevenMentor redesign)' },
  { value: '−33%', label: 'mobile bounce rate' },
];

export const about = {
  heading: 'Design with engineering logic and human empathy',
  body: [
    'I’m Sneha Jadhav, a Senior Product Designer at CSA Group in Toronto with 5+ years of experience. My two greatest passions are technology and people — which is what brought me to user experience.',
    'At CSA I lead critical Standards Digital Transformation projects: CSA Advantage (mobile + desktop), the CSA Design System, brand identity transformation as UX Lead, and exhaustive UX research — testing, market analysis, flows, and prototypes — with strong focus on accessibility (WCAG 2.0/2.1, AODA).',
    'I work across research, design strategy, interaction design, visual design, prototyping, and usability testing — collaborating closely with stakeholders, product owners, and cross-functional teams to go from ambiguous requirements to clear, tested experiences.',
  ],
  journey: [
    {
      title: 'Senior Product Designer — CSA Group',
      detail: 'Oct 2025–Present · UX Lead for brand identity, CSA Design System, Standards Digital Transformation.',
    },
    {
      title: 'Product Designer — CSA Group',
      detail: 'Sep 2021–Present · CSA Advantage app, stakeholder flows, user-centric data-driven design.',
    },
    {
      title: 'Product',
      detail: 'Travel Discounters (Jan–Aug 2021) · Rafiki Digital · Recruit N Refer · Upwork · SevenMentor (Feb 2018–Jan 2020).',
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
    title: 'Leadership',
    items: [
      'Cross-functional team leadership',
      'Market research',
      'Heuristic evaluation',
      'Storytelling',
      'Problem solving',
      'Design documentation',
      'WCAG 2.0/2.1 (AODA)',
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
      'Abstract',
      'Miro / Mural',
      'UsabilityHub',
      'Sendinblue',
      'HTML / CSS',
    ],
  },
];

export const skills = skillsGrouped.flatMap((g) => g.items);

export type Project = {
  slug: string;
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  meta: string;
  accent: string;
  link?: string;
};

/** Image paths are relative (no leading slash) so they resolve under the Vite `base`. */
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    slug: 'moodofy',
    title: 'Moodofy — supporting international students through low moods',
    outcome: 'End-to-end 10-week capstone, research → shipped mobile concept + marketing site',
    description:
      'Lead case study. Research-led mobile app for international students experiencing depressive feelings. Secondary research, hypotheses, task prioritization, core flows, wireframes, UI, and a marketing site with moodboard and interaction concepts.',
    tags: ['0 to 1', 'Mobile', 'UX Research', 'UI System', 'Shipped concept'],
    meta: 'BrainStation Capstone · Aug–Oct 2020 · UX/UI Designer + Researcher',
    accent: '#C14A2E',
  },
  {
    slug: 'sevenmentor',
    title: 'SevenMentor website redesign',
    outcome: '+11% satisfaction · −33% mobile bounce · ~Rs. 500K/yr admissions lift',
    description:
      'Metrics-led redesign of an education website using UX principles. Strongest proof of outcome in the portfolio — redesigned journeys, responsive patterns, and measured before/after impact.',
    tags: ['Redesign', 'Responsive', 'UX Strategy', 'Measured impact'],
    meta: 'SevenMentor, Pune · Feb 2019–Jan 2020 · Junior UI/UX Designer',
    accent: '#4A6C6F',
  },
  {
    slug: 'recruit-n-refer',
    title: 'Recruit N Refer — responsive hiring portal',
    outcome: 'From requirements to tested portal, shipped phase 1 with developers',
    description:
      'Wireframes and prototypes for a responsive web app from raw business requirements. Redesigned the portal experience, ran usability tests on new pages, and collaborated with developers to land phase one.',
    tags: ['Enterprise', 'Responsive Web', 'Prototyping', 'Usability Testing'],
    meta: 'Recruit N Refer, Toronto · Apr 2020+ · Junior UI/UX Designer',
    accent: '#7C5C3E',
  },
  {
    slug: 'adidas-hackathon',
    title: 'Adidas hackathon — 24-hour mobile concept',
    outcome: 'Winner · BrainStation × Adidas Canada',
    description:
      'High-energy sprint: prioritized a complete mobile product solution in 24 hours and pitched it to win. Proof of fast product thinking under pressure.',
    tags: ['Hackathon', 'Mobile', '0 to 1', 'Winner'],
    meta: 'Oct 2020 · Product Designer',
    accent: '#1C1917',
  },
  {
    slug: 'figo-friend',
    title: 'Figo Friend — debt, made navigable',
    outcome: 'Mobile concept for young professionals facing unexpected debt',
    description:
      'Financial-wellbeing concept (Scotiabank-adjacent) that makes a sensitive money problem calmer and clearer through mobile interaction design.',
    tags: ['Fintech', 'Mobile', 'Interaction Design'],
    meta: 'Sep 2020 · Product Designer',
    accent: '#3B5BFD',
  },
  {
    slug: 'sprint-range',
    title: 'Food-waste sprint + PatientsFirst + [24]7 AI',
    outcome: 'Research sprints, healthcare flows, and conversation design',
    description:
      'Supporting range: collaborative food-waste design sprint (research → testing), PatientsFirst healthcare task flows and prototypes, and multi-channel conversation design — chatbot, Messenger, and IVR for Ma & Pa Pizza.',
    tags: ['Design Sprint', 'Healthcare', 'Conversation Design', 'Research'],
    meta: 'BrainStation · Sprint + Unit work',
    accent: '#7D8C6F',
  },
];

/** Gallery images per project slug (relative paths under `public/`). */
export const projectGallery: Record<string, string[]> = {
  'moodofy': ['images/moodofy-homepage.png', 'images/moodofy-flows.png'],
  'sevenmentor': ['images/sevenmentor-1.png', 'images/sevenmentor-2.png'],
  'recruit-n-refer': ['images/recruit-1.png'],
  'adidas-hackathon': ['images/adidas-1.png', 'images/adidas-2.png'],
  'figo-friend': ['images/figo-1.png'],
  'sprint-range': ['images/moodofy-flows.png'],
};

export const experience = [
  {
    role: 'Senior Product Designer — CSA Group',
    period: 'Oct 2025–Present · Toronto',
    points: [
      'UX Lead for brand identity transformation, elevating brand perception and visibility',
      'Leading CSA Design System — framework and standards for cohesive org-wide design',
      'Led Standards Digital Transformation projects with user-centric, data-driven design',
      'Accessibility (WCAG) in interfaces; logo and identity updates with consistent business impact',
    ],
  },
  {
    role: 'Product Designer — CSA Group',
    period: 'Sep 2021–Present · Toronto',
    points: [
      'CSA Advantage mobile + desktop: UX/UI patterns for user-friendly, visually appealing flows',
      'Stakeholder collaboration to simplify user flows; exhaustive UX research, testing, market analysis',
      'Full design lifecycle: concepts to prototypes with cross-functional teams; user interviews, journeys, focus groups',
    ],
  },
  {
    role: 'Product Designer — Travel Discounters',
    period: 'Jan 2021–Aug 2021 · Toronto',
    points: [
      'User research boosted business by 80%; profit margin +~50% via product service updates',
      'Internal portal for sales agents; accessible patterns for senior audience; company design system',
    ],
  },
  {
    role: 'UI/UX Designer — Rafiki Digital',
    period: 'Oct 2020–Dec 2020 · Toronto',
    points: [
      'Defined UX strategy by scope and methodology with the product owner',
      'Set milestones and deliverables that tied business requirements to UX outcomes',
    ],
  },
  {
    role: 'UI/UX Designer — Recruit N Refer',
    period: 'Apr 2020–Oct 2020 · Toronto',
    points: [
      'Built wireframes + prototypes for a responsive portal from requirements',
      'Redesigned portal UX and ran usability tests; shipped phase 1 with developers',
    ],
  },
  {
    role: 'Product Designer — Upwork',
    period: 'Feb 2020–Oct 2020 · Remote',
    points: [
      '10+ projects for 5+ clients across web, mobile, and redesigns',
      'Figma, Sketch, InVision — client needs into online + offline media',
    ],
  },
  {
    role: 'Junior UI/UX Designer — SevenMentor',
    period: 'Feb 2018–Jan 2020 · Pune',
    points: [
      'Website redesign: +11% satisfaction, −33% mobile bounce, ~Rs. 500K/yr admissions',
    ],
  },
];

export const education = [
  'BrainStation — Diploma, UX Design · Toronto · 2020',
  'Udemy — The Complete App Design Course (UX, UI, Design Thinking) · 2020',
  'Udemy — Learn Figma, UI/UX Design Essential Training · 2020',
  'Udemy — Design Rules: Principles + Practices for Great UI Design · 2020',
  'SevenMentor — UI/UX Training · Pune · 2017–2018',
];

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const howIWork = [
  {
    number: '01',
    title: 'Turn ambiguity into a decision',
    description: 'The problem in one sentence everyone recognizes. The decisions in order, one at a time. A direction tangible enough to argue with.',
    details: [
      'Stakeholder workshops to align on the real problem',
      'Decision trees that make tradeoffs visible',
      'Prototypes that force clarity before commitment',
    ],
    icon: 'clarity',
  },
  {
    number: '02',
    title: 'Set standards other teams adopt',
    description: 'One design system across products. Quality checks written into the release process. Teams trained until UX was their own job.',
    details: [
      'CSA Design System — tokens, components, patterns',
      'Accessibility (WCAG 2.1) baked into every component',
      'Governance model for cross-team contribution',
    ],
    icon: 'system',
  },
  {
    number: '03',
    title: 'Own the design inside the team, not beside it',
    description: 'Learn the job before redesigning the tool. Engineering in the room from the first sketch. Change course when users prove the first idea wrong.',
    details: [
      'Embedded in agile squads — discovery through delivery',
      'Pair with developers on complex interactions',
      'Usability testing every sprint, not just at the end',
    ],
    icon: 'embedded',
  },
  {
    number: '04',
    title: 'Carry the direction into something that works',
    description: 'A working prototype in real code, in days. Engineers for leverage, not rescue. A build, kill, or park call made on evidence.',
    details: [
      'React/TypeScript prototypes for complex flows',
      'Figma → code handoff with zero ambiguity',
      'Measured rollout: analytics, A/B, user feedback',
    ],
    icon: 'build',
  },
];

export const designToBuild = [
  {
    year: '2018–2020',
    title: 'The handoff era',
    description: 'I designed the product. Somebody else built it. Then a specification, and months before anyone could see what survived the translation. The gap between thinking and making was wide.',
  },
  {
    year: '2020–2023',
    title: 'Closing the gap',
    description: 'The judgment didn\'t change. The distance between thinking and making did. I learned to try more directions before committing, put a working prototype in front of people in days, and build smaller products outright.',
  },
  {
    year: '2023–Now',
    title: 'Design = build',
    description: 'Deciding what is worth building is still the whole job. AI tools will build whatever you ask for — which makes asking for the right thing the entire game. Experience tells me which idea earns the effort and which quietly creates three new problems.',
  },
];

export type BuiltItem = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

export const builtEndToEnd: BuiltItem[] = [
  {
    title: 'CSA Advantage Platform',
    description: 'Mobile + desktop app for standards access. UX patterns, stakeholder flows, exhaustive research — designed and delivered with cross-functional teams.',
    tags: ['Product Design', 'Design System', 'Accessibility', 'WCAG 2.1'],
  },
  {
    title: 'CSA Design System',
    description: 'Org-wide framework: tokens, components, patterns, governance. Standards other teams adopt. Accessibility baked in, not bolted on.',
    tags: ['Design System', 'Governance', 'React', 'Figma'],
  },
  {
    title: 'Travel Discounters Portal',
    description: 'Internal sales agent portal + design system. User research boosted business 80%, profit margin +50%. Accessible patterns for senior audience.',
    tags: ['Enterprise', 'Design System', 'Research', 'Accessibility'],
  },
  {
    title: 'Moodofy',
    description: 'End-to-end capstone: research → mobile app concept → marketing site. International students, cultural adaptation, CBT-informed interventions.',
    tags: ['0 to 1', 'Mobile', 'UX Research', 'UI System'],
    image: 'images/moodofy-homepage.png',
  },
];

export const writing = [
  {
    title: 'Designing for accessibility: from checkbox to culture',
    description: 'How we embedded WCAG 2.1 into the CSA Design System so accessibility became the default, not a sprint task.',
    date: '2024',
    href: '#',
  },
  {
    title: 'The design system governance model that actually works',
    description: 'Cross-team contribution, versioning, and adoption metrics — lessons from scaling a system across a 100-year-old standards organization.',
    date: '2023',
    href: '#',
  },
  {
    title: 'When the prototype is the product',
    description: 'Why I build in React instead of Figma for complex flows, and how it changes the conversation with engineering and stakeholders.',
    date: '2023',
    href: '#',
  },
];
