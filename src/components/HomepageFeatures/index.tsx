import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '精选优质内容',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每周精心筛选科技圈最具价值的内容，包括开源项目、技术博客、科技新闻等。
        让您在纷繁的信息海洋中，不错过任何重要资讯。
      </>
    ),
  },
  {
    title: 'AI 前沿追踪',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        深度关注 AI 领域的最新突破与应用，从 ChatGPT 到开源模型，
        从论文到实践，带您把握 AI 技术发展的脉搏。
      </>
    ),
  },
  {
    title: '持续学习成长',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        精选高质量学习资源，包括视频教程、技术文档、实战项目等。
        每周为您提供新的学习灵感，助力职业发展。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
