import React from 'react';
import Link from '@docusaurus/Link';
import SectionLayout from '../SectionLayout';

export default function DeveloperCommunitySection() {
  return (
    <SectionLayout
      title="Join our developer community"
      description={`Open-source is in the 💘 of Hutech.\nFollow us ⭐ us on GitHub, and join our developer security community 🗣️ on Telegram!`}
      className={['py-20', 'text-black', 'bg-japonica-300']}
      titleClassName={['text-[#444950]']}
    >
      <div className="flex flex-wrap justify-center gap-10">
        <Link
          href="https://github.com/foxminchan/LawKnowledge"
          className="button button--primary button--outline"
          target="_blank"
        >
          Star on GitHub
        </Link>
        <Link
          href="https://t.me/+bz74heXQgBwwOWRl"
          className="button button--primary button--outline"
          target="_blank"
        >
          Join Telegram
        </Link>
      </div>
    </SectionLayout>
  );
}
