import clsx from 'clsx';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
  data: { id: number; name: string; link: string }[];
};

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

export default function SubNavbar(props: Readonly<Props>) {
  return (
    <div className="hidden bg-japonica-400 h-11 sm:flex pl-44">
      {props.data.map((subItem) => (
        <NavItem key={subItem.id} name={subItem.name} to={subItem.link} />
      ))}
    </div>
  );
}
