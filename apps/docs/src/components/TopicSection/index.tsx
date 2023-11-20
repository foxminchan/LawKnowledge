import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';

type TopicProps = {
  title: string;
  image: string;
  btnText: string;
  btnLink: string;
  direction?: string;
  children?: React.ReactNode;
};

const TopicProp: TopicProps = {
  title: 'Topic Details',
  image: '/LawKnowledge/img/topic.png',
  btnText: 'Read More',
  btnLink:
    'https://vfossa.vn/tin-tuc/de-thi-phan-mem-nguon-mo-olp-2023-688.html',
  direction: 'right',
};

function Topic(props: Readonly<TopicProps>) {
  return (
    <section className="w-full py-[20px] px-[10px] bg-japonica-300">
      <div className="container">
        <div
          className={clsx(
            'text-black row',
            props.direction === 'right' ? 'flex-row-reverse' : 'flex-row'
          )}
        >
          <div className="col">
            <div className="col-demo">
              <div className="h-[350px] items-center flex justify-center">
                <div>
                  <h2>{props.title}</h2>
                  {props.children ? <div>{props.children}</div> : null}
                  <Link
                    className="button button--outline button--primary"
                    to={props.btnLink}
                    target="_blank"
                  >
                    {props.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-demo">
              <div className="h-[350px] items-center flex justify-center">
                <img
                  loading="lazy"
                  src={props.image}
                  alt={props.title}
                  className="w-[350px] h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TopicSection() {
  return (
    <Topic
      title={TopicProp.title}
      image={TopicProp.image}
      btnText={TopicProp.btnText}
      btnLink={TopicProp.btnLink}
      direction={TopicProp.direction}
    >
      <p className="text-justify">
        The Vietnam Free and Open Source Software Association (VFOSSA) is
        pleased to announce the 2023 Open Source Software Competition. The
        competition is open to all students in Vietnam. The competition is
        organized to encourage students to develop their skills in the field of
        open source software and to promote the use of open source software in
        Vietnam.
      </p>
    </Topic>
  );
}
