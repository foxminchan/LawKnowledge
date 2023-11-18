import clsx from 'clsx';
import React from 'react';

type DividerProps = {
  vertical?: boolean;
  spacer?: number;
};

export default function Divider({ vertical, spacer }: Readonly<DividerProps>) {
  return (
    <div
      className={clsx(
        'bg-japonica-600 h-px',
        vertical ? 'border-l bg-japonica-600 w-px h-12 ml-12 mr-12' : 'my-16',
        `m-${spacer * 4}`
      )}
    />
  );
}
