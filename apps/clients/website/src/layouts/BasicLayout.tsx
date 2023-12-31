/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Cookies from 'js-cookie';
import Header from '@components/Header';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { StorageKeys } from '@/common/constants/keys';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const authenticatedRoute = ['/dang-nhap', '/dang-ky', '/quen-mat-khau'];

export default function BasicLayout() {
  const location = useLocation();
  const isAuthenticated = () => {
    try {
      return Cookies.get(StorageKeys.ACCESS_TOKEN);
    } catch (error) {
      console.error('Error accessing cookies:', error);
      return false;
    }
  };

  if (isAuthenticated() && authenticatedRoute.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
