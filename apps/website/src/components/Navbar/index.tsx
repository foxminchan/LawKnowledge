import clsx from 'clsx';
import { useState } from 'react';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const navItems = [
  {
    id: 1,
    name: 'Giới thiệu',
    link: '/gioi-thieu',
    width: 'w-28',
  },
  {
    id: 2,
    name: 'Thanh toán',
    link: '/thanh-toan-truc-tuyen',
    width: 'w-28',
  },
  { id: 3, name: 'Tra cứu', link: '/tra-cuu', width: 'w-28' },
  {
    id: 4,
    name: 'Dịch vụ công trực tuyến',
    link: '/dich-vu-cong-truc-tuyen',
    width: 'w-60',
  },
  {
    id: 5,
    name: 'Dịch vụ công nổi bật',
    link: '/dich-vu-cong-noi-bat',
    width: 'w-60',
  },
  { id: 6, name: 'Hỏi đáp', link: '/hoi-dap', width: 'w-28' },
  {
    id: 7,
    name: 'Hỗ trợ',
    link: '/dieu-khoan-su-dung',
    subMenu: true,
    width: 'w-24',
  },
];

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

const navToggleMenu = [
  { id: 1, name: 'Đăng nhập', link: '/dang-nhap', isLogin: false },
  { id: 2, name: 'Đăng ký', link: '/dang-ky', isLogin: false },
  { id: 3, name: 'Đăng xuất', link: '/dang-xuat', isLogin: true },
];

export default function Navbar() {
  const [subMenuVisibility, setSubMenuVisibility] = useState<
    Record<string, boolean>
  >({});

  const [menuVisible, setMenuVisible] = useState(false);

  const showSubMenu = (itemName: string) => {
    setSubMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [itemName]: true,
    }));
  };

  const hideSubMenu = (itemName: string) => {
    setSubMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [itemName]: false,
    }));
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="w-full h-11 bg-white-smoke-100 left-44">
      {menuVisible && (
        <Container
          className="absolute top-0 left-0 w-full h-full bg-[#00000033] lg:hidden"
          onClick={() => {
            toggleMenu();
            hideSubMenu('Hỗ trợ');
          }}
        ></Container>
      )}
      <div className="relative left-0 flex justify-center w-auto h-full lg:left-44 lg:justify-start">
        <div
          className={clsx(
            'w-12 h-full',
            window.location.pathname === '/'
              ? 'bg-japonica-500'
              : 'bg-white-smoke-100'
          )}
        >
          <NavLink
            to="/"
            className="flex items-center justify-center w-full h-full"
          >
            <HomeIcon
              className={clsx(
                'w-5 h-5',
                window.location.pathname === '/'
                  ? 'text-white'
                  : 'text-dark-moderate-blue-800'
              )}
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex h-full">
            {navItems.map((item) => (
              <li
                key={item.id}
                onMouseLeave={() => hideSubMenu(item.name)}
                onMouseEnter={() =>
                  !navSupport.some((subItem) =>
                    window.location.pathname.includes(subItem.link)
                  ) && showSubMenu(item.name)
                }
                className={clsx(
                  'h-full',
                  'hover:bg-japonica-500',
                  'hover:text-white',
                  'text-dark-moderate-blue-800',
                  item.width,
                  item.subMenu &&
                    navSupport.some((subItem) =>
                      window.location.pathname.includes(subItem.link)
                    )
                    ? 'bg-japonica-500 text-white'
                    : 'bg-white-smoke-100',
                  window.location.pathname === item.link
                    ? '!bg-japonica-500 text-white'
                    : 'bg-white-smoke-100'
                )}
              >
                <NavLink
                  to={item.link}
                  className="flex items-center justify-center w-full h-full"
                >
                  <span className="text-xl font-medium">{item.name}</span>
                </NavLink>
                {item.subMenu && subMenuVisibility[item.name] && (
                  <ul>
                    {navSupport.map((subItem) => (
                      <li
                        key={subItem.id}
                        className={clsx(
                          'w-56 h-12 text-white hover:bg-japonica-500 hover:text-white',
                          window.location.pathname === subItem.link
                            ? 'bg-japonica-500 text-white'
                            : 'bg-japonica-400'
                        )}
                      >
                        <NavLink
                          to={subItem.link}
                          className="flex items-center w-full h-full px-3 text-left"
                        >
                          <span className="text-xl font-medium">
                            {subItem.name}
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden bg-japonica-500">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2">
            <DensityMediumIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {menuVisible && (
        <div
          className={clsx(
            'lg:hidden bg-white-smoke-100 top-0 left-0 px-[15px] pt-2 absolute z-10',
            menuVisible
              ? 'h-full w-[300px] transition-all duration-[0.3s]'
              : 'w-0 transition-all duration-[0.3s]'
          )}
        >
          <ul className="flex flex-col items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={clsx(
                  'w-full h-12 text-center hover:bg-japonica-500 hover:text-white',
                  window.location.pathname === item.link ||
                    (item.subMenu &&
                      navSupport.some((subItem) =>
                        window.location.pathname.includes(subItem.link)
                      ))
                    ? 'bg-japonica-500 text-white'
                    : 'bg-white-smoke-100'
                )}
              >
                {' '}
                {!item.subMenu && (
                  <NavLink
                    to={item.link}
                    onClick={toggleMenu}
                    className="flex items-center w-full h-full px-3"
                  >
                    {' '}
                    <span className="text-xl font-medium">{item.name}</span>
                  </NavLink>
                )}
                {item.subMenu && (
                  <div className="relative w-full h-full">
                    <button
                      onClick={() =>
                        subMenuVisibility[item.name]
                          ? hideSubMenu(item.name)
                          : showSubMenu(item.name)
                      }
                      className="flex items-center w-full h-full px-3"
                    >
                      <span className="text-xl font-medium">{item.name}</span>
                      <ExpandMoreIcon
                        className={clsx(
                          'w-6 h-6 right-0 absolute transition-all duration-[0.3s]',
                          subMenuVisibility[item.name] && 'transform rotate-180'
                        )}
                      />
                    </button>
                    {subMenuVisibility[item.name] && (
                      <ul>
                        {navSupport.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="relative z-10 w-full h-12 text-center shadow-md hover:bg-japonica-500 hover:text-white bg-japonica-300"
                          >
                            <NavLink
                              to={subItem.link}
                              onClick={toggleMenu}
                              className="flex items-center w-full h-full px-3"
                            >
                              <span className="text-xl font-medium">
                                {subItem.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {navToggleMenu.map((item) => {
            return (
              <NavLink
                to={item.link}
                key={item.id}
                className={clsx(
                  'flex items-center justify-center w-full h-12 my-2 border rounded border-japonica-500 hover:bg-japonica-500 hover:text-white relative',
                  window.location.pathname === item.link
                    ? 'bg-japonica-500 text-white'
                    : 'bg-white-smoke-100'
                )}
              >
                <span className="text-xl font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
