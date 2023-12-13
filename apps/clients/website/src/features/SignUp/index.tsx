import useMetadata from '@/common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function SignUp(props: Readonly<Props>) {
  useMetadata(props.title);
  return <div>index</div>;
}
