import { motion } from 'framer-motion';
import { useState } from 'react';
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
        <div className="pt-4 w-screen flex justify-center max-sm:flex-col">
          <img
            className="w-[600px] max-sm:hidden"
            src="/career/award/career-girl.webp"
            alt="상을 들고 있는 캐릭터"
          />
          <img
            className="w-[300px] hidden max-sm:block mx-auto"
            src="/career/award/career-girl-mobile.webp"
            alt="상을 들고 있는 캐릭터"
          />
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
