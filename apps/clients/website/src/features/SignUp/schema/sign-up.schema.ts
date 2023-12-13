import Joi from 'joi';

export const SignUpSchema = Joi.object({
  cardId: Joi.string().min(9).max(12).required().messages({
    'string.base': 'CMND/CCCD bắt buộc phải là chuỗi số',
    'string.empty': 'CMND/CCCD không được để trống',
    'string.min': 'CMND/CCCD phải có ít nhất {#limit} ký tự',
    'string.max': 'CMND/CCCD không được vượt quá {#limit} ký tự',
    'any.required': 'CMND/CCCD là bắt buộc',
  }),

  name: Joi.string().max(50).required().messages({
    'string.base': 'Tên bắt buộc phải là chuỗi',
    'string.empty': 'Tên không được để trống',
    'string.min': 'Tên phải có ít nhất {#limit} ký tự',
    'string.max': 'Tên không được vượt quá {#limit} ký tự',
    'any.required': 'Tên là bắt buộc',
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(50)
    .required()
    .messages({
      'string.base': 'Email bắt buộc phải là chuỗi',
      'string.empty': 'Email không được để trống',
      'string.min': 'Email phải có ít nhất {#limit} ký tự',
      'string.max': 'Email không được vượt quá {#limit} ký tự',
      'any.required': 'Email là bắt buộc',
    }),

  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      'string.base': 'Số điện thoại bắt buộc phải là chuỗi số',
      'string.empty': 'Số điện thoại không được để trống',
      'string.pattern.base': 'Số điện thoại không hợp lệ',
      'any.required': 'Số điện thoại là bắt buộc',
    }),

  address: Joi.string().max(100).required().messages({
    'string.base': 'Địa chỉ bắt buộc phải là chuỗi',
    'string.empty': 'Địa chỉ không được để trống',
    'string.min': 'Địa chỉ phải có ít nhất {#limit} ký tự',
    'string.max': 'Địa chỉ không được vượt quá {#limit} ký tự',
    'any.required': 'Địa chỉ là bắt buộc',
  }),

  password: Joi.string()
    .required()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
    .messages({
      'string.base': 'Mật khẩu bắt buộc phải là chuỗi',
      'string.empty': 'Mật khẩu không được để trống',
      'string.pattern.base':
        'Mật khẩu phải có ít nhất 8 ký tự, ít nhất một chữ cái viết hoa, ít nhất một chữ cái viết thường, ít nhất một số và ít nhất một ký tự đặc biệt',
      'any.required': 'Mật khẩu là bắt buộc',
    }),

  repassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Mật khẩu không khớp',
    'any.required': 'Mật khẩu là bắt buộc',
  }),
});
