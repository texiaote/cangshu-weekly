import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '仓鼠周刊',
    tagline: '每周精选科技资讯、技术博客、AI 前沿、精品教程等优质内容',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // 控制哪些页面显示侧边栏
                    async sidebarItemsGenerator({
                                                    defaultSidebarItemsGenerator,
                                                    ...args
                                                }) {
                        const sidebarItems = await defaultSidebarItemsGenerator(args);

                        // 其他页面保持原有的侧边栏项目，但反转顺序
                        return sidebarItems.reverse().filter((item) => item.id != 'guide');
                    },
                    // 启用 MDX
                    remarkPlugins: [],
                    rehypePlugins: [],
                    // 添加这一行来支持 .mdx 文件
                    exclude: [
                        '**/_*.{js,jsx,ts,tsx,md,mdx}',
                        '**/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**'
                    ]
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '仓鼠周刊',
            logo: {
                alt: '仓鼠周刊Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: '/docs',
                    position: 'left',
                    label: '周刊',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} 仓鼠周刊. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
        markdown: {
            mermaid: true,
            mdx1Compat: {
                comments: true,
                admonitions: true,
                headingIds: true,
            },
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
