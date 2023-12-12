import { Suspense } from 'react';
import Loading from '@components/Loading';
import loadable from '@loadable/component';
import BasicLayout from './layouts/BasicLayout';
import { Route, Routes } from 'react-router-dom';

const NotFound = loadable(() => import('@components/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
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
  );
}
