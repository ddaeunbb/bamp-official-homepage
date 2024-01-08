import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MobileHeader from '@/components/mobileHeader/MobileHeader';
import ScrollToTop from '@/components/scrollTop/ScrollTop';

function App() {
  return (
    <ScrollToTop>
      <MobileHeader />
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}

export default App;
