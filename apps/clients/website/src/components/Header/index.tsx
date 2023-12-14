import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Suspense, useState } from 'react';
import loadable from '@loadable/component';
import Logo from '@assets/images/logo.svg';
import { Button, Image, Layout } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { StorageKeys } from '@/common/constants/keys';
import { PageLoading } from '@ant-design/pro-components';
import { fallbackImage } from '@/common/constants/image';
import { accountItems, authItems } from '@/mocks/authItem.mock';

const ButtonLink = loadable(() => import('@components/ButtonLink'));
const ToggleMenu = loadable(() => import('@components/ToggleMenu'));

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
            fallback={fallbackImage}
            loading="lazy"
            className="lg:max-w-[378px] ml-1 lg:h-auto"
          />
        </Link>
        <div className="absolute top-0 right-0 flex items-center justify-center h-full">
          <Suspense fallback={<PageLoading />}>
            {isAuthenticated
              ? accountItems.map((item) => (
                  <ButtonLink key={item.id} name={item.name} link={item.link} />
                ))
              : authItems.map((item) => (
                  <ButtonLink key={item.id} name={item.name} link={item.link} />
                ))}
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<PageLoading />}>
        <ToggleMenu menuVisible={menuVisible} onClose={toggleMenu} />
      </Suspense>
    </Layout.Header>
  );
}
