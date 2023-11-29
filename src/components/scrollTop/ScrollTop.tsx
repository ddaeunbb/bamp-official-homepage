import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollTopProps {
  children: ReactNode;
}

export default function ScrollToTop({ children }: ScrollTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Scrolling to top');
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
