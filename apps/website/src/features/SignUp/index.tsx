import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/quoc_huy.svg';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Caption from '@assets/images/caption.svg';
import useMetadata from '@common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function SignUp(props: Readonly<Props>) {
  useMetadata(props.title);

  return (
    <Container component="main" maxWidth="xs" className="h-screen">
      <Box className="flex flex-col items-center mt-16">
        <img
          src={Logo}
          alt="Quốc huy"
          className="w-auto h-24 ml-1"
          loading="lazy"
        />
        <img
          src={Caption}
          alt="Caption"
          className="w-auto h-24 ml-1"
          loading="lazy"
        />
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="card"
                label="Số CMND/CCCD"
                type="number"
                id="card"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Họ và tên"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Số điện thoại"
                type="tel"
                id="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Địa chỉ thường trú"
                id="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text-xs leading-5 text-justify text-gray-500">
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
                <Link
                  to="/dieu-khoan-su-dung"
                  className="text-japonica-400 hover:text-japonica-500"
                >
                  Điều khoản, Chính sách chia sẻ thông tin
                </Link>{' '}
                của chúng tôi.
              </p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            className="w-full !px-6 !py-2 font-bold !text-white rounded !bg-japonica-400 hover:!bg-japonica-500 disabled:!cursor-not-allowed disabled:!opacity-50"
          >
            {props.title}
          </Button>
          <div className="flex items-center justify-center mt-4">
            <span className="mr-2">Đã có tài khoản?</span>
            <Link
              to="/dang-nhap"
              className="text-japonica-400 hover:text-japonica-500"
            >
              Đăng nhập
            </Link>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
