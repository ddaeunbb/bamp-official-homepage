import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  const [isCopyed, setIsCopyed] = useState<boolean>(false);

  useEffect(() => {
    let timeId: number;
    if (isCopyed) {
      timeId = setTimeout(() => setIsCopyed(false), 1500);
    }
    return () => clearTimeout(timeId);
  }, [isCopyed]);

  const handleCopyClipBoard = async (text: string) => {
    try {
      setIsCopyed(true);
      await navigator.clipboard.writeText(text);
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

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}>
        <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
          <img
            className="w-[600px] max-sm:hidden"
            src="/credit/sponsor/sponsor-boy.webp"
            alt="확성기를 들고 있는 캐릭터"
            width={600}
            height={300}
          />
          <img
            className="w-[300px] hidden max-sm:block mx-auto"
            src="/credit/sponsor/sponsor-boy-mobile.webp"
            alt="확성기를 들고 있는 캐릭터"
            width={300}
            height={350}
          />
        </div>

        <Horizon />

        <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-12">
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center gap-x-2 max-sm:flex-col">
              <h2 className="font-extrabold text-3xl max-sm:text-2xl">
                2023.12 기준
              </h2>
              <h2 className="font-extrabold text-3xl max-sm:text-2xl">
                OB 후원자님들
              </h2>
            </div>
          </div>

          <div className="flex justify-center gap-x-10 max-sm:flex-col">
            <img
              className="w-64 self-center max-sm:hidden"
              src="/credit/sponsor/sponser-greet-bamdi.webp"
              alt="인사하는 밤디"
              width={256}
              height={346}
            />
            <img
              className="hidden max-sm:block w-[148px] self-center"
              src="/credit/sponsor/sponser-greet-bamdi-mobile.webp"
              alt="인사하는 밤디"
              width={148}
              height={199}
            />
            <div className="flex gap-x-14 max-sm:text-sm max-sm:gap-x-3 max-sm:mx-auto max-sm:mt-12">
              <div className="font-semibold flex flex-col justify-center gap-y-6 text-lg">
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
              <div className="flex flex-col justify-center gap-y-6 text-lg">
                <h2>심인용</h2>
                <h2>최광래</h2>
                <h2>강수진 문다솜</h2>
                <h2>김진우 장홍성</h2>
                <h2>김진영 김준용</h2>
                <h2>이지예 김하림</h2>
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
            <div className="my-6 hidden max-sm:flex w-full h-[168px] items-center gap-y-4 flex-col justify-center rounded-[10px] bg-[#F4F4F4]">
              <h3 className="text-2xl font-bold">카카오뱅크 정아인</h3>
              <h3 className="text-2xl font-bold">7979-59-34529</h3>
              <span>예금주명은 '기수+성함'으로 남겨주세요.</span>
            </div>
            <img
              className="hidden max-sm:block"
              src="/credit/sponsor/sponsor-pig-mobile.webp"
              alt="돼지 저금통"
              width={533}
              height={408}
            />
            <img
              className="mt-8 w-8/12 max-sm:w-10/12 mx-auto max-sm:hidden"
              src="/credit/sponsor/sponsor-pig.webp"
              alt="돼지 저금통"
              width={440}
              height={337}
            />

            <button
              onClick={() => handleCopyClipBoard('7979-59-34529')}
              className="flex items-center justify-center w-max mt-8 relative mx-auto">
              <AnimatePresence>
                {isCopyed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-white py-3 flex items-center justify-center text-sm font-semibold gap-x-1 border-defaultYellow border rounded-3xl w-[140px]">
                    복사 완료
                    <img
                      src="/credit/sponsor/sponsor-check.webp"
                      className="w-4"
                      alt="체크아이콘"
                    />
                  </motion.span>
                )}
              </AnimatePresence>
              <span className=" bg-defaultYellow py-3 flex items-center justify-center text-sm font-semibold gap-x-1 border-defaultYellow border rounded-3xl w-[140px]">
                계좌 복사하기
              </span>
            </button>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
