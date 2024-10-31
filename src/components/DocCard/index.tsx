import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface DocCardProps {
    title: string;
    to: string;
    description?: string;
}

export default function DocCard({title, to, description}: DocCardProps): JSX.Element {
    return (
        <Link to={to} className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <span className={styles.folderIcon}>📁</span>
                    <div className={styles.textContent}>
                        <span className={styles.title}>{title}</span>

                    </div>
                </div>
            </div>
        </Link>
    );
}
