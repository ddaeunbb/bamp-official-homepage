import DownloadBtn from '@/utils/DownloadBtn';

export default function HistorySymbol() {
  return (
    <article>
      <div>
        <h2 className="text-2xl font-semibold">밤프의 상징, 로고</h2>
        <div className="mt-3 flex flex-col font-normal">
          <span className="inline-block">
            밤프의 로고는 심벌마크와 로고타입으로 이루어져 있으며 밤프와 연관된
            모든 커뮤니케이션에 사용됩니다.
          </span>
          <span className="inline-block">
            정육면체 상자 모양의 로고는 ‘아이디어 박스’로, 공모전 동아리의
            아이덴티티를 표현했습니다.
          </span>
          <span className="inline-block">
            특히 윗면의 노란색은 언제나 상자 속엔 반짝이는 아이디어가 숨겨져
            있음을 의미합니다.
          </span>
          <span className="inline-block">
            로고타입의 경우 노란색 사각형을 포인트로 사용해 시각적인 주목도를
            높였습니다.
          </span>
        </div>
      </div>

      <div className="mt-7 border-black border-[3px] rounded-[5px] flex justify-center items-center py-7">
        <img
          src="/career/history/history-logo-history.webp"
          className="w-11/12 max-sm:hidden"
          alt="밤프 로고 디테일"
        />
        <img
          src="/career/history/history-logo-history-mobile.webp"
          className="hidden max-sm:block w-10/12 py-5"
          alt="밤프 로고 디테일"
        />
      </div>

      <div className="mt-10 flex justify-center gap-x-14 max-sm:gap-x-3 max-sm:flex-col max-sm:items-center max-sm:gap-y-5">
        <DownloadBtn
          filePath="/download/logo/logo-ai(2018).zip"
          fileType={'ai'}
        />
        <DownloadBtn
          filePath="/download/logo/logo-png(2018).zip"
          fileType={'img'}
        />
      </div>
    </article>
  );
}
