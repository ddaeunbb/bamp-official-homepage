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
        <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
          <div className="hidden relative max-sm:block mx-auto">
            <img
              className="w-52"
              src="/career/history/history-speechballon-small.png"
            />
          </div>
          <div className="relative">
            <img
              className="w-52 max-sm:hidden"
              src="/career/history/history-speechballon-big.png"
            />
          </div>
          <img
            className="w-60 max-sm:mx-auto max-sm:w-56"
            src="/career/history/history-boy.png"
          />
        </div>

        <Horizon />

        <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-20">
          <HistoryBirth />
          <HistorySymbol />
          <HistoryBamdi />
        </section>
      </motion.div>
    </div>
  );
}
