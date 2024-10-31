import React from 'react';
import {useAllDocsData, useDocById} from '@docusaurus/plugin-content-docs/client';
import DocCard from '../DocCard';
import styles from './styles.module.css';

interface DocItem {
    id: string;
    title: string;
    description: string;
    path: string

}

export default function DocCategories(): JSX.Element {
    const allDocs = useAllDocsData();

    // 获取所有文档
    const defaultVersion = allDocs.default.versions[0];

    // 使用 useDoc 获取每个文档的完整信息
    const allDocItems = defaultVersion.docs.map(doc => {
        console.log("doc:", doc)
        const docData = useDocById(doc.id);
        return {
            id: docData.id,
            title: docData.title,
            description: docData.description,
            path: doc.path
        } as DocItem;
    });

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

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {weeklyDocs.map((doc) => (
                    <DocCard
                        key={doc.id}
                        title={doc.title}
                        to={doc.path}
                    />
                ))}
            </div>
        </div>
    );
}
