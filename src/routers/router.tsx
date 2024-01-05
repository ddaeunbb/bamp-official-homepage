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
        lazy: () => import('@/pages/careerHistory/CareerHistory'),
      },
      {
        path: PATH.newsStory,
        lazy: () => import('@/pages/newsStory/NewsStory'),
      },
      {
        path: PATH.newsVideo,
        lazy: () => import('@/pages/newsVideo/NewsVideo'),
      },
      {
        path: PATH.creditSponsor,
        lazy: () => import('@/pages/creditSponsor/CreditSponsor'),
      },
      {
        path: PATH.creditBamsaneung,
        lazy: () => import('@/pages/creditBamsaneung/CreditBamsaneung'),
      },
    ],
  },
]);

export default router;
