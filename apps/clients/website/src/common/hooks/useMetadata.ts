/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { useEffect } from 'react';

export default function useMetadata(title?: string) {
  useEffect(() => {
    document.title = title ? `${title}` : 'Trang không tồn tại';
  }, [title]);
}
