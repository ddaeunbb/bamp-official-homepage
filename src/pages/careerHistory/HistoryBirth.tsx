import LogoHistory from '@/assets/history/logoHistory.svg?react';

export default function HistoryBirth() {
  return (
    <section className="pb-8">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-3/6">
          <div className="w-full flex flex-col pt-4 rounded-lg justify-normal">
            <h2 className="w-1/4 text-2xl font-semibold max-sm:w-full">
              밤프의 탄생
            </h2>
            <h2 className="mt-2">
              2006년, 국내 최초 공모전 동아리 ‘Think Univ’로 시작해, 2011년
              리브랜딩을 거쳐 지금의 BAMP가 되었습니다.
            </h2>
            <h2 className="text">
              현재 밤프는 500명 이상의 네트워크를 바탕으로 탄탄한 활동을
              이어나가고 있습니다.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2">
          <div className="flex mt-4 border-2 border-black p-3 rounded-lg justify-center">
            <LogoHistory className="h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
