import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  const [isCopyed, setIsCopyed] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number;
    if (isCopyed) {
      timeoutId = setTimeout(() => setIsCopyed(false), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isCopyed]);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopyed(true);
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

  return (
    <div className="pb-24 h-max relative">
      <Navbar
        urlArr={[PATH.creditBamsaneung, PATH.creditSponsor]}
        tabNameArr={[PATH_NAME.bamsaneung, PATH_NAME.sponsor]}
      />

      <AnimatePresence>
        {isCopyed && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 0 }}
            className="w-36 flex justify-center fixed z-50 right-4 top-20 bg-defaultYellow py-2 rounded-xl border-2 border-black">
            <span className="font-semibold">💛 복사완료 💛</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}>
        <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
          <img className="w-52 max-sm:hidden" src="/credit/credit-boy.png" />

          <div className="hidden relative max-sm:block mx-auto">
            <img className="w-52" src="/credit/credit-speechballon-small.png" />
          </div>

          <div className="relative">
            <img
              className="w-52 max-sm:hidden"
              src="/credit/credit-speechballon-big.png"
            />
          </div>

          <img
            className="hidden w-52 max-sm:block max-sm:mx-auto max-sm:mt-5"
            src="/credit/credit-boy.png"
          />
        </div>

        <Horizon />

        <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-12">
          <div className="flex flex-col justify-center text-center">
            <h2 className="font-extrabold text-3xl max-sm:text-xl">
              누구나 할 수 있기에, WHO ￦입니다.
            </h2>
            <span className="mt-4 text-sm text-gray-400">
              2023.12 기준 후원자 분들
            </span>
          </div>

          <div className="flex justify-center gap-x-10">
            <img
              className="h-64 self-center max-sm:h-28"
              src="/credit/sponsor/sponser-greet-bamdi.png"
            />
            <div className="flex gap-x-10 max-sm:text-sm max-sm:gap-x-3">
              <div className="font-semibold flex flex-col justify-center gap-y-3">
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
              <div className="flex flex-col justify-center gap-y-3">
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

          <div className="mt-8 flex flex-col justify-center text-center">
            <h2 className="font-extrabold text-3xl max-sm:text-2xl">
              후원하기
            </h2>
            <span className="font-normal text-sm mt-4">
              밤프를 위한 소중한 후원 감사드립니다.
            </span>
            <img
              className="mt-8 w-8/12 max-sm:w-10/12 mx-auto"
              src="/credit/sponsor/sponser-pig.png"
            />
            <button
              onClick={() => handleCopyClipBoard('7979-59-34529')}
              className="animate-bounce flex items-center justify-center gap-x-1 px-3 py-2 bg-defaultYellow mx-auto rounded-xl mt-8">
              <span className="font-semibold text-sm">계좌 복사하기</span>
              <img
                className="w-4"
                src="/credit/sponsor/sponsor-clipboard.png"
              />
            </button>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
