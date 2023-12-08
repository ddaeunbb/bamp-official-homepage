import LogoHistory from '@/assets/career/history/history-logo.svg?react';

export default function HistoryBirth() {
  return (
    <article>
      <div className="flex flex-col">
        <div>
          <h2 className="text-2xl font-semibold">밤프의 탄생</h2>
          <span className="mt-3 font-normal inline-block">
            2006년, 국내 최초 공모전 동아리 ‘Think Univ’로 시작해, 2011년
            리브랜딩을 거쳐 지금의 BAMP가 되었습니다.
          </span>
          <span className="font-normal inline-block">
            현재 밤프는 500명 이상의 네트워크를 바탕으로 탄탄한 활동을
            이어나가고 있습니다.
          </span>
        </div>

        <div className="mt-7 border-black border-[3px] flex justify-center items-center py-8 rounded-[5px]">
          <LogoHistory className="max-w-md max-sm:max-w-xs" />
        </div>
      </div>
    </article>
  );
}
