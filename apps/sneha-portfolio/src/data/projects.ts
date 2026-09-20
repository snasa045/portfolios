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
    presentation: {
      theme: 'calm',
      statement: 'A gentler first step.',
      decisionIndex: 3,
      reflectionIndex: 5,
    },
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
    presentation: {
      theme: 'graphic',
      statement: '24 hours to rethink the store.',
      decisionIndex: 2,
      reflectionIndex: 3,
    },
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
    presentation: {
      theme: 'editorial',
      statement: 'Designing for someone in trouble.',
      decisionIndex: 1,
      reflectionIndex: 3,
    },
  },
];

export const supportingProjects: SupportingProject[] = [
  {
    id: 'figo-friend',
    title: 'Figo Friend',
    blurb:
      'A chatbot that helps young professionals plan for the expenses they did not see coming.',
    timeframe: 'Scotiabank sprint · 2020',
    status: 'concept',
    role: 'Lead designer on the sprint team',
    context:
      'A four-day design sprint set by Scotiabank through BrainStation: pick a real money problem, get to a tested prototype, present back to the bank.',
    cover: {
      name: 'figo-cover',
      alt: 'Figo Friend concept screens shown on three phones — a chat interface, a savings goal, and a progress view',
      width: 2443,
      height: 1691,
    },
    sections: [
      {
        kind: 'text',
        heading: 'The problem we picked',
        body: [
          'Millennials in North America carry an average of $28,000 in student debt and $11,700 on credit cards, and 60% of them define financial success simply as having none of it. That framing mattered. The people we were designing for were not trying to get rich, they were trying to stop owing.',
          'Talking to young professionals sharpened it. Almost none of them used a financial planning app, and saving towards a distant milestone did not motivate them. What actually caused stress was the unplanned expense — the vet bill, the move, the thing that arrives with no warning. And when money got hard, they asked friends and family before they asked a bank.',
          'That gave us the question: how might we help young professionals prepare for large expenses, so that they can manage their debt?',
        ],
      },
      {
        kind: 'text',
        heading: 'Why a chatbot',
        body: [
          'We had three directions on the table — a chat bot, a savings goal tracker, and a visual money map. The research pointed at one of them. If young professionals trust friends and family over banks, the interface should feel like a friend rather than a portal, and the chatbot was the only one of the three that could carry that tone. You are chatting with someone, not filling in a bank form.',
          'We also chose to focus on predicting expenses rather than planning or saving, because prediction was the part nobody was doing for them.',
        ],
      },
      {
        kind: 'figure',
        heading: 'What one round of testing changed',
        figure: {
          name: 'figo-testing',
          alt: 'Three before-and-after comparisons from user testing: conversational chat replaced with a form, a fixed money map replaced with reorderable goal cards, and a thermometer replaced with a pie chart',
          caption: 'Six users, three changes — the user testing page from the sprint deck.',
          width: 1560,
          height: 1970,
        },
      },
      {
        kind: 'text',
        heading: 'Reading the results',
        body: [
          'We tested the wireframes with six people and changed three things. The conversational onboarding we were proud of turned out to be slow — users got frustrated answering one question at a time, so the bot started presenting a short form instead. The money map looked good but quietly dictated the order people should save in, so we swapped it for cards they could rearrange into their own priority. And the thermometer tracking progress became pie charts.',
          'Two of those were the same mistake wearing different clothes: we had designed something expressive where people wanted something direct.',
        ],
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'We checked the palette and type against WCAG AA contrast before the deck went out, which I would do again. What we did not do is test outside the sprint’s convenience sample — and six users found three problems, so a second round would almost certainly have found more.',
          'The bigger gap is that Figo Friend predicts expenses without ever being connected to real transaction data. As a four-day sprint artefact that is fine. As a product it is the whole hard part, and we did not touch it.',
        ],
      },
    ],
    outcomes: [
      {
        label: 'Presented to Scotiabank and BrainStation at the end of the sprint',
        kind: 'qualitative',
      },
      {
        value: '3',
        label: 'design changes made after one round of testing with six users',
        kind: 'result',
      },
      { label: 'Palette and type checked to WCAG AA contrast', kind: 'result' },
    ],
  },
  {
    id: 'lemon-aid',
    title: 'Lemon-Aid',
    blurb:
      'Team sprint on household food waste — track what is in the fridge, cook it before it turns.',
    timeframe: 'BrainStation sprint · Aug 2020',
    status: 'concept',
    role: 'Designer — ran the ideation session, built wireframes with the team',
    context:
      'A week-long remote team sprint at BrainStation on food waste in Canadian households. Five of us, working as "The Karaoke Challengers".',
    cover: {
      name: 'lemonaid-wireframes',
      alt: 'Four low-fidelity Lemon-Aid screens showing a fridge inventory sorted by expiry date and a recipe suggestion',
      width: 1858,
      height: 1132,
    },
    sections: [
      {
        kind: 'text',
        heading: 'The problem',
        body: [
          'Canada wastes roughly 40% of the food it produces — about six million tonnes of solid food waste in 2019 — and the largest single contributor is not the farm or the retailer. It is the household.',
          'The version of that we could actually design for is small and familiar. You buy food, it moves to the back of the fridge, you forget it is there, you throw it out.',
        ],
      },
      {
        kind: 'text',
        heading: 'How we picked an idea',
        body: [
          'We ran Crazy 8s, then did something I have kept doing since: everyone posted their sketches to a shared doc anonymously, and we voted before anyone knew whose was whose.',
          'It changes what gets picked. In any group where some people are louder or more senior, ideas collect votes partly because of who drew them. Stripping the names out meant the vote was about the sketch.',
        ],
      },
      {
        kind: 'figure',
        figure: {
          name: 'lemonaid-sketch',
          alt: 'Hand-drawn sketch of a pantry inventory screen, annotated with storage tabs, item name, quantity, storage unit, and expiry alert',
          caption:
            'My sketch from the ideation round. The structure survived into the wireframes almost unchanged.',
          width: 1392,
          height: 1400,
        },
        heading: 'From paper to Figma',
      },
      {
        kind: 'text',
        heading: 'The concept',
        body: [
          'Lemon-Aid keeps an inventory of what is in your fridge, freezer, and dry pantry, sorted by how many days each item has left. When something is about to turn, it suggests a recipe that uses it.',
          'The point was to make the invisible visible. Food does not get wasted because people want to waste it — it gets wasted because nobody can see it.',
        ],
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'Lemon-Aid stops at wireframes. We never tested whether people would keep an inventory up to date, and that is the assumption the entire product rests on. Logging groceries is exactly the kind of chore that gets abandoned in week two.',
          'If I picked this up again I would start there: find the smallest amount of manual input that still makes the app worth opening.',
        ],
      },
    ],
    outcomes: [
      { label: 'Low-fidelity prototype and concept presented at the end of the sprint', kind: 'qualitative' },
      {
        label: 'Anonymous sketch voting — a facilitation habit I have carried into later teams',
        kind: 'qualitative',
      },
    ],
  },
  {
    id: 'patients-first',
    title: 'PatientsFirst',
    blurb:
      'Solo research into Canadian clinic and ER waits, and what the interviews said that the assumptions did not.',
    timeframe: 'BrainStation · Aug 2020',
    status: 'prototype',
    role: 'Solo — research, synthesis, and prototype',
    context:
      'A self-directed project on why Canadians wait so long to see a doctor, and which part of that is actually designable.',
    cover: {
      name: 'patientsfirst-insights',
      alt: 'Affinity board of interview insights grouped into behaviour, motivation, and pain columns',
      caption: 'Interview insights sorted by type, then clustered into three themes.',
      width: 1371,
      height: 910,
    },
    sections: [
      {
        kind: 'text',
        heading: 'Starting from assumptions',
        body: [
          'I began with four assumptions about why primary care is frustrating, and the secondary research seemed to back them up. Patients wait around 45 minutes at a clinic and closer to three hours in an emergency room, and a newcomer to Canada can spend up to a year finding a family doctor who is accepting patients.',
          'Assumptions that already feel true are the dangerous kind, so the interviews were an attempt to break them rather than confirm them.',
        ],
      },
      {
        kind: 'text',
        heading: 'What held up, and what did not',
        body: [
          'Three themes survived contact with real people: waiting time at the clinic, waiting time in the ER, and the difficulty of finding a family doctor at all. Participants described 45 to 90 minutes for an X-ray, three hours or more in emergency, and calling down a list of practices where nobody was taking new patients.',
          'What I had not assumed was how positively people spoke about the care itself once they reached it. The doctor explained things in detail. They were helpful and knowledgeable. Nobody complained about the consultation.',
          'That reframed the project. The problem is not the quality of care, it is everything that happens before the door opens — which makes it a scheduling and access problem, not a clinical one.',
        ],
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'The sample was small and drawn from people I could reach, which skews young, urban, and comfortable with technology. The people worst affected by long waits are often none of those things.',
          'I also moved to prototype faster than the research justified. The finding about access rather than care quality deserved another round of interviews before I started drawing screens.',
        ],
      },
    ],
    outcomes: [
      { label: 'Hypothesis tested against interviews rather than assumed', kind: 'qualitative' },
      { label: 'Problem reframed from care quality to access', kind: 'qualitative' },
    ],
  },
  {
    id: 'conversation-design',
    title: '[24]7.ai conversation design',
    blurb:
      'One pizza order, three channels — chatbot, Messenger, and phone IVR — each with a way out at every step.',
    timeframe: 'BrainStation challenge · 2020',
    status: 'concept',
    role: 'Conversation designer',
    context:
      'A challenge set by [24]7.ai: design the same ordering task across three very different channels for a fictional client, Ma & Pa Pizza.',
    cover: {
      name: 'conversation-flow',
      alt: 'Flowchart of a pizza ordering chatbot, running from greeting through pizza selection and payment to confirmation, with cancel and go-back paths drawn',
      width: 1600,
      height: 1007,
    },
    sections: [
      {
        kind: 'text',
        heading: 'The same task, three ways',
        body: [
          'Ordering a pizza sounds like one flow until you have to write it three times. A chatbot can show a menu. Facebook Messenger can show one too, but it lives inside somebody else’s interface and inherits its conventions. An IVR has no screen at all, so every option has to be spoken, numbered, and held in the caller’s head.',
          'I built a flowchart and a full scripted dialogue for each of the three.',
        ],
      },
      {
        kind: 'figure',
        heading: 'Where the channels diverge',
        figure: {
          name: 'conversation-ivr',
          alt: 'IVR flowchart with numbered menu options, authentication by the last four digits of a phone number, and spoken order summaries',
          caption:
            'The IVR flow. Every option is numbered because there is no screen to point at, and a caller whose number is not recognised gets a text link rather than a dead end.',
          width: 1600,
          height: 917,
        },
      },
      {
        kind: 'text',
        heading: 'Two rules I held to',
        body: [
          'There is always a way out. Every node offers "press 7 or say go back" and "press 9 or say talk to an agent". On a screen a user can simply leave. On a phone call, someone who gets stuck with no exit hangs up, and you have lost both the order and the customer.',
          'And the system never guesses when someone corrects themselves. I scripted the case where a caller changes their mind mid-sentence — "two, oh sorry make it five, no wait, two only" — and the answer is not to pick one. It apologises and asks the single question again. Guessing right saves a second; guessing wrong puts the wrong food in someone’s order.',
        ],
      },
      {
        kind: 'text',
        heading: 'What I would change',
        body: [
          'None of this was tested with a real caller, and voice is where that matters most. Dialogue that reads fine on the page can be unbearable to listen to — too many words before the options arrive, prompts that are pleasant the first time and grating the fourth.',
          'The next step is the cheap one: read the IVR script aloud to someone who has never seen it, and count where they hesitate.',
        ],
      },
    ],
    outcomes: [
      {
        label:
          'Three complete flows — chatbot, Facebook Messenger, and IVR — with scripted dialogue for each',
        kind: 'qualitative',
      },
      { label: 'Consistent escape and agent handoff at every step', kind: 'qualitative' },
    ],
  },
];

export const projectBySlug = (slug: string) =>
  featuredProjects.find((p) => p.slug === slug);
