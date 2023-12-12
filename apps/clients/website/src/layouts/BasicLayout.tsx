import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

export default function BasicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
