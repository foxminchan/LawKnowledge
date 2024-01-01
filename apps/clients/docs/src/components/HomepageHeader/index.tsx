/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="relative p-16 overflow-hidden text-center bg-primary sm:p-8 bg-japonica-300">
      <div className="container mx-auto">
        <img
          loading="lazy"
          width="250px"
          height="250px"
          alt="law knowledge logo"
          className="w-62 h-62 animate-jack-in-the-box"
          src={useBaseUrl('/img/logo.svg')}
        />
        <h1 className="text-4xl font-bold">{siteConfig.title}</h1>
        <p className="text-xl">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center">
          <Link
            className="px-4 py-2 font-bold text-white border rounded-full bg-japonica-500 hover:bg-japonica-400 hover:text-slate-200 hover:no-underline"
            to="/docs/intro"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}
