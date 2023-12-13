import {
  ProCard,
  StepsForm,
  ProFormText,
  ProFormDigit,
  ProFormInstance,
} from '@ant-design/pro-components';
import { MutableRefObject, useRef } from 'react';
import useMetadata from '@/common/hooks/useMetadata';
import { SolutionOutlined, UserOutlined } from '@ant-design/icons';

type Props = {
  title: string;
};

export default function SignUp(props: Readonly<Props>) {
  useMetadata(props.title);
  const formMapRef = useRef<
    MutableRefObject<ProFormInstance<unknown> | undefined>[]
  >([]);

  return (
    <ProCard>
      <StepsForm
        formMapRef={formMapRef}
        submitter={{
          submitButtonProps: {
            className: 'bg-japonica-500 hover:!bg-japonica-600',
          },
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
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
          />
          <ProFormDigit
            label="CCCD/CMND"
            extra="Chú ý: Vui lòng nhập đúng số CCCD/CMND"
            name="card"
            tooltip="CMND bao gồm 9 số, CCCD bao gồm 12 số"
            placeholder="0123456789"
            rules={[{ required: true, message: 'Vui lòng nhập số CCCD/CMND' }]}
          />
          <ProFormDigit
            label="Số điện thoại"
            name="phone"
            placeholder="0987654321"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
          />
          <ProFormText
            label="Địa chỉ"
            name="address"
            placeholder="Nam Kỳ Khởi Nghĩa, Phường 4, Quận 3, Thành phố Hồ Chí Minh"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
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
            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
          />
          <ProFormText.Password
            label="Mật khẩu"
            name="password"
            placeholder="********"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          />
          <ProFormText.Password
            label="Nhập lại mật khẩu"
            name="repassword"
            placeholder="********"
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
}
