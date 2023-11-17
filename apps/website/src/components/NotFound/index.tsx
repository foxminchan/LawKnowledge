import { Link } from 'react-router-dom';
import useMetadata from '../../common/hooks/useMetadata';

export default function NotFound() {
  useMetadata();
  return (
    <main className="flex items-center justify-center pt-[17vh]">
      <div className="m-auto text-center">
        <h1 className="font-black text-red-200 text-9xl">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ôi không!
        </p>
        <p className="mt-4 text-gray-500">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white rounded bg-japonica-600 hover:bg-japonica-800 focus:outline-none focus:ring"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </main>
  );
}
