import React from 'react';

type FeatureItem = {
  id: number;
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    id: 1,
    title: 'Knowledge Search',
    img: require('@site/static/img/search.png').default,
    description: (
      <>
        Knowledge search and Q&A application based on Vietnam&apos;s legal
        document database ⚖️
      </>
    ),
  },
  {
    id: 2,
    title: 'Lawyer Q&A',
    img: require('@site/static/img/lawyer.png').default,
    description: (
      <>
        A platform for lawyers to ask and answer questions related to legal
        knowledge 🤓
      </>
    ),
  },
  {
    id: 3,
    title: 'Legal Document Management',
    img: require('@site/static/img/law-book.png').default,
    description: <>A platform for lawyers to manage their legal documents 📚</>,
  },
];

function Feature(feature: Readonly<FeatureItem>) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <img
          loading="lazy"
          src={feature.img}
          alt={feature.title}
          className="h-[200px] w-[200px] transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 duration-300"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="flex items-center w-full py-9">
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
