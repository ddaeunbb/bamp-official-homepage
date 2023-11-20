import { Link } from 'react-router-dom';
import LoginBtn from '@/components/header/LoginBtn';
import Tab from '@/components/header/Tab';

export default function Header() {
  return (
    <header className="py-3 lg:px-44 md:px-20 sm:px-10 max-sm:px-4 flex items-end w-full bg-white/40 backdrop-blur-lg fixed z-50 border-b border-neutral-200">
      <nav className="w-full flex items-center justify-between">
        <Link to={'/'}>
          <img
            src="/header/Logo.png"
            className="h-5 cursor-pointer"
            alt="밤프로고"
          />
        </Link>
        <div className="flex gap-x-5 items-center">
          <Tab tabName="커리어" />
          <Tab tabName="밤프 소식" />
          <Tab tabName="지원하기" />
          <Tab tabName="밤프인 광장" />
          <Tab tabName="크레딧" />
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}
