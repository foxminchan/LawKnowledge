import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ButtonLink({
  name,
  link,
}: Readonly<{ name: string; link: string }>) {
  const navigate = useNavigate();

  return (
    <Button
      className="hidden h-10 w-auto mx-[3px] text-lg font-medium leading-6 text-center bg-transparent border rounded hover:bg-japonica-400 text-dark-moderate-blue-800 hover:!text-white border-japonica-400 hover:!border-transparent font-nunito sm:w-[130px] lg:inline"
      onClick={() => navigate(link)}
    >
      {name}
    </Button>
  );
}
