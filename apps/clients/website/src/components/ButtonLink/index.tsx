import clsx from 'clsx';
import Cookies from 'js-cookie';
import { Button, Modal } from 'antd';
import { StorageKeys } from '@/common/constants/keys';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

type Props = {
  name: string;
  link: string;
};

export default function ButtonLink(props: Readonly<Props>) {
  const navigate = useNavigate();
  const [modal] = Modal.useModal();
  const resolved = useResolvedPath(props.link);
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
      onClick={() => {
        if (props.name === 'Đăng xuất') {
          modal.confirm({
            title: 'Đăng xuất',
            content: 'Bạn có chắc chắn muốn đăng xuất?',
            okText: 'Đăng xuất',
            cancelText: 'Hủy',
            onOk: () => {
              Cookies.remove(StorageKeys.ACCESS_TOKEN);
              navigate(props.link);
            },
          });
        } else {
          navigate(props.link);
        }
      }}
    >
      {props.name}
    </Button>
  );
}
