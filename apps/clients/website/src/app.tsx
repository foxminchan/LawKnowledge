/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Suspense } from 'react';
import loadable from '@loadable/component';
import AuthLayout from '@layouts/AuthLayout';
import BasicLayout from '@layouts/BasicLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, PageLoading } from '@ant-design/pro-components';

const Law = loadable(() => import('@features/Law'));
const Home = loadable(() => import('@features/Home'));
const Chat = loadable(() => import('@features/Chat'));
const Item = loadable(() => import('@/features/Item'));
const Items = loadable(() => import('@/features/Items'));
const Search = loadable(() => import('@features/Search'));
const SignIn = loadable(() => import('@features/SignIn'));
const SignUp = loadable(() => import('@features/SignUp'));
const NotFound = loadable(() => import('@components/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/hoi-dap"
            errorElement={<ErrorBoundary />}
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
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <Home title="Trang chủ" />
              </Suspense>
            }
          />
          <Route
            path="/tra-cuu"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <Search title="Tra cứu" />
              </Suspense>
            }
          />
          <Route
            path="/van-ban-phap-luat"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <Law title="Văn bản pháp luật" />
              </Suspense>
            }
          />
          <Route
            path="/van-ban/:id"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <Item title="Chi tiết văn bản" />
              </Suspense>
            }
          />
          <Route
            path="/van-ban"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <Items title="Danh sách văn bản" />
              </Suspense>
            }
          />
          <Route
            path="/dang-nhap"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <SignIn title="Đăng nhập" />
              </Suspense>
            }
          />
          <Route
            path="/dang-ky"
            errorElement={<ErrorBoundary />}
            element={
              <Suspense fallback={<PageLoading />}>
                <SignUp title="Đăng ký" />
              </Suspense>
            }
          />
          <Route
            path="*"
            errorElement={<ErrorBoundary />}
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
