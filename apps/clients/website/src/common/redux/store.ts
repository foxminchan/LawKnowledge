import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserReducer/UserReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import accountSlice from './AccountReducer/AccountReducer';

const store = configureStore({
  reducer: {
    userReducer: userSlice,
    accountReducer: accountSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
