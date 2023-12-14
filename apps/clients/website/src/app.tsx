import { Suspense } from 'react';
import loadable from '@loadable/component';
import AuthLayout from '@layouts/AuthLayout';
import BasicLayout from '@layouts/BasicLayout';
import { PageLoading } from '@ant-design/pro-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Law = loadable(() => import('@features/Law'));
const Home = loadable(() => import('@features/Home'));
const Chat = loadable(() => import('@features/Chat'));
const Search = loadable(() => import('@features/Search'));
const SignIn = loadable(() => import('@features/SignIn'));
const SignUp = loadable(() => import('@features/SignUp'));
const Account = loadable(() => import('@features/Account'));
const NotFound = loadable(() => import('@components/NotFound'));
const ItemDetail = loadable(() => import('@features/ItemDetail'));
const ChangePassword = loadable(() => import('@features/ChangePassword'));
const ForgotPassword = loadable(() => import('@features/ForgotPassword'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/hoi-dap"
            element={
              <Suspense fallback={<PageLoading />}>
                <Chat title="Hỏi đáp" />
              </Suspense>
            }
          />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoading />}>
                <Home title="Trang chủ" />
              </Suspense>
            }
          />
          <Route
            path="/tra-cuu"
            element={
              <Suspense fallback={<PageLoading />}>
                <Search title="Tra cứu" />
              </Suspense>
            }
          />
          <Route
            path="/van-ban-phap-luat"
            element={
              <Suspense fallback={<PageLoading />}>
                <Law title="Văn bản pháp luật" />
              </Suspense>
            }
          />
          <Route
            path="/van-ban/:id"
            element={
              <Suspense fallback={<PageLoading />}>
                <ItemDetail title="Chi tiết văn bản" />
              </Suspense>
            }
          />
          <Route
            path="/dang-nhap"
            element={
              <Suspense fallback={<PageLoading />}>
                <SignIn title="Đăng nhập" />
              </Suspense>
            }
          />
          <Route
            path="/dang-ky"
            element={
              <Suspense fallback={<PageLoading />}>
                <SignUp title="Đăng ký" />
              </Suspense>
            }
          />
          <Route
            path="/quen-mat-khau"
            element={
              <Suspense fallback={<PageLoading />}>
                <ForgotPassword title="Quên mật khẩu" />
              </Suspense>
            }
          />
          <Route
            path="/doi-mat-khau"
            element={
              <Suspense fallback={<PageLoading />}>
                <ChangePassword title="Đổi mật khẩu" />
              </Suspense>
            }
          />
          <Route element={<AuthLayout />}>
            <Route
              path="/tai-khoan"
              element={
                <Suspense fallback={<PageLoading />}>
                  <Account title="Tài khoản" />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
