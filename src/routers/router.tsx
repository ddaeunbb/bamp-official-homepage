import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/home/Home';
import { PATH } from '@/routers/path';

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <App />,
    children: [
      { path: PATH.home, element: <Home /> },
      {
        path: PATH.careerAward,
        lazy: () => import('@/pages/careerAward/CareerAward'),
      },
      {
        path: PATH.careerHistory,
        lazy: () => import('@/pages/CareerHistory'),
      },
      {
        path: PATH.creditSponsor,
        lazy: () => import('@/pages/CreditSponsor'),
      },
      {
        path: PATH.creditBamsaneung,
        lazy: () => import('@/pages/CreditBamsaneung'),
      },
    ],
  },
]);

export default router;
