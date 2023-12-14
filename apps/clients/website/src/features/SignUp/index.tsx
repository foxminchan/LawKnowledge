import {
  ProCard,
  StepsForm,
  ProFormText,
  ProFormDigit,
  ProFormInstance,
} from '@ant-design/pro-components';
import { useAtom } from 'jotai';
import { MutableRefObject, useRef } from 'react';
import { signUpAtom } from './atoms/sign-up.atom';
import useMetadata from '@/common/hooks/useMetadata';
import { SignUpPayload } from './types/sign-up.type';
import { SolutionOutlined, UserOutlined } from '@ant-design/icons';

type Props = {
  title: string;
};

export default function SignUp(props: Readonly<Props>) {
  useMetadata(props.title);
  const formMapRef = useRef<
    MutableRefObject<ProFormInstance<unknown> | undefined>[]
  >([]);

  const [{ mutate }] = useAtom(signUpAtom);

  return (
    <ProCard>
      <StepsForm
        formMapRef={formMapRef}
        submitter={{
          submitButtonProps: {
            className: 'bg-japonica-500 hover:!bg-japonica-600',
          },
        }}
        onFinish={async (values) => {
          const data = values as SignUpPayload;
          mutate(data);
        }}
      >
        <StepsForm.StepForm
          name="step1"
          title="Thông tin cơ bản"
          stepProps={{
            icon: <UserOutlined className="text-japonica-500" />,
          }}
        >
          <ProFormText
            label="Họ và tên"
            name="name"
            placeholder="Nguyễn Văn A"
            rules={[
              { required: true, message: 'Vui lòng nhập họ và tên' },
              { max: 50, message: 'Họ và tên không được quá 50 ký tự' },
            ]}
          />
          <ProFormDigit
            label="CCCD/CMND"
            extra="Chú ý: Vui lòng nhập đúng số CCCD/CMND"
            name="card"
            tooltip="CMND bao gồm 9 số, CCCD bao gồm 12 số"
            placeholder="0123456789"
            rules={[
              { required: true, message: 'Vui lòng nhập số CCCD/CMND' },
              { pattern: /^\d{9,12}$/, message: 'Số CCCD/CMND không hợp lệ' },
            ]}
          />
          <ProFormText
            label="Số điện thoại"
            name="phone"
            placeholder="0987654321"
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại' },
              { pattern: /^\d{10}$/, message: 'Số điện thoại không hợp lệ' },
            ]}
          />
          <ProFormText
            label="Địa chỉ"
            name="address"
            placeholder="Nam Kỳ Khởi Nghĩa, Phường 4, Quận 3, Thành phố Hồ Chí Minh"
            rules={[
              { required: true, message: 'Vui lòng nhập địa chỉ' },
              { max: 100, message: 'Địa chỉ không được quá 100 ký tự' },
            ]}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="step2"
          title="Thiết lập tài khoản"
          stepProps={{
            icon: <SolutionOutlined className="text-japonica-500" />,
          }}
        >
          <ProFormText
            label="Email"
            name="email"
            placeholder="abc@gmail.com"
            rules={[
              { required: true, message: 'Vui lòng nhập email' },
              { type: 'email', message: 'Email không hợp lệ' },
            ]}
          />
          <ProFormText.Password
            label="Mật khẩu"
            name="password"
            placeholder="********"
            extra="Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu' },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Mật khẩu không hợp lệ',
              },
            ]}
          />
          <ProFormText.Password
            label="Nhập lại mật khẩu"
            name="repassword"
            placeholder="********"
            rules={[
              { required: true, message: 'Vui lòng nhập lại mật khẩu' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không trùng khớp'));
                },
              }),
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
}
