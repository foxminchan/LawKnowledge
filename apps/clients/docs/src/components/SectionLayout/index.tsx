/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import clsx from 'clsx';
import React, { ReactNode } from 'react';

type SectionLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string[];
  titleClassName?: string[];
};

export default function SectionLayout(props: Readonly<SectionLayoutProps>) {
  return (
    <section className={clsx('w-full py-[40px] px-[10px]', ...props.className)}>
      <div className="container">
        <h2 className={clsx('p-[10px] text-center', ...props.titleClassName)}>
          {props.title}
        </h2>
        {props.description && (
          <p className="whitespace-pre-wrap text--center">
            {props.description}
          </p>
        )}
        <div className="mt-[30px]">{props.children}</div>
      </div>
    </section>
  );
}
