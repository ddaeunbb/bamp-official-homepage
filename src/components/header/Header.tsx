import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@/components/header/Tab';
import { PATH_NAME, PATH_LIST, PATH } from '@/routers/path';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? 'header grow' : 'header'}>
      <Link to={PATH.home}>
        <img className="w-20" src="/header/logo.svg" alt="밤프로고" />
      </Link>

      <div
        className="flex gap-x-16"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Tab title={PATH_NAME.career} tabNames={PATH_LIST.career} />
        <Tab title={PATH_NAME.credit} tabNames={PATH_LIST.credit} />
      </div>
    </header>
  );
}
