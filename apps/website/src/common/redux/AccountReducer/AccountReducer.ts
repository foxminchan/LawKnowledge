import {
  RegisterPayload,
  RegisterResponse,
} from '@features/SignUp/types/register.type';
import { HttpStatusCode } from 'axios';
import { accountState } from '../../../@types/global';
import { axiosService } from '@common/utils/inversify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: accountState = {
  account: null,
  loading: false,
  error: null,
};

export const registerThunk = createAsyncThunk(
  'account/register',
  async (userRegister: RegisterPayload, thunkAPI) => {
    const response = await axiosService.post<RegisterResponse>(
      '/auth',
      userRegister
    );
    if (response.status === HttpStatusCode.Created) {
      window.location.href = '/dang-nhap';
      return response.data;
    }
    return thunkAPI.rejectWithValue(response.data);
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.account = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
