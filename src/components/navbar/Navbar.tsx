import { Link } from 'react-router-dom';
import NavBtn from '@/components/navbar/NavBtn';

interface NavBarProps {
  urlArr: string[];
  tabNameArr: string[];
}

export default function Navbar({ urlArr, tabNameArr }: NavBarProps) {
  return (
    <div className="mb-12 relative w-screen h-[360px] bg-defaultYellow flex justify-center items-end">
      <nav className="absolute bottom-[-24px] flex gap-x-[0.4px]">
        {urlArr.map((url, idx) => (
          <Link to={url} key={url}>
            <NavBtn tabName={tabNameArr[idx]} />
          </Link>
        ))}
      </nav>
    </div>
  );
}
