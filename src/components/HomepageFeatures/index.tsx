import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Img: React.ComponentType<React.ComponentProps<'image'>>;
  Img: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Frontend',
    Img: require('@site/static/img/home-page/frontend.png').default,
    description: (
      <>
        Angular, Single-spa
      </>
    ),
  },
  {
    title: 'Backend',
    Img: require('@site/static/img/home-page/backend.png').default,
    description: (
      <ul>
        <li className="text-align-left">Language : Java, Python</li>
        <li className="text-align-left">Framework : Spring Boot, Spring Kafka, Spring Cloud, Spring Data, Spring Security</li>
        <li className="text-align-left">Database : PostgreSQL, Oracle, Essbase</li>
        <li className="text-align-left">Software : Camunda, Prometheus</li>
        <li className="text-align-left">Tools : GitHub, Maven, Kibana, Grafana, Talend</li>
      </ul>
      // <>
      //   Java, Spring-boot, Camunda, PostgreSQL, Oracle, Essbase, Active pivot
      // </>
    ),
  },
  {
    title: 'DevOps',
    Img: require('@site/static/img/home-page/devops.png').default,
    description: (
      <>
        Microsoft Azure, Jenkins, k8s, Argo CD
      </>
        // <ul>
        //   <li>Microsoft Azure :</li>
        //   <li>Jenkins :</li>
        // </ul>
    ),
  }
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Img className={styles.featureSvg} role="img" />*/}
        <img src={Img} role="img"  alt={'test'}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
