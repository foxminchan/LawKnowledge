import clsx from 'clsx';
import { Button } from 'antd';
import Cookies from 'js-cookie';
import { navItems } from '@/mocks/navItem.mock';
import ToggleItem from '@components/ToggleItem';
import { CloseOutlined } from '@ant-design/icons';
import { StorageKeys } from '@/common/constants/keys';
import { accountItems, authItems } from '@/mocks/authItem.mock';

type Props = {
  menuVisible: boolean;
  onClose: () => void;
};

export default function ToggleMenu(props: Readonly<Props>) {
  const userItems = Cookies.get(StorageKeys.ACCESS_TOKEN)
    ? accountItems
    : authItems;

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 w-full h-screen bg-white-smoke-100 lg:hidden transition-transform duration-500 block z-50',
        props.menuVisible ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className="relative w-full h-full">
        <Button
          onClick={props.onClose}
          className="absolute top-0 right-0 text-lg border-none bg-transparent z-0"
          icon={<CloseOutlined className="text-japonica-500" />}
        />
        <div className="flex flex-col items-center justify-center w-full h-full">
          {[...navItems, ...userItems].map((item) => (
            <ToggleItem
              key={item.id}
              id={item.id}
              name={item.name}
              link={item.link}
              onClick={props.onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
