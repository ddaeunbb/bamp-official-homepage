import Navbar from '@/components/navbar/Navbar';
import YearAwardList from '@/components/yearAwardList/YearAwardList';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.careerHistory, PATH.careerAward]}
        tabNameArr={[PATH_NAME.history, PATH_NAME.award]}
      />
      <div className="pt-8 w-screen flex justify-center">
        <img className="w-60" src="/careerAward/careerAward1.svg" />
        <div className="relative">
          <img className="w-48" src="/careerAward/careerAward2.svg" />
        </div>
      </div>
      <hr className="text-lightGray w-[864px] max-lg:w-10/12 max-sm:w-11/12 mx-auto" />
      <YearAwardList />

      <YearAwardList />

      <YearAwardList />
    </div>
  );
}
