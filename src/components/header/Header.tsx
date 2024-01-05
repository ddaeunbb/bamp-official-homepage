import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@/components/header/Tab';
import { BAMP_LINK } from '@/constants/link';
import { PATH_NAME, PATH_LIST, PATH } from '@/routers/path';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={isOpen ? 'header grow' : 'header'}>
      <Link to={PATH.home} className="self-start">
        <picture>
          <source
            className="w-20"
            srcSet="/header/logo.png"
            media="(max-width: 586px)"
          />
          <img className="w-20 " src="/header/logo.svg" alt="밤프로고" />
        </picture>
      </Link>

      <div
        className="flex gap-x-12 max-md:gap-x-4 self-start"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Tab title={PATH_NAME.career} tabNames={PATH_LIST.career} />
        <Tab title={PATH_NAME.news} tabNames={PATH_LIST.news} />
        <Tab title={PATH_NAME.credit} tabNames={PATH_LIST.credit} />
      </div>
      <a className="self-start" href={BAMP_LINK.apply} target="_blank">
        <button className="h-max font-bold px-5 bg-defaultYellow rounded-2xl text-white py-1 text-sm  hover:bg-white hover:text-defaultYellow transition-colors">
          지원하기
        </button>
      </a>
    </header>
  );
}
