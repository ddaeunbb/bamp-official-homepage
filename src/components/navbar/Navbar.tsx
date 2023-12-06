import { Link, useLocation } from 'react-router-dom';
import NavBtn from '@/components/navbar/NavBtn';
import NavBarBackground from '@/components/navbarBg/NavBarBackground';

interface NavBarProps {
  urlArr: string[];
  tabNameArr: string[];
}

export default function Navbar({ urlArr, tabNameArr }: NavBarProps) {
  const location = useLocation();

  return (
    <>
      <NavBarBackground />
      <div className="relative w-screen flex justify-center">
        <nav className="absolute bottom-[24px] w-full flex justify-center">
          {urlArr.map((url, idx) => (
            <Link
              to={url}
              key={url}
              className="transition-shadow hover:shadow-md rounded w-60 h-[52px] py-3 bg-white border-2 border-black flex justify-center max-sm:grow">
              <NavBtn
                tabName={tabNameArr[idx]}
                isCurTab={location.pathname === url}
              />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
