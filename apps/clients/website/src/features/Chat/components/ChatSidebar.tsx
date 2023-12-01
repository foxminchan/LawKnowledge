import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import logo from '@assets/images/caption.svg';

export default function ChatSidebar() {
  return (
    <>
      <div className=" lg:h-[85%] md:h-[85%] h-[85%] justify-center align-middle border-japonica-400 border-solid border-b-[1px] mt-5">
        <div className="flex justify-center w-full h-10 mb-10">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="w-[90%] h-full"
          />
        </div>
      </div>
      <div className="mt-5 px-5 py-0 text-dark-moderate-blue-700 flex bg-transparent hover:text-japonica-400">
        <HomeIcon className="mr-5" />
        <Link to="/" className="text-lg font-medium">
          Trang chủ
        </Link>
      </div>
    </>
  );
}
