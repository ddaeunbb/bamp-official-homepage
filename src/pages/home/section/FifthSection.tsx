import { Link } from 'react-router-dom';
import MoreBtn from '@/components/button/MoreBtn';
import { PATH } from '@/routers/path';

export default function FifthSection() {
  return (
    <aside className="h-[340px] bg-defaultYellow flex justify-center items-center gap-x-5 max-md:flex-col max-md:h-max max-md:pt-24">
      <div className="hidden flex-col gap-y-1 max-md:flex max-md:items-center text-center">
        <h2 className="text-2xl font-bold">밤프가 끝나도</h2>
        <h2 className="text-2xl font-bold">밤프에 진심인 사람들</h2>
        <Link to={PATH.creditBamsaneung} rel="tag">
          <MoreBtn />
        </Link>
      </div>
      <div className="flex h-full items-end">
        <source
          srcSet="/home/bamdi.webp"
          media="(max-width: 586px)"
          type="image/webp"
        />
        <img className="w-96" src="/home/bamdi.svg" alt="웃고있는 밤디" />
      </div>
      <div className="flex flex-col gap-y-1 max-md:hidden">
        <h2 className="text-2xl font-bold">밤프가 끝나도</h2>
        <h2 className="text-2xl font-bold mb-5">밤프에 진심인 사람들</h2>
        <Link to={PATH.creditBamsaneung} rel="tag">
          <MoreBtn />
        </Link>
      </div>
    </aside>
  );
}
