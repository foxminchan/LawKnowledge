/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import React from 'react';
import Layout from '@theme/Layout';
import WhatIs from '../components/WhatIsSection';
import TopicSection from '../components/TopicSection';
import TechSection from '../components/TechStackSection';
import HomepageHeader from '../components/HomepageHeader';
import SponorSection from '../components/SponorsAndOrganization';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DeveloperCommunitySection from '../components/DeveloperCommunity';

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
        <WhatIs />
        <TopicSection />
        <TechSection />
        <hr className="bg-japonica-600" />
        <SponorSection />
        <DeveloperCommunitySection />
      </main>
    </Layout>
  );
}
