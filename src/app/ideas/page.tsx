import styles from './page.module.css';

export const metadata = {
  title: 'Ideas | Suraj Karra',
  description: 'Random sparks and shower thoughts',
};

const ideas = [
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

const statusLabels: Record<string, string> = {
  exploring: 'Actively Exploring',
  thinking: 'Still Thinking',
  parked: 'Parked',
};

const statusClasses: Record<string, string> = {
  exploring: styles.statusExploring,
  thinking: styles.statusThinking,
  parked: styles.statusParked,
};

export default function IdeasPage() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Ideas</h1>
        <p className={styles.pageSubtitle}>
          Random sparks and shower thoughts
        </p>
      </header>

      <div className={styles.intro}>
        <p>
          This is my idea parking lot—a collection of random thoughts, project ideas, 
          and shower epiphanies that may or may not go anywhere. Some are half-baked, 
          some are probably terrible, and some might just be crazy enough to work.
        </p>
      </div>

      <div className={styles.ideasGrid}>
        {ideas.map((idea) => (
          <div key={idea.id} className={styles.ideaCard}>
            <div className={styles.ideaHeader}>
              <div>
                <h3 className={styles.ideaTitle}>{idea.title}</h3>
                <span className={styles.ideaCategory}>{idea.category}</span>
              </div>
            </div>
            <div className={styles.ideaContent}>
              <p>{idea.content}</p>
            </div>
            <div className={styles.ideaStatus}>
              <span className={`${styles.statusBadge} ${statusClasses[idea.status]}`}>
                {statusLabels[idea.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
