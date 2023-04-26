import { Loader } from '@/components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Tweets = lazy(() => import('@/pages/Tweets'));

function App() {
  return (
    <Suspense fallback={<Loader size={150} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
