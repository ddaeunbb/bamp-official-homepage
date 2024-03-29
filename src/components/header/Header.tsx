import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@/components/header/Tab';
import { BAMP_LINK } from '@/constants/link';
import { PATH_NAME, PATH_LIST, PATH } from '@/routers/path';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={isOpen ? 'header grow' : 'header'}>
      <Link to={PATH.home} className="self-start pt-2">
        <img className="w-20 " src="/header/logo.png" alt="밤프로고" />
      </Link>

      <div
        className="flex gap-x-8 max-md:gap-x-6 self-start"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Tab title={PATH_NAME.career} tabNames={PATH_LIST.career} />
        <Tab title={PATH_NAME.news} tabNames={PATH_LIST.news} />
        <Tab title={PATH_NAME.credit} tabNames={PATH_LIST.credit} />
        <a href={BAMP_LINK.apply} target="_blank">
          <button className="h-max font-bold px-6 bg-defaultYellow rounded-3xl text-white py-2 text-sm  hover:bg-white hover:text-defaultYellow transition-colors">
            지원하기
          </button>
        </a>
      </div>
    </header>
  );
}
