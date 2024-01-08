import HistoryMark from '@/assets/history/historyMark.svg?react';
import LogoColor from '@/assets/history/logoColor.svg?react';
import LogoFont from '@/assets/history/logoFont.svg?react';
import LogoHeight from '@/assets/history/logoHeight.svg?react';
import LogoKorEng from '@/assets/history/logoKorEng.svg?react';
import LogoSpace from '@/assets/history/logoSpace.svg?react';
import LogoSpaceVirtical from '@/assets/history/logoSpaceVirtical.svg?react';
import LogoSymbolonly from '@/assets/history/logoSymbolonly.svg?react';
import LogoTypeOnly from '@/assets/history/logoTypeOnly.svg?react';
import LogoWidth from '@/assets/history/logoWidth.svg?react';
import LogoWY from '@/assets/history/logoWY.svg?react';

export default function HistorySymbol() {
  return (
    <section className="pb-8">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-3/6">
          <div className="w-full flex flex-wrap pt-4 rounded-lg justify-normal">
            <h2 className="w-1/2 text-2xl font-semibold max-sm:w-full">
              밤프의 상징, 로고
            </h2>
            <h2 className="mt-2">
              밤프의 로고는 심볼마크와 로고타입으로 이루어져있으며 밤프와 연관된
              모든 커뮤니케이션에 사용됩니다.
            </h2>
            <h2>
              정육면체 상자 모양의 로고는 ‘아이디어 박스’로, 공모전 동아리의
              아이덴티티를 표현했습니다.
            </h2>
            <h2>
              특히 윗면의 노란 색은 언제나 상자 속엔 반짝이는 아이디어가 숨겨져
              있음을 의미합니다.
            </h2>
            <h2>
              로고타입의 경우 노란색 사각형을 포인트로 사용해 시각적인 주목도를
              높였습니다.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex pt-4 items-center justify-center">
        <div className="flex flex-wrap w-1/2 border-2 border-black rounded-lg">
          <div className="flex flex-col w-1/2 h-80 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">가로형</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoWidth />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/2 h-80 border-b-2 border-s-lineLightGray">
            <div className="flex h-1/6 items-center">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">세로형</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center">
              <LogoHeight />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/2 h-80 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">최소 공간 규정</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoSpace />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/2 h-80 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">Logo (Vertical Type)</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center">
              <LogoSpaceVirtical />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/4 h-60 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center pt-3">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">Logo (Kor + Eng)</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoKorEng />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/4 h-60 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center pt-3">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">Symbol Only</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoSymbolonly />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/4 h-60 border-b-2 border-s-lineLightGrayr">
            <div className="flex h-1/6 items-center pt-3">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">Logo Type Only</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoTypeOnly />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/4 h-60 border-b-2">
            <div className="flex h-1/6 items-center pt-3">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">White & Yellow ver</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 border-s-lineLightGray">
              <LogoWY />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/2 h-44 border-s-lineLightGray">
            <div className="flex h-1/6 items-center pt-6">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">색상 규정</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center border-r-2 ">
              <LogoColor className="w-4/5" />
            </div>
            <div className="flex h-1/6"></div>
          </div>
          <div className="flex flex-col w-1/2 h-44 border-b-2 border-s-lineLightGray">
            <div className="flex h-1/6 items-center pt-6">
              <h2 className="pl-4"></h2>
              <HistoryMark /> <h2 className="pl-2">폰트 규정</h2>
            </div>
            <div className="flex h-4/6 justify-center items-center">
              <LogoFont className="w-4/5" />
            </div>
            <div className="flex h-1/6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
