import React from 'react';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import DocCard from '../DocCard';
import styles from './styles.module.css';

interface DocItem {
  id: string;
  title: string;
  path: string;
  frontMatter?: {
    publishDate?: string;
  };
}

export default function DocCategories(): JSX.Element {
  const allDocs = useAllDocsData();

  console.log("allDocs", allDocs);
  // 获取所有文档
  const defaultVersion = allDocs.default.versions[0];
  const allDocItems = Object.values(defaultVersion.docs) as DocItem[];

  console.log("allDocItems", allDocItems);

  // 过滤并排序周刊文档
  const weeklyDocs = allDocItems
    .filter(doc => {
      return doc.id.includes('仓鼠周刊');
    })
    .sort((a, b) => {
      // 从标题中提取期数进行排序
      const getIssueNumber = (title: string) => {
        const match = title.match(/第\s*(\d+)\s*期/);
        return match ? parseInt(match[1]) : 0;
      };
      return getIssueNumber(b.id) - getIssueNumber(a.id);
    });





  console.log("weeklyDocs", weeklyDocs)

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {weeklyDocs.map((doc) => (
          <DocCard
            key={doc.id}
            title={doc.id}
            to={doc.path}
            publishDate={doc.frontMatter?.publishDate}
          />
        ))}
      </div>
    </div>
  );
}
