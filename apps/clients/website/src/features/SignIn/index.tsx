import {
  LoginForm,
  ProFormText,
  ProFormCheckbox,
  ProConfigProvider,
} from '@ant-design/pro-components';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { theme, Image, Typography } from 'antd';
import { signInAtom } from './atoms/sign-in.atom';
import Logo from '@assets/images/coat_of_arms.svg';
import { Link, useNavigate } from 'react-router-dom';
import { SignInPayload } from './types/sign-in.type';
import useMetadata from '@/common/hooks/useMetadata';
import { StorageKeys } from '@/common/constants/keys';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

type Props = {
  title: string;
};

export default function SignIn(props: Readonly<Props>) {
  useMetadata(props.title);
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [{ mutate, isPending, isError, data }] = useAtom(signInAtom);

  return (
    <ProConfigProvider hashed={false}>
      <div className={`bg-${token.colorBgContainer}`}>
        <LoginForm
          logo={
            <Image
              src={Logo}
              preview={false}
              decoding="async"
              loading="lazy"
              alt="Coat of arms"
            />
          }
          subTitle="Đăng nhập để tiếp tục"
          onFinish={async (values) => {
            mutate(values as SignInPayload);
            if (!isError && data?.access_token) {
              Cookies.set(StorageKeys.ACCESS_TOKEN, data.access_token);
              navigate('/');
            }
          }}
          submitter={{
            searchConfig: {
              submitText: 'Đăng nhập',
            },
            submitButtonProps: {
              className: 'bg-japonica-500 hover:!bg-japonica-600',
              loading: isPending,
            },
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className="prefixIcon" />,
            }}
            placeholder="Email"
            rules={[
              {
                required: true,
                message: 'Email không được để trống!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className="prefixIcon" />,
            }}
            placeholder="Mật khẩu"
            rules={[
              {
                required: true,
                message: 'Mật khẩu không được để trống!',
              },
            ]}
          />
          {isError && (
            <div className="text-center">
              <Typography.Text className="text-japonica-500">
                Thông tin đăng nhập không chính xác!
              </Typography.Text>
            </div>
          )}
          <div className="flex justify-between items-center m-6">
            <ProFormCheckbox noStyle name="autoLogin">
              Nhớ mật khẩu
            </ProFormCheckbox>
            <Link to="/quen-mat-khau" className="float-right">
              Quên mật khẩu?
            </Link>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
}
