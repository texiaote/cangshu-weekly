import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  issueSidebar: [
    {
      type: 'category',
      label: '第 5 期',
      link: {
        type: 'doc',
        id: 'issue-5/index',
      },
      items: [
        'issue-5/article1',
        'issue-5/article2',
      ],
    },
    {
      type: 'category',
      label: '第 4 期',
      link: {
        type: 'doc',
        id: 'issue-4/index',
      },
      items: [
        'issue-4/article1',
        'issue-4/article2',
      ],
    },
  ],
};

export default sidebars;
