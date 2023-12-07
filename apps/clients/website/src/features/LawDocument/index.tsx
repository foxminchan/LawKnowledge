import useMetadata from '@/common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function LawDocument(props: Readonly<Props>) {
  useMetadata(props.title);

  return (
    <iframe
      title="Văn Bản Pháp Luật"
      src="https://baohuy2k3.github.io/PhapDien/"
      className="block w-full h-[2600vh] border-none"
    >
      Trình duyệt không hỗ trợ iframe
    </iframe>
  );
}
