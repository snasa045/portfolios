export const profile = {
  name: 'Sneha',
  role: 'Designer & Creative Developer',
  tagline: 'I craft clean, modern web experiences with a focus on detail and delight.',
  location: 'India',
  email: 'hello@sneha.portfolio',
  socials: [
    { label: 'GitHub', href: 'https://github.com/snasa045' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' },
  ],
};

export const about = {
  heading: 'About me',
  body: [
    'Hi! I’m Sneha. I love turning ideas into polished, user-friendly websites.',
    'This starter is data-driven — edit src/data/portfolio.ts to update the whole site without touching components.',
  ],
};

export const skills = [
  'React',
  'TypeScript',
  'CSS / Responsive Design',
  'UI / UX Basics',
  'Figma',
  'Git & GitHub',
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Portfolio Starter',
    description: 'Modern, fast portfolio scaffold with React + Vite.',
    tags: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Project Two',
    description: 'Replace with Sneha’s real project — what it does, outcome.',
    tags: ['Design', 'Frontend'],
  },
  {
    title: 'Project Three',
    description: 'Replace with Sneha’s real project — what it does, outcome.',
    tags: ['UI', 'Case Study'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
