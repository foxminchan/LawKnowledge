import Cookies from 'js-cookie';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo.svg';
import { Button, Image, Layout } from 'antd';
import ButtonLink from '@components/ButtonLink';
import { BarsOutlined } from '@ant-design/icons';
import { StorageKeys } from '@/common/constants/keys';
import ToggleMenu from '../ToggleMenu';

const textButton = [
  { id: 1, name: 'Đăng ký', link: '/dang-ky' },
  { id: 2, name: 'Đăng nhập', link: '/dang-nhap' },
];

export default function Header() {
  const isAuthenticated = !!Cookies.get(StorageKeys.ACCESS_TOKEN);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout.Header className="flex items-center justify-center w-full h-28 py-[15px] bg-transparent">
      <Button
        onClick={toggleMenu}
        className="lg:hidden top-0 right-0 absolute text-lg border-none bg-transparent"
        icon={<BarsOutlined className="text-japonica-500" />}
      />
      <div className="relative lg:h-full w-[78%]">
        <Link to="/" className="inline-block">
          <Image
            src={Logo}
            alt="logo"
            preview={false}
            loading="lazy"
            className="lg:max-w-[378px] ml-1 lg:h-auto"
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
      <ToggleMenu menuVisible={menuVisible} onClose={toggleMenu} />
    </Layout.Header>
  );
}
