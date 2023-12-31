/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { useLocation } from 'react-router-dom';

export default function useQuery() {
  return new URLSearchParams(useLocation().search);
}
