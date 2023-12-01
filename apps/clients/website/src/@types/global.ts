import { RegisterResponse } from '@features/SignUp/types/register.type';

export type userState = {
  userLogin: string | undefined;
  loading: boolean;
  isLoggedIn: boolean;
  error: string | null;
};

export type accountState = {
  account: RegisterResponse | null;
  loading: boolean;
  error: unknown;
};
