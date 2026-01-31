import { ideas, statusLabels } from '@/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Ideas | Suraj Karra',
  description: 'Random sparks and shower thoughts',
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
        {ideas.map((idea, index) => (
          <div 
            key={idea.id} 
            className={styles.ideaCard}
            style={{ '--card-index': index } as React.CSSProperties}
          >
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
