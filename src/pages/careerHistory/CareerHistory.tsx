import { motion } from 'framer-motion';
import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import HistoryBamdi from '@/pages/careerHistory/section/HistoryBamdi';
import HistoryBirth from '@/pages/careerHistory/section/HistoryBirth';
import HistorySymbol from '@/pages/careerHistory/section/HistorySymbol';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.careerHistory, PATH.careerAward]}
        tabNameArr={[PATH_NAME.history, PATH_NAME.award]}
      />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}>
        <div className="pt-4 w-screen flex justify-center max-sm:flex-col">
          <img
            className="w-[480px] max-sm:hidden"
            src="/career/history/history-boy.webp"
            alt="브이를 하고 있는 캐릭터"
          />
          <img
            className="w-[300px] hidden max-sm:block mx-auto"
            src="/career/history/history-boy-mobile.webp"
            alt="브이를 하고 있는 캐릭터"
          />
        </div>

        <Horizon />

        <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-20">
          <HistoryBirth />
          <HistorySymbol />
          <HistoryBamdi />
          <div className="mx-auto text-sm bg-[#F4F4F4] px-5 py-2 rounded-lg text-[#707070] font-normal flex gap-x-2 items-center justify-center">
            <img
              src="/career/history/history-warning.webp"
              className="w-5"
              alt="경고 아이콘"
            />
            <div className="max-md:flex max-md:flex-col max-md:pl-2">
              <span>*본 페이지 내의 모든 디자인 권리는 밤프에게 있습니다.</span>
              <span>
                밤프의 허락 없이 무단 수정 및 상업적 이용이 금지됩니다.
              </span>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
