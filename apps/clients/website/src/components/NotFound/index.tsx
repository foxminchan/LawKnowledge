import { Result } from 'antd';
import { Link } from 'react-router-dom';
import useMetadata from '@/common/hooks/useMetadata';

export default function NotFound() {
  useMetadata();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Trang bạn đang tìm kiếm không tồn tại."
      extra={
        <Link
          to="/"
          className="px-5 py-3 text-white rounded bg-japonica-500 hover:bg-japonica-600 hover:!text-white"
        >
          Quay lại trang chủ
        </Link>
      }
    />
  );
}
