import { YOUTUBE_LINK } from '@/constants/link';

interface VideoThumbnailProps {
  cardinal: keyof typeof YOUTUBE_LINK;
  modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
  cardinalHandler: React.Dispatch<
    React.SetStateAction<keyof typeof YOUTUBE_LINK>
  >;
}

export default function VideoThumbnail({
  cardinal,
  modalHandler,
  cardinalHandler,
}: VideoThumbnailProps) {
  const onClickHandler = () => {
    cardinalHandler(cardinal);
    modalHandler(true);
  };

  return (
    <li
      className="cursor-pointer col-span-1 rounded-2xl overflow-hidden video"
      onClick={onClickHandler}>
      <div className="w-full bg-[#D9D9D9] object-fill">
        <img
          className="w-full"
          src={`/news/video/thumbnail-${cardinal}.webp`}
          alt="유튜브썸네일"
        />
      </div>
      <div className="w-full h-12 flex items-center pl-5 ">
        <span className="text-sm font-semibold">
          [BAMP {cardinal}기 홍보영상]
        </span>
      </div>
    </li>
  );
}
