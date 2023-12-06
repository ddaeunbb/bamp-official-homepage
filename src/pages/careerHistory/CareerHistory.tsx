import HistoryAiFile from '@/assets/history/historyAiFile.svg?react';
import HistoryImageFile from '@/assets/history/historyImageFile.svg?react';
import Horizon from '@/components/horizon/Horizon.tsx';
import Navbar from '@/components/navbar/Navbar';
import HistoryBamdi from '@/pages/careerHistory/HistoryBamdi.tsx';
import HistoryBirth from '@/pages/careerHistory/HistoryBirth.tsx';
import HistorySymbol from '@/pages/careerHistory/HistorySymbol.tsx';
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
      <HistoryBirth />
      <HistorySymbol />
      <div className="pt-8 flex justify-center">
        <HistoryImageFile />
        <div className="w-10"></div>
        <HistoryAiFile />
      </div>
      <HistoryBamdi />
      <div className="pt-8 flex justify-center">
        <HistoryImageFile />
        <div className="w-10"></div>
        <HistoryAiFile />
      </div>
    </div>
  );
}
