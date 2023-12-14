import { Suspense } from 'react';
import loadable from '@loadable/component';
import { navItems } from '@/mocks/navItem.mock';
import { PageLoading } from '@ant-design/pro-components';

const NavItem = loadable(() => import('@components/NavItem'));

export default function NavBar() {
  return (
    <nav className="w-full h-11 bg-white-smoke-100 hidden lg:block">
      <div className="relative right-0 flex justify-center w-auto h-full">
        <div className="flex items-center justify-center w-11/12 h-full">
          <Suspense fallback={<PageLoading />}>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                name={item.name}
                to={item.link}
                width={item.width}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
