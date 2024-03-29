import DownloadBtn from '@/utils/DownloadBtn';

export default function HistoryBamdi() {
  return (
    <article>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">밤프의 마스코트: 밤디</h2>
        <div className="flex flex-col mt-3 font-normal">
          <span className="inline-block">
            귀여운 밤프의 마스코트, ‘밤디'를 소개합니다! 밤디는 밤프의 로고를
            본떠 만들어졌으며,
          </span>
          <span className="inline-block">
            우리와 같은 대학생입니다. 어느덧 5년째 밤프와 함께하는, 할 땐 하고
            놀 땐 노는 열정 넘치는 친구랍니다.
          </span>
        </div>
      </div>

      <div className="mt-3 w-full bg-[#FFF2AE] rounded-[5px] py-3 px-5">
        <div className="flex flex-col font-normal gap-y-1">
          <span className="font-medium inline-block">
            Q. 밤디의 머리 위가 노란색인 이유는?
          </span>
          <span className="inline-block">
            A. 항상 머릿속에 아이디어를 만드는 전구가 켜져있기 때문! (공모전
            마감 시즌엔 가끔 과열된다는 소문도...)
          </span>
        </div>
      </div>

      <div className="mt-7 border-[3px] border-black rounded-[5px] p-10 max-md:py-4 max-md:px-0">
        <div className="flex gap-x-5 max-md:hidden">
          <img
            src="/career/history/history-bamdi.webp"
            className="h-96"
            alt="정면의 밤디 캐릭터"
            width={265}
            height={384}
          />
          <img
            src="/career/history/history-bamdi-detail.webp"
            className="h-96"
            alt="밤디의 디테일 이미지"
            width={430}
            height={384}
          />
        </div>
        <div className="max-md:flex flex-col items-center hidden py-5 gap-y-7">
          <img
            src="/career/history/history-bamdi-mobile.webp"
            className="w-72"
            alt="정면의 밤디 캐릭터"
            width={288}
            height={417}
          />
          <img
            src="/career/history/history-bamdi-detail-mobile.webp"
            className="w-72"
            alt="밤디의 디테일 이미지"
            width={288}
            height={257}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-x-14 max-sm:gap-x-3 max-sm:flex-col max-sm:items-center max-sm:gap-y-5">
        <DownloadBtn
          filePath="/download/bamdi/bamd-renewal(2020).ai"
          fileType={'ai'}
        />
        <DownloadBtn
          filePath={'/download/bamdi/bamdi-png.zip'}
          fileType={'img'}
        />
      </div>
    </article>
  );
}
