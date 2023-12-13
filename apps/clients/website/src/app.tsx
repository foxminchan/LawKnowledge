import { Suspense } from 'react';
import Loading from '@components/Loading';
import loadable from '@loadable/component';
import BasicLayout from './layouts/BasicLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SignIn = loadable(() => import('@features/SignIn'));
const NotFound = loadable(() => import('@components/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route
            path="/dang-nhap"
            element={
              <Suspense fallback={<Loading />}>
                <SignIn title="Đăng nhập" />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
