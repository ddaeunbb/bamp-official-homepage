import { Link, useLocation } from 'react-router-dom';
import NavBtn from '@/components/navbar/NavBtn';
import NavbarBg from '@/components/navbarBg/NavbarBg';

interface NavBarProps {
  urlArr: string[];
  tabNameArr: string[];
}

export default function Navbar({ urlArr, tabNameArr }: NavBarProps) {
  const location = useLocation();

  return (
    <>
      <NavbarBg url={location.pathname} />
      <div className="relative w-screen flex justify-center">
        <div className="absolute bottom-[24px]">
          <table>
            <tr className="flex justify-center border-2 border-black rounded-[5px] overflow-hidden max-sm:w-screen">
              {urlArr.map((url, idx) => (
                <th
                  key={url}
                  className={
                    location.pathname === url
                      ? 'bg-defaultYellow navbar'
                      : 'navbar'
                  }>
                  <Link
                    to={url}
                    className="flex w-full h-full items-center justify-center">
                    <NavBtn
                      tabName={tabNameArr[idx]}
                      isCurTab={location.pathname === url}
                    />
                  </Link>
                </th>
              ))}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
