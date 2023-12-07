import HistoryAiFile from '@/assets/history/historyAiFile.svg?react';
import HistoryImageFile from '@/assets/history/historyImageFile.svg?react';
export default function HistoryDownload() {
  return (
    <div className="pt-8 flex justify-center">
      <HistoryImageFile />
      <div className="w-10"></div>
      <HistoryAiFile />
    </div>
  );
}
