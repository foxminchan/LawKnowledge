/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import React from 'react';
import Divider from '../Divider';
import Link from '@docusaurus/Link';

export default function WhatIs() {
  return (
    <div className="bg-japonica-300 pt-[30px] pb-[5px]">
      <section className="max-w-[60%] mx-auto text-center">
        <h1>What is Law Knowledge?</h1>
        <p>
          Law Knowledge is a website that provides information on laws and
          regulations in Vietnam. It is a legal knowledge search and Q&A based
          on Vietnam's Legal Code and legal document database.
        </p>
        <Link
          to="https://github.com/foxminchan/LawKnowledge"
          className="text-japonica-500 hover:text-japonica-600"
          target="_blank"
        >
          Explore Github Repository
        </Link>
        <Divider />
      </section>
    </div>
  );
}
