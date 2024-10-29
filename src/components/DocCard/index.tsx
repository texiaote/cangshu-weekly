import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface DocCardProps {
  title: string;
  to: string;
  count: number;
}

export default function DocCard({ title, to, count }: DocCardProps): JSX.Element {
  return (
    <Link to={to} className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <span className={styles.folderIcon}>📁</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.itemCount}>{count} items</div>
      </div>
    </Link>
  );
} 