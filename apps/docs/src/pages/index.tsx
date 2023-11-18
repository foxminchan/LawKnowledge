import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A legal knowledge search and Q&A application based on Vietnam's Legal Code and legal document database ⚖️"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
