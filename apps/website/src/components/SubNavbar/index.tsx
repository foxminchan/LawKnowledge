import clsx from 'clsx';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

const navSupport = [
  {
    id: 1,
    name: 'Điều khoản sử dụng',
    link: '/dieu-khoan-su-dung',
  },
  {
    id: 2,
    name: 'Hướng dẫn sử dụng',
    link: '/huong-dan-su-dung',
  },
];

function NavItem({ name, to }: Readonly<{ name: string; to: string }>) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={clsx(
        'w-auto h-11 flex items-center px-3 text-white',
        'hover:bg-japonica-600 hover:text-white',
        match ? 'bg-japonica-600' : 'bg-japonica-400'
      )}
    >
      <span className="text-xl font-medium">{name}</span>
    </NavLink>
  );
}

export default function SubNavbar() {
  return (
    <div className="hidden bg-japonica-500 h-11 sm:flex pl-44">
      {navSupport.map((subItem) => (
        <NavItem key={subItem.id} name={subItem.name} to={subItem.link} />
      ))}
    </div>
  );
}
