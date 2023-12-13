import clsx from 'clsx';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
  id: number;
  name: string;
	link: string;
	onClick?: () => void;
};

export default function ToggleItem(props: Readonly<Props>) {
  const resolved = useResolvedPath(props.link);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink
      key={props.id}
      to={props.link}
      className={clsx(
        'w-full h-11 text-2xl font-semibold text-center text-black-100 hover:text-japonica-500 transition-colors duration-300',
        match ? 'text-japonica-500' : 'text-black',
			)}
			onClick={props.onClick}
    >
      {props.name}
    </NavLink>
  );
}
