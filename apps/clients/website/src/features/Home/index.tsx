import useMetadata from '@/common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function Home(props: Readonly<Props>) {
  useMetadata(props.title);
  return <p>index</p>;
}
