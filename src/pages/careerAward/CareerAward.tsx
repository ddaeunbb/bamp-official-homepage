import { useState } from 'react';
import CareerAward1 from '@/assets/career/careerAward1.svg?react';
import CareerAward2 from '@/assets/career/careerAward2.svg?react';
import CareerAward3 from '@/assets/career/careerAward3.svg?react';
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
      <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
        <div className="hidden relative max-sm:block mx-auto">
          <CareerAward3 className="w-52" />
        </div>
        <CareerAward1 className="w-60 max-sm:mx-auto max-sm:w-56" />
        <div className="relative">
          <CareerAward2 className="w-52 max-sm:hidden" />
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
    </div>
  );
}
