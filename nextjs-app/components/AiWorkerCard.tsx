import { FC } from 'react';
import Link from 'next/link';
import { AiWorker } from '../types/ai-worker';
import styles from '../styles/AiWorkerCard.module.css';

interface AiWorkerCardProps {
  aiWorker: AiWorker;
}

const AiWorkerCard: FC<AiWorkerCardProps> = ({ aiWorker }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{aiWorker.name}</h2>
      <p className={styles.description}>{aiWorker.description}</p>
      <ul className={styles.skills}>
        {aiWorker.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <ul className={styles.integrations}>
        {aiWorker.integrations.map((integration, index) => (
          <li key={index}>{integration}</li>
        ))}
      </ul>
      <p className={styles.prompt}>{aiWorker.basePrompt}</p>
      <Link href={`/ai-worker/${aiWorker.id}`}>
        <a className={styles.link}>View More</a>
      </Link>
    </div>
  );
};

export default AiWorkerCard;