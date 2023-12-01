import { z } from 'zod';

export const RegisterSchema = z.object({
  card: z
    .string()
    .min(9, 'Số CMND không được ít hơn 9 ký tự')
    .max(12, 'Số CCCD không được nhiều hơn 12 ký tự'),

  name: z
    .string()
    .min(1, 'Họ tên không được để trống')
    .max(50, 'Họ tên không được nhiều hơn 50 ký tự'),

  email: z
    .string()
    .email('Email không hợp lệ')
    .max(50, 'Email không được nhiều hơn 50 ký tự'),

  phone: z
    .string()
    .min(10, 'Số điện thoại không được ít hơn 10 ký tự')
    .max(10, 'Số điện thoại không được nhiều hơn 10 ký tự'),

  address: z
    .string()
    .min(1, 'Địa chỉ không được để trống')
    .max(100, 'Địa chỉ không được nhiều hơn 100 ký tự'),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số',
      }
    ),
});
