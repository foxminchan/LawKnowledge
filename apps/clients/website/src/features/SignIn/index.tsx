import {
  LoginForm,
  ProFormText,
  PageContainer,
  ProFormCheckbox,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { theme, Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/coat_of_arms.svg';
import useMetadata from '@/common/hooks/useMetadata';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

type Props = {
  title: string;
};

export default function SignIn(props: Readonly<Props>) {
  useMetadata(props.title);
  const { token } = theme.useToken();

  return (
    <ProConfigProvider hashed={false}>
      <PageContainer className={`bg-${token.colorBgContainer}`}>
        <LoginForm
          logo={<Image preview={false} loading="lazy" src={Logo} alt="logo" />}
          subTitle="Đăng nhập để tiếp tục"
          submitter={{
            searchConfig: {
              submitText: 'Đăng nhập',
            },
            submitButtonProps: {
              className: 'bg-japonica-500 hover:!bg-japonica-600',
            },
          }}
        >
          <ProFormText
            name="email"
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
          <div className="flex justify-between items-center m-6">
            <ProFormCheckbox noStyle name="autoLogin">
              Nhớ mật khẩu
            </ProFormCheckbox>
            <Link to="/quen-mat-khau" className="float-right">
              Quên mật khẩu?
            </Link>
          </div>
        </LoginForm>
      </PageContainer>
    </ProConfigProvider>
  );
}
