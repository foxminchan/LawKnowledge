import NavItem from '@components/NavItem';
import { navItems } from '@/mocks/navItem.mock';

export default function NavBar() {
  return (
    <nav className="w-full h-11 bg-white-smoke-100">
      <div className="relative right-0 flex justify-center w-auto h-full">
        <div className="flex items-center justify-center w-11/12 h-full">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              name={item.name}
              to={item.link}
              width={item.width}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
