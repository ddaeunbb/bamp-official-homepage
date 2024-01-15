import { Link } from 'react-router-dom';
import MoreBtn from '@/components/button/MoreBtn';
import { PATH } from '@/routers/path';

export default function LinkToBamsaneung() {
  return (
    <aside className="h-[340px] bg-defaultYellow flex justify-center items-center gap-x-5 max-md:flex-col max-md:h-max max-md:pt-16">
      <div className="hidden flex-col gap-y-1 max-md:flex max-md:items-center text-center">
        <h2 className="text-2xl font-bold">밤프가 끝나도</h2>
        <h2 className="text-2xl font-bold">밤프에 진심인 사람들</h2>
        <Link className="mt-10" to={PATH.creditBamsaneung} rel="tag">
          <MoreBtn />
        </Link>
      </div>
      <div className="flex h-full items-end">
        <img
          src="/home/home-main-bamdi.webp"
          className="w-96 max-sm:w-80 max-sm:mt-10"
          alt="하트 날리는 밤디"
          width={384}
          height={311}
        />
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
