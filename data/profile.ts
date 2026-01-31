// Timeline: Work experience and education
export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

export const timeline: TimelineItem[] = [
  {
    year: '2022 - Present',
    title: 'Software Engineer',
    organization: 'Microsoft',
    description: 'Azure Core - Building cloud infrastructure at scale.',
    type: 'work',
  },
  {
    year: 'Jan - June 2022',
    title: 'Software Engineering Intern',
    organization: 'Amazon',
    description: 'FireTV - Worked on streaming and media experiences.',
    type: 'work',
  },
  {
    year: '2018 - 2022',
    title: 'Bachelor of Engineering',
    organization: 'BITS Pilani',
    description: 'Computer Science',
    type: 'education',
  },
];

// Hobby Projects
export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A cool side project exploring new technologies',
    link: 'https://github.com/surajreddykarra',
  },
  {
    title: 'Project Two',
    description: 'An open source contribution or personal tool',
    link: 'https://github.com/surajreddykarra',
  },
  {
    title: 'Project Three',
    description: 'Something fun built over a weekend',
    link: 'https://github.com/surajreddykarra',
  },
];

// Social Links
export interface Social {
  name: string;
  url: string;
}

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/surajreddykarra',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/surajreddykarra',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jarusionn',
  },
];

// Quick Facts
export const quickFacts: string[] = [
  'Currently exploring the world of AI and machine learning',
  'Big fan of clean code and simple solutions',
  'Believe that the best documentation is the one you actually read',
  'Coffee enthusiast (okay, maybe a bit more than enthusiast)',
];
