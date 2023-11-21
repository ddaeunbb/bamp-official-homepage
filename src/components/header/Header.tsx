import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from '@/components/header/Tab';
import { PATH_NAME, PATH } from '@/routers/path';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? 'header grow' : 'header'}>
      <div className="w-20">
        <Link to={'/'}>
          <img src="/header/Logo.png" />
        </Link>
      </div>
      <div
        className="flex gap-x-16"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Tab title={PATH_NAME.career} tabNames={PATH.career} />
        <Tab title={PATH_NAME.credit} tabNames={PATH.credit} />
      </div>
    </header>
  );
}
