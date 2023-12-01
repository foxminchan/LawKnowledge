import { useEffect } from 'react';

export default function useMetadata(title?: string) {
  useEffect(() => {
    document.title = title ? `${title}` : 'Trang không tồn tại';
  }, [title]);
}
