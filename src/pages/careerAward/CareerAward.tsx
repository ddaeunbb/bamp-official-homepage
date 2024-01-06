import { motion } from 'framer-motion';
import { useState } from 'react';
import AwardGirl from '@/assets/career/award/award-main-img.svg?react';
import BigSpeechBallon from '@/assets/career/award/award-speechballon-big.svg?react';
import SmallSpeechBallon from '@/assets/career/award/award-speechballon-small.svg?react';
import MoreBtn from '@/components/button/MoreBtn';
import Horizon from '@/components/horizon/Horizon';
import Navbar from '@/components/navbar/Navbar';
import YearAwardList from '@/components/yearAwardList/YearAwardList';
import { AWARD_SET } from '@/constants/award-winning-list';
import { RECENT_YEARS, PAST_YEARS } from '@/constants/yearList';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <SmallSpeechBallon className="w-52" />
          </div>
          <AwardGirl className="w-60 max-sm:mx-auto max-sm:w-56" />
          <div className="relative">
            <BigSpeechBallon className="w-52 max-sm:hidden" />
          </div>
        </div>

        {RECENT_YEARS.map((year, idx) => (
          <YearAwardList year={year} awardList={AWARD_SET[year]} key={idx} />
        ))}

        <div className={isOpen ? 'hidden' : ''}>
          <Horizon />
          <button
            type="button"
            className="block mx-auto mt-14"
            onClick={() => setIsOpen(true)}>
            <MoreBtn />
          </button>
        </div>

        <div className={isOpen ? '' : 'hidden'}>
          {PAST_YEARS.map((year, idx) => (
            <YearAwardList year={year} awardList={AWARD_SET[year]} key={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
