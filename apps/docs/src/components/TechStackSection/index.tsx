import React from 'react';
import Link from '@docusaurus/Link';
import SectionLayout from '../SectionLayout';

type TechItem = {
  id: number;
  name?: string;
  url: string;
  logo: string;
};

const TechList: TechItem[] = [
  {
    id: 1,
    url: 'https://react.dev/',
    logo: require('../../../static/img/tech/reactjs.png').default,
  },
  {
    id: 2,
    url: 'https://nestjs.com/',
    logo: require('../../../static/img/tech/nest.png').default,
  },
  {
    id: 3,
    url: 'https://fastapi.tiangolo.com/',
    logo: require('../../../static/img/tech/fastapi.png').default,
  },
  {
    id: 4,
    url: 'https://haystack.deepset.ai/',
    logo: require('../../../static/img/tech/haystack.png').default,
  },
];

export default function TechSection() {
  return (
    <SectionLayout
      title="Powered by"
      className={['bg-white']}
      titleClassName={['text-[#444950]']}
    >
      <div
        className="row"
        style={{
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        {TechList.map((props) => (
          <div className="col col--2" key={props.id}>
            <div className="col-demo text--center">
              <div className="min-h-[70px] items-center flex justify-center">
                <Link href={props.url}>
                  <img
                    loading="lazy"
                    src={props.logo}
                    className="w-[70%]"
                    alt={props.name}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
