/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { StorageKeys } from '../common/constants/keys';

export default function AuthLayout() {
  return !Cookies.get(StorageKeys.ACCESS_TOKEN) ? (
    <Navigate to="/dang-nhap" replace />
  ) : (
    <Outlet />
  );
}
