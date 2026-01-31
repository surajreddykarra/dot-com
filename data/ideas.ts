// Ideas data
export interface Idea {
  id: number;
  title: string;
  category: string;
  status: 'exploring' | 'thinking' | 'parked';
  content: string;
}

export const ideas: Idea[] = [
  {
    id: 1,
    title: 'AI-Powered Code Review Bot',
    category: 'Side Project',
    status: 'exploring',
    content: `What if we had a GitHub bot that not only reviews code for bugs but also 
    suggests architectural improvements based on the patterns it sees across your 
    entire codebase? It could learn from your team's coding style and become 
    increasingly helpful over time.`,
  },
  {
    id: 2,
    title: 'The Infinite Bookshelf Problem',
    category: 'Shower Thought',
    status: 'thinking',
    content: `We have infinite digital storage but finite attention. The real 
    challenge isn't storing information anymore—it's creating better filters 
    for what deserves our limited cognitive bandwidth. Maybe the future of 
    knowledge management is about intelligent forgetting.`,
  },
  {
    id: 3,
    title: 'Learn Programming Through Games',
    category: 'Education',
    status: 'exploring',
    content: `A roguelike game where spells are actual code snippets. As you 
    progress, the spells get more complex (functions, classes, algorithms). 
    Debug your spells to make them more powerful. Could make learning 
    programming actually addictive.`,
  },
  {
    id: 4,
    title: 'Digital Garden vs Blog',
    category: 'Meta',
    status: 'thinking',
    content: `Blogs feel like finished products. What if personal websites were 
    more like gardens—with seedlings (rough ideas), growing plants (work in progress), 
    and mature trees (polished content)? Visitors could watch ideas evolve over time.`,
  },
  {
    id: 5,
    title: 'Caffeine Optimization Algorithm',
    category: 'Life Hack',
    status: 'parked',
    content: `Track coffee intake, sleep quality, and productivity metrics. 
    Use the data to find the optimal caffeine schedule. When should you have 
    that first cup? Is the afternoon coffee helping or hurting? 
    Data-driven caffeination.`,
  },
  {
    id: 6,
    title: 'Prediction Markets for Personal Goals',
    category: 'Side Project',
    status: 'thinking',
    content: `What if you could bet on your own goals? Set a goal, put money on it, 
    and friends/family can bet for or against you. Creates accountability and 
    makes achieving goals financially rewarding beyond just the achievement itself.`,
  },
];

// Status display configuration
export const statusLabels: Record<string, string> = {
  exploring: 'Actively Exploring',
  thinking: 'Still Thinking',
  parked: 'Parked',
};
