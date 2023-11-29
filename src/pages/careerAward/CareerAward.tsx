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
      <div className="pt-8 w-screen flex justify-center">
        <img className="w-60" src="/careerAward/careerAward1.svg" />
        <div className="relative">
          <img className="w-52" src="/careerAward/careerAward2.svg" />
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
