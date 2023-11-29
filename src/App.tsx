import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollToTop from '@/components/scrollTop/ScrollTop';

function App() {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}

export default App;
