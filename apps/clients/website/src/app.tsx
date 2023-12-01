import { Suspense } from 'react';
import loadable from '@loadable/component';
import AuthLayout from './layouts/AuthLayout';
import BasicLayout from './layouts/BasicLayout';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = loadable(() => import('./features/Home'));
const Chat = loadable(() => import('./features/Chat'));
const Guide = loadable(() => import('./features/Guide'));
const Policy = loadable(() => import('./features/Policy'));
const SignUp = loadable(() => import('./features/SignUp'));
const SignIn = loadable(() => import('./features/SignIn'));
const Search = loadable(() => import('./features/Search'));
const Payment = loadable(() => import('./features/Payment'));
const SignOut = loadable(() => import('./features/SignOut'));
const NotFound = loadable(() => import('./components/NotFound'));
const Introduction = loadable(() => import('./features/Introduction'));
const SearchResult = loadable(() => import('./features/SearchResult'));
const OnlineService = loadable(() => import('./features/OnlineService'));
const SignatureService = loadable(() => import('./features/SignatureService'));
const ItemSearchDetail = loadable(() => import('./features/ItemSearchDetail'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/dang-xuat" element={<SignOut />} />
          <Route
            path="/hoi-dap"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Chat title="Hỏi đáp" />
              </Suspense>
            }
          />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<CircularProgress />}>
                <Home title="Trang chủ" />
              </Suspense>
            }
          />
          <Route
            path="/dang-ky"
            element={
              <Suspense fallback={<CircularProgress />}>
                <SignUp title="Đăng ký" />
              </Suspense>
            }
          />
          <Route
            path="/dang-nhap"
            element={
              <Suspense fallback={<CircularProgress />}>
                <SignIn title="Đăng nhập" />
              </Suspense>
            }
          />
          <Route
            path="/tra-cuu"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Search title="Tra cứu" />
              </Suspense>
            }
          />
          <Route
            path="/gioi-thieu"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Introduction title="Giới thiệu" />
              </Suspense>
            }
          />
          <Route
            path="/thanh-toan-truc-tuyen"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Payment title="Thanh toán trực tuyến" />
              </Suspense>
            }
          />
          <Route
            path="/thu-tuc-hanh-chinh"
            element={
              <Suspense fallback={<CircularProgress />}>
                <SearchResult title="Thủ tục hành chính" />
              </Suspense>
            }
          />
          <Route
            path="/dieu-khoan-su-dung"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Policy title="Điều khoản sử dụng" />
              </Suspense>
            }
          />
          <Route
            path="/dich-vu-cong-noi-bat"
            element={
              <Suspense fallback={<CircularProgress />}>
                <SignatureService title="Dịch vụ công nổi bật" />
              </Suspense>
            }
          />
          <Route
            path="/dich-vu-cong-truc-tuyen"
            element={
              <Suspense fallback={<CircularProgress />}>
                <OnlineService title="Dịch vụ công trực tuyến" />
              </Suspense>
            }
          />
          <Route
            path="/huong-dan-su-dung"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Guide title="Hướng dẫn sử dụng" />
              </Suspense>
            }
          />
          <Route
            path="/chi-tiet-van-ban"
            element={
              <Suspense fallback={<CircularProgress />}>
                <ItemSearchDetail title="Chi tiết văn bản" />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<CircularProgress />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
