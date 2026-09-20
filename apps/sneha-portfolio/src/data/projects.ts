import type { Project, SupportingProject } from '../types/portfolio';

export { assetUrl } from './portfolio';

export const featuredProjects: Project[] = [
  {
    slug: 'moodofy',
    title: 'Moodofy',
    summary:
      'A mobile app helping international students recognise and act on low moods, designed from secondary research through to a tested prototype and marketing site.',
    role: 'UX/UI Designer and Researcher',
    team: 'Solo, with cohort critique',
    timeframe: 'Aug–Oct 2020 · 10 weeks',
    status: 'capstone',
    tags: ['0 to 1', 'Mobile', 'Research', 'UI system'],
    cover: {
      name: 'moodofy-cover',
      alt: 'Moodofy marketing illustration: a phone showing the app’s splash screen beside a standing figure',
      width: 2618,
      height: 1730,
    },
    sections: [
      {
        kind: 'text',
        heading: 'The problem',
        body: [
          'International students arrive with the practical problems of moving countries and, underneath those, a quieter one: the isolation of having no established support network in a new place.',
          'Existing mental-health apps assumed a user who already knew they needed help and could name what they were feeling. That is a high bar for someone who has not yet admitted to themselves that they are struggling.',
        ],
      },
      {
        kind: 'text',
        heading: 'Research and strategy',
        body: [
          'I began with secondary research into student mental health, cost-of-living pressure, and the cultural barriers that keep people from seeking support. That shaped a set of hypotheses about where an app could realistically help.',
          'The strongest signal was that the first interaction had to cost almost nothing. Anything resembling an assessment or intake form would lose the people the product most needed to reach.',
        ],
      },
      {
        kind: 'figure',
        heading: 'Reaching a therapist',
        figure: {
          name: 'moodofy-flows',
          alt: 'Moodofy chat screen with a form for preferred name, phone number, and what the user is going through, above a “Let’s chat” button',
          width: 1242,
          height: 2688,
          caption:
            'The assistance path asks for three fields and nothing more. Anything longer is another reason to close the app.',
        },
      },
      {
        kind: 'text',
        heading: 'The key decision',
        body: [
          'I made the opening screen a single question — how are you feeling today? — answered by tapping one of six words. No account, no scale, no questionnaire.',
          'Everything else in the product hangs off that answer. Choosing a low mood surfaces assistance; choosing a positive one surfaces community and content. One tap does the routing that an intake form would otherwise demand.',
        ],
      },
      {
        kind: 'figure',
        figure: {
          name: 'moodofy-homepage',
          alt: 'Moodofy home screen: the question “How are you feeling today?” above six mood options — Calm, Anxious, Depressed, Happy, Healthy, Energetic — followed by an assistance banner and article cards',
          width: 1242,
          height: 4320,
          caption:
            'The whole home screen. Six words carry the routing decision that an intake form would otherwise ask for.',
        },
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'The prototype was validated with cohort peers rather than international students themselves. The core interaction tested well, but the content and tone assumptions really needed the actual audience, and a longer project would have started there.',
        ],
      },
    ],
    outcomes: [
      {
        label: 'Delivered a tested mobile prototype and marketing site in a 10-week cycle',
        kind: 'qualitative',
      },
      {
        label: 'Reduced the first interaction to a single tap, removing the intake barrier',
        kind: 'qualitative',
      },
    ],
    seoDescription:
      'Moodofy — a mobile app concept supporting international students through low moods. Research, task flows, and UI by Sneha Jadhav.',
  },
  {
    slug: 'adidas-hackathon',
    title: 'Adidas — bringing the store to you',
    summary:
      'A virtual-store concept for Adidas, scoped, researched, designed, and pitched in 24 hours at a BrainStation × Adidas Canada hackathon during the first year of COVID.',
    role: 'Product Designer',
    team: 'Small cross-functional hackathon team',
    timeframe: 'Oct 2020 · 24 hours',
    status: 'concept',
    tags: ['Hackathon', 'Retail', 'Mobile', '0 to 1'],
    cover: {
      name: 'adidas-1',
      alt: 'Adidas sustainability research board covering recycled polyester, Parley for the Oceans, plastic-free stores, and climate neutrality targets',
      width: 2876,
      height: 1626,
    },
    sections: [
      {
        kind: 'text',
        heading: 'The question',
        body: [
          'Stores were shut or half-empty, and apparel is a category people want to see and try before buying. We framed the challenge as: how might we increase digital apparel sales by using current and future digital trends, so that the brand becomes a pioneer in digital retail technology in the COVID-19 era?',
        ],
      },
      {
        kind: 'text',
        heading: 'Understanding the brand first',
        body: [
          'Before designing anything we mapped what Adidas had already committed to publicly — recycled polyester across the range, Parley for the Oceans, plastic-free stores, climate neutrality. The concept needed to extend that position rather than contradict it.',
        ],
      },
      {
        kind: 'text',
        heading: 'The concept',
        body: [
          'Rather than another product grid, we designed a virtual store — bringing the shop floor to the customer instead of asking them to simulate one in their head from flat photographs.',
          'With one day on the clock, the discipline was deciding what not to build. We took a single journey from research through to a responsive prototype rather than sketching a whole product shallowly.',
        ],
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'A 24-hour concept is a pitch, not a validated product. The survey data we gathered was fast and small, and the virtual-store idea was never tested against the cost and effort it would take to build.',
        ],
      },
    ],
    outcomes: [
      { label: 'Winning entry, BrainStation × Adidas Canada', kind: 'result' },
      {
        label: 'Research, persona, ideation, and responsive prototype delivered within 24 hours',
        kind: 'qualitative',
      },
    ],
    seoDescription:
      'Adidas 24-hour hackathon virtual-store concept by Sneha Jadhav — winning entry at BrainStation × Adidas Canada.',
  },
  {
    slug: 'rafiki-phica',
    title: 'PHICA — a consultancy site for businesses in trouble',
    summary:
      'Marketing site for a Paris consultancy helping small and mid-sized businesses through the digital transition. Persona-led, with three layout directions explored before committing.',
    role: 'UI/UX Designer',
    team: 'With the product owner at Rafiki Digital',
    timeframe: 'Oct–Dec 2020 · 3 months',
    status: 'prototype',
    tags: ['B2B', 'Marketing site', 'UX strategy', 'Personas'],
    cover: {
      name: 'rafiki-persona',
      alt: 'Persona for Charles Duchamps, a 42-year-old restaurant owner in Paris, listing his bio, mindset, pain points, hesitations, and needs',
      width: 3444,
      height: 1839,
    },
    sections: [
      {
        kind: 'text',
        heading: 'Context',
        body: [
          'PHICA is a Paris consultancy whose pitch is l’intelligence collective au service de votre entreprise — collective intelligence in service of your business. Their clients are small and mid-sized French companies struggling with the demands of the digital era.',
          'Rafiki Digital brought me in to define the UX strategy for their marketing site: which methods suited the questions we actually had, and what the milestones for deliverables needed to be.',
        ],
      },
      {
        kind: 'text',
        heading: 'Who the site is really for',
        body: [
          'The persona work mattered more than usual here. A consultancy site is easy to write for an imagined confident executive comparing vendors. The actual visitor is nothing like that.',
          'Charles is 42, runs a restaurant, and is in trouble. He is anxious, frustrated, and embarrassed. His questions are not about service tiers — they are should I sell my company, should I get help, from who, and how. What he needs first is reassurance that it is not too late, and a guarantee of confidentiality.',
          'That reframed the brief. The site’s job is not to sell expertise. It is to make someone in a bad position feel safe enough to make contact.',
        ],
      },
      {
        kind: 'figure',
        heading: 'Three directions',
        figure: {
          name: 'rafiki-journey',
          alt: 'Three wireframe layout versions of the PHICA marketing site shown side by side, with different hero, parallax, and content arrangements',
          width: 5358,
          height: 5316,
          caption:
            'Three full-page layouts explored before committing — differing in how early the hero gives way to reassurance, and how much visual weight the imagery carries.',
        },
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'The three directions were evaluated with the product owner rather than with anyone resembling Charles. The persona shaped the layouts, but it never got to test them, and that is the step I would insist on now.',
        ],
      },
    ],
    outcomes: [
      { label: 'Defined UX strategy, methodology, and delivery milestones', kind: 'qualitative' },
      { label: 'Reframed the brief around a visitor in crisis rather than a buyer comparing vendors', kind: 'qualitative' },
      { label: 'Three layout directions explored and narrowed with the product owner', kind: 'qualitative' },
    ],
    seoDescription:
      'PHICA — persona-led marketing site design for a Paris consultancy serving small businesses, by Sneha Jadhav.',
  },
];

export const supportingProjects: SupportingProject[] = [
  {
    title: 'Figo Friend',
    blurb:
      'Mobile concept making unexpected debt calmer and more navigable for young professionals.',
    timeframe: 'Sep 2020',
    status: 'concept',
  },
  {
    title: 'Food-waste design sprint',
    blurb: 'Collaborative sprint from research through to tested concept.',
    timeframe: 'BrainStation · 2020',
    status: 'concept',
  },
  {
    title: 'PatientsFirst',
    blurb: 'Healthcare task flows and prototypes.',
    timeframe: 'BrainStation · 2020',
    status: 'prototype',
  },
  {
    title: '[24]7 AI challenge',
    blurb: 'Multi-channel conversation design across chatbot, Messenger, and IVR.',
    timeframe: 'BrainStation · 2020',
    status: 'concept',
  },
];

export const projectBySlug = (slug: string) =>
  featuredProjects.find((p) => p.slug === slug);
