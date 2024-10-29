import React from 'react';
import DocCard from '../DocCard';
import styles from './styles.module.css';

export default function DocCategories(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <DocCard
          title="仓鼠周刊（第 4 期）"
          to="/docs/issue-4"
          count={2}
        />
        <DocCard
          title="仓鼠周刊（第 5 期）"
          to="/docs/issue-5"
          count={2}
        />
      </div>
    </div>
  );
} 