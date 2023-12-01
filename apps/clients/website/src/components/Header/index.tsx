import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo.png';
import { StorageKeys } from '@common/constants/keys';

const textButton = [
  { id: 1, name: 'Đăng ký', link: '/dang-ky' },
  { id: 2, name: 'Đăng nhập', link: '/dang-nhap' },
];

function ButtonLink({ name, link }: Readonly<{ name: string; link: string }>) {
  return (
    <Link to={link}>
      <button className="hidden h-10 w-auto mx-[3px] text-lg font-medium leading-6 text-center bg-transparent border rounded hover:bg-japonica-400 text-dark-moderate-blue-800 hover:text-white border-japonica-400 hover:border-transparent font-nunito sm:w-[130px] lg:inline">
        {name}
      </button>
    </Link>
  );
}

export default function Header() {
  const isAuthenticated = !!Cookies.get(StorageKeys.ACCESS_TOKEN);

  return (
    <header className="flex items-center justify-center w-full h-28 py-[15px]">
      <div className="!relative lg:h-full w-[78%]">
        <Link to="/" className="inline-block">
          <img
            src={Logo}
            alt="logo"
            className="lg:max-w-[536px] ml-1 lg:h-auto"
            loading="lazy"
          />
        </Link>
        <div className="absolute top-0 right-0 flex items-center justify-center h-full">
          {isAuthenticated ? (
            <ButtonLink name="Đăng xuất" link="/dang-xuat" />
          ) : (
            textButton.map((item) => (
              <ButtonLink key={item.id} name={item.name} link={item.link} />
            ))
          )}
        </div>
      </div>
    </header>
  );
}
