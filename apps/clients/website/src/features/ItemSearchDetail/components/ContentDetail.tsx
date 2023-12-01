import useQuery from '@/common/hooks/useQuery';

export default function HeaderDetail() {
  const param = useQuery();

  return (
    <div className="relative mt-5 py-2">
      <iframe
        title="Văn Bản Pháp Luật"
        src={`${import.meta.env.VITE_DOCS_URL}${param.get('id')}.html`}
        className="block w-full h-[2600vh] border-none"
      >
        Trình duyệt không hỗ trợ iframe
      </iframe>
    </div>
  );
}
