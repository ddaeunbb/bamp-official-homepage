import { Link } from 'react-router-dom';
import { PATH_PROP } from '@/routers/path';
interface TabProps {
  title: string;
  tabNames: PATH_PROP;
}

export default function Tab({ title, tabNames }: TabProps) {
  return (
    <div className="text-center">
      <Link to={tabNames[0].path}>
        <span className="hover:font-bold font-bold">{title}</span>
      </Link>
      <ul className="pt-4 text-sm flex flex-col gap-y-3">
        {tabNames.map((value) => {
          const { name, path } = value;
          return (
            <Link key={name} to={path}>
              <li className="hover:text-[#FFD600] hover:font-semibold">
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
