import clsx from 'clsx';
import { Button } from 'antd';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export default function ButtonLink({
  name,
  link,
}: Readonly<{ name: string; link: string }>) {
  const navigate = useNavigate();
  const resolved = useResolvedPath(link);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Button
      className={clsx(
        'hidden h-10 w-auto mx-[3px] text-lg font-medium leading-6 text-center border rounded hover:bg-japonica-400 text-dark-moderate-blue-800 hover:!text-white hover:!border-transparent sm:w-[130px] lg:inline',
        match
          ? 'disabled:bg-japonica-500 disabled:text-white disabled:border-japonica-500'
          : 'text-black border-japonica-400 bg-transparent',
      )}
      disabled={!!match}
      onClick={() => navigate(link)}
    >
      {name}
    </Button>
  );
}
