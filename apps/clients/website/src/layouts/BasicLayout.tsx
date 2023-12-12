import Header from '@components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/Navbar';

export default function BasicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
