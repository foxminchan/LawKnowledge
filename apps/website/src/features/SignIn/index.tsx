import { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/quoc_huy.svg';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { LoginPayload } from './types/login.type';
import useMetadata from '@common/hooks/useMetadata';
import { LoginSchema } from './schemas/login.schema';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { AppDispatch, RootState } from '@common/redux/store';
import { loginThunk } from '@common/redux/UserReducer/UserReducer';

type Props = {
  title: string;
};

export default function SignIn(props: Readonly<Props>) {
  useMetadata(props.title);
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = LoginSchema.safeParse({
      username: data.get('username'),
      password: data.get('password'),
    });

    if (!result.success) {
      const errors = result.error.issues[0].message;
      setValidationError(errors);
      return;
    }

    try {
      await dispatch(
        loginThunk({
          username: result.data.username,
          password: result.data.password,
        } as LoginPayload)
      );
      setValidationError(null);
    } catch (error) {
      setValidationError('Đăng nhập không thành công do lỗi máy chủ');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="flex flex-col items-center mt-16">
        <img
          src={Logo}
          alt="Quốc huy"
          className="w-auto h-24 ml-1 "
          loading="lazy"
        />
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
        <Box
          noValidate
          component="form"
          className="mt-2"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Tên đăng nhập"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
          />
          {(validationError || error) && (
            <Typography className="py-2 mt-2 text-center text-japonica-700">
              {validationError ?? error}
            </Typography>
          )}
          <Button
            type="submit"
            className="w-full !px-6 !py-2 font-bold !text-white rounded !bg-japonica-400 hover:!bg-japonica-500 disabled:!cursor-not-allowed disabled:!opacity-50"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              'Đăng nhập'
            )}
          </Button>
        </Box>
        <div className="flex items-center justify-center mt-4">
          <span className="mr-2">Bạn chưa có tài khoản?</span>
          <Link
            to="/dang-ky"
            className="text-japonica-400 hover:text-japonica-500"
          >
            Đăng ký
          </Link>
        </div>
      </Box>
    </Container>
  );
}
