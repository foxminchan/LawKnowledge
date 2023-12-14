import useMetadata from '@/common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function Account(props: Readonly<Props>) {
  useMetadata(props.title);
  return <div>index</div>;
}
