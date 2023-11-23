import { Link } from 'react-router-dom';
import MoreBtn from '@/components/button/MoreBtn';
import FifthSection from '@/pages/home/section/FifthSection';
import FirstSection from '@/pages/home/section/FirstSection';
import FourthSection from '@/pages/home/section/FourthSection';
import LastSection from '@/pages/home/section/LastSection';
import SecondSection from '@/pages/home/section/SecondSection';
import { PATH } from '@/routers/path';
export default function Home() {
  return (
    <div className="pt-14 h-screen">
      <FirstSection />
      <SecondSection />

      {/* 세 번째 섹션 */}
      <section className="py-32 relative">
        <img
          className="w-44 absolute top-10 left-10 max-md:left-1 max-lg:hidden"
          src="/home/bamp-box.gif"
        />
        <img
          className="w-32 absolute top-[640px] right-10 max-lg:hidden"
          src="/home/awardPresent.svg"
        />
        <div className="mx-auto text-center flex flex-col gap-y-2 max-sm:gap-y-1 mb-20">
          <h2 className="font-extrabold text-3xl max-sm:text-2xl">
            다른 어느 곳보다
          </h2>
          <h2 className="font-extrabold text-3xl max-sm:text-2xl">
            BAMP여야 하는 이유
          </h2>
        </div>

        <div className="flex flex-col gap-y-14">
          <div className="w-screen flex justify-center">
            <div className="flex justify-between max-md:flex-col gap-x-32 max-lg:gap-x-10">
              <img className="w-96" src="/home/award.gif" />
              <div className="flex flex-col justify-center items-center gap-y-5">
                <img className="w-72" src="/home/since2006.svg" />
                <span className="text-lg font-bold">
                  오늘까지 이어진 이야기
                </span>
                <button className="block relative">
                  <MoreBtn />
                </button>
              </div>
            </div>
          </div>

          <div className="w-screen flex justify-center">
            <div className="flex justify-between max-md:flex-col gap-x-32 max-lg:gap-x-10">
              <div className="flex flex-col justify-center items-center gap-y-5 max-md:hidden">
                <img className="w-72" src="/home/500people.svg" alt="500명" />
                <span className="text-lg font-bold">밤프와 함께한 사람들</span>
                <button className="block relative">
                  <MoreBtn />
                </button>
              </div>
              <img className="w-96" src="/home/500people.gif" />
              <div className="hidden flex-col justify-center items-center gap-y-5 max-md:flex">
                <img className="w-72" src="/home/500people.svg" alt="500명" />
                <span className="text-lg font-bold">밤프와 함께한 사람들</span>
                <button className="block relative">
                  <MoreBtn />
                </button>
              </div>
            </div>
          </div>

          <div className="w-screen flex justify-center">
            <div className="flex justify-between max-md:flex-col gap-x-32 max-lg:gap-x-10">
              <img className="w-96" src="/home/award.gif" />
              <div className="flex flex-col justify-center items-center gap-y-5">
                <img
                  className="w-72"
                  src="/home/200times.svg"
                  alt="200회이상"
                />
                <span className="text-lg font-bold">
                  탄탄한 수상이 증명하는 실력
                </span>
                <Link to={PATH.careerAward}>
                  <MoreBtn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 네 번째 섹션 */}
      <FourthSection />
      {/* 밤프가 끝나도 밤프에 진심인 사람들 */}
      <FifthSection />

      {/* 우리가 더 궁금하다면? BAMP에서 만나요! */}
      <LastSection />
    </div>
  );
}
