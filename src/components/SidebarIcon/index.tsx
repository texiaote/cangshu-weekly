import React from 'react';
import styles from './styles.module.css';

export default function SidebarIcon({
  icon,
  title,
}: {
  icon: string;
  title: string;
}): JSX.Element {
  return (
    <span className={styles.sidebarIcon}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </span>
  );
} 