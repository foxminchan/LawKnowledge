import { Image } from 'antd';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo.svg';
import ButtonLink from '@components/ButtonLink';

const textButton = [
  { id: 1, name: 'Đăng ký', link: '/dang-ky' },
  { id: 2, name: 'Đăng nhập', link: '/dang-nhap' },
];

export default function Header() {
  const isAuthenticated = !!Cookies.get('X-Access-Token');

  return (
    <header className="flex items-center justify-center w-full h-28 py-[15px]">
      <div className="relative lg:h-full w-[78%]">
        <Link to="/" className="inline-block">
          <Image
            src={Logo}
            alt="logo"
            preview={false}
            loading="lazy"
            className="lg:max-w-[400px] ml-1 lg:h-auto"
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
