import { Link } from 'react-router-dom';
import MoreBtn from '@/components/button/MoreBtn';
import { PATH } from '@/routers/path';

export default function ThirdSection() {
  // rel="tag"
  return (
    <main className="py-32 relative" role="밤프만의 강점소개">
      <img
        className="w-44 absolute top-10 left-10 max-md:left-1 max-lg:hidden"
        src="/home/bamp-box.gif"
        alt="박스안에 전구"
      />
      <img
        className="w-32 absolute top-[640px] right-10 max-lg:hidden"
        src="/home/awardPresent.svg"
        alt="어워드상"
      />
      <div className="mx-auto text-center flex flex-col gap-y-2 max-sm:gap-y-1 mb-20 max-sm:mb-5">
        <h2 className="font-extrabold text-3xl max-sm:text-2xl">
          다른 어느 곳보다
        </h2>
        <h2 className="font-extrabold text-3xl max-sm:text-2xl">
          BAMP여야 하는 이유
        </h2>
      </div>

      <div
        className="flex flex-col gap-y-14 max-md:gap-y-32"
        role="강점들 나열하는 곳">
        <div className="w-screen flex justify-center">
          <div
            className="gap-x-16 flex justify-between max-md:flex-col max-lg:gap-x-10"
            role="첫번째 강점">
            <img
              className="w-96"
              src="/home/since2006.gif"
              alt="상을 들고 웃고있는 밤프인"
            />
            <div className="w-96 flex flex-col justify-center items-center gap-y-8 max-md:gap-y-4">
              <picture>
                <source
                  className="w-72"
                  srcSet="/home/since2006.webp"
                  type="image/webp"
                />
                <img
                  className="w-72"
                  src="/home/since2006.svg"
                  alt="2006년 부터"
                />
              </picture>
              <span className="text-lg font-bold">오늘까지 이어진 이야기</span>
              <button className="mt-2 block relative">
                <MoreBtn />
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen flex justify-center">
          <div
            className="flex justify-between max-md:flex-col gap-x-16 max-lg:gap-x-10"
            role="두번째 강점">
            <div className="w-96 flex flex-col justify-center items-center gap-y-8 max-md:hidden">
              <picture>
                <source
                  className="w-72"
                  srcSet="/home/500people.webp"
                  type="image/webp"
                />
                <img className="w-72" src="/home/500people.svg" alt="500명" />
              </picture>
              <span className="text-lg font-bold">밤프와 함께한 사람들</span>
              <button className="mt-2 block relative">
                <MoreBtn />
              </button>
            </div>
            <img
              className="w-96"
              src="/home/500people.gif"
              alt="웃고 서있는 두 명의 밤프인"
            />
            <div className="w-96 hidden flex-col justify-center items-center max-md:flex max-md:gap-y-4">
              <picture>
                <source
                  className="w-72"
                  srcSet="/home/500people.webp"
                  type="image/webp"
                />
                <img className="w-72" src="/home/500people.svg" alt="500명" />
              </picture>
              <span className="text-lg font-bold">밤프와 함께한 사람들</span>
              <button className="mt-2 block relative">
                <MoreBtn />
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen flex justify-center">
          <div
            className="flex justify-between max-md:flex-col gap-x-16 max-lg:gap-x-10"
            role="세번째 강점">
            <img
              className="w-96"
              src="/home/award.gif"
              alt="상을 들고 웃고있는 밤프인"
            />
            <div className="w-96 flex flex-col justify-center items-center gap-y-8 max-md:gap-y-4">
              <img className="w-72" src="/home/200times.svg" alt="200회 이상" />
              <span className="text-lg font-bold">
                탄탄한 수상이 증명하는 실력
              </span>
              <Link to={PATH.careerAward} className="mt-2">
                <MoreBtn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
