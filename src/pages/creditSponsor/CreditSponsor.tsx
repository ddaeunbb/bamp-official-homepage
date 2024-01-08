import BamsaneungBoy from '@/assets/credit/bamsaneung/bamsaneung-boy.svg?react';
import BigSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-big.svg?react';
import SmallSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-small.svg?react';
import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.creditBamsaneung, PATH.creditSponsor]}
        tabNameArr={[PATH_NAME.bamsaneung, PATH_NAME.sponsor]}
      />
      <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
        <BamsaneungBoy className="w-44 max-sm:hidden" />
        <div className="hidden relative max-sm:block mx-auto">
          <SmallSpeechBalloon className="w-52" />
        </div>

        <div className="relative">
          <BigSpeechBalloon className="w-52 max-sm:hidden" />
        </div>
        <BamsaneungBoy className="hidden w-44 max-sm:block max-sm:mx-auto max-sm:mt-5" />
      </div>
      <Horizon />

      <div className="flex flex-col items-center justify-center gap-y-5 max-sm:w-full max-sm:mt-8">
        <div className="mt-14">
          <h2 className="font-extrabold text-4xl">
            누구나 할 수 있기에, WHO ￦입니다.
          </h2>
        </div>

        <div>
          <span className="text-xs text-gray-400">
            2023.12 기준 후원자 분들
          </span>
        </div>
      </div>
      <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-20">
        <div className="flex flex-row w-full ">
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full h-full">
              <img
                className="w-2/3 h-auto float-right"
                src="/credit/sponsor/sponser-greet-bamdi.png"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="flex flex-col justify-center gap-y-3">
              <h2>19기</h2>
              <h2>20기</h2>
              <h2>22기</h2>
              <h2>24기</h2>
              <h2>27기</h2>
              <h2>28기</h2>
              <h2>29기</h2>
              <h2>30기</h2>
              <h2>31기</h2>
              <h2>32기</h2>
            </div>
            <div className="flex flex-col justify-center gap-y-3 ml-12">
              <h2>심인용</h2>
              <h2>최광래</h2>
              <h2>강수진 문다솜</h2>
              <h2>김진우 장홍성</h2>
              <h2>김진영 김준용</h2>
              <h2>이지예 강하림</h2>
              <h2>동주용 이승수 최규환</h2>
              <h2>박준석</h2>
              <h2>이서현</h2>
              <h2>오치형</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center gap-y-5 max-sm:w-full max-sm:mt-12">
        <div className="mt-20">
          <h2 className="font-extrabold text-4xl">후원하기</h2>
        </div>

        <div>
          <span className="text-xs">밤프를 위한 소중한 후원 감사드립니다.</span>
        </div>
        <img className="w-3/5 h-auto" src="/credit/sponsor/sponser-pig.png" />
      </div>
    </div>
  );
}
