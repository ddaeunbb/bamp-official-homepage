import Bamdi from '@/assets/history/Bamdi.svg?react';
import BamdiColor from '@/assets/history/BamdiColor.svg?react';
import BamdiExpressions from '@/assets/history/BamdiExpressions.svg?react';
import BamdiTurn from '@/assets/history/BamdiTurn.svg?react';
export default function HistoryBamdi() {
  return (
    <section className="pb-8">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-3/6">
          <div className="w-full flex flex-col pt-4 rounded-lg justify-normal">
            <h2 className="text-2xl font-semibold max-sm:w-full">
              밤프의 마스코트: 밤디
            </h2>
            <h2 className="mt-2">
              귀여운 밤프의 마스코트, ‘밤디'를 소개합니다! 밤디는 밤프의 로고를
              본 따 만들어졌으며,
            </h2>
            <h2>
              우리와 같은 대학생입니다. 어느덧 5년 째 밤프와 함께하는, 할 땐하고
              놀 땐 노는 열정 넘치는 친구랍니다.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4">
        <div className="lg:w-1/2 h-24 bg-gray-200 rounded-lg flex flex-col justify-center">
          <h2 className="pl-4 pb-2 font-bold">
            Q. 밤디의 머리 위가 노란색인 이유는?
          </h2>
          <h2 className="pl-4">
            A. 항상 머릿속에 아이디어를 만드는 전구가 켜져있기 때문! (공모전
            마감 시즌엔 가끔 과열된다는 소문도...)
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2">
          <div className="flex flex-row h-[600px] mt-4 border-2 border-black p-3 rounded-lg">
            <div className="flex w-1/3 items-center justify-center">
              <div>
                <Bamdi />
              </div>
            </div>
            <div className="flex w-2/3 flex-col justify-center">
              <div className="flex">
                <BamdiColor />
              </div>
              <div className="flex">
                <BamdiExpressions />
              </div>
              <div className="flex">
                <BamdiTurn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
