import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.careerHistory, PATH.careerAward]}
        tabNameArr={[PATH_NAME.history, PATH_NAME.award]}
      />
      <div className="pt-8 w-screen flex justify-center">
        <div className="relative">
          <img className="w-52" src="/careerHistory/careerHistory2.svg" />
        </div>
        <img className="w-60" src="/careerHistory/careerHistory1.svg" />
      </div>
      <Horizon />
      <section>
        <div className="container px-5 py-8 mx-auto flex items-center justify-center">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10 border-2 border-black p-6 rounded-lg">
              <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                <img
                  className="w-40 mx-auto"
                  src="/careerHistory/bampLogo.svg"
                  alt="BAMP Logo"
                />
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                <p className="leading-relaxed text-lg py-8 text-center sm:text-left">
                  2006년, 국내 최초 공모전 동아리 ‘Think Univ’로 시작해, 2011년
                  리브랜딩을 거쳐 지금의 BAMP가 되었습니다. 현재 밤프는 500명
                  이상의 네트워크를 바탕으로 탄탄한 활동을 이어나가고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
