import Cookies from 'js-cookie';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { StorageKeys } from '../common/constants/keys';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function BasicLayout() {
  const location = useLocation();

  return Cookies.get(StorageKeys.ACCESS_TOKEN) &&
    (location.pathname === '/dang-nhap' || location.pathname === '/dang-ky') ? (
    <Navigate to="/" replace />
  ) : (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
