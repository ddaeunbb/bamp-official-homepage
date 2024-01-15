import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { YOUTUBE_LINK } from '@/constants/link';
import { YOUTUBE_TITLE } from '@/constants/videoDetail';

interface ModalProps {
  cardinal: keyof typeof YOUTUBE_LINK;
  modalHandler: () => void;
  setCurCardinal: React.Dispatch<
    React.SetStateAction<keyof typeof YOUTUBE_LINK>
  >;
}

const variants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
};

export default function Modal({
  cardinal,
  modalHandler,
  setCurCardinal,
}: ModalProps) {
  // 모달 열릴시, 스크롤 방지
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    body.classList.add('no-scroll');

    return () => {
      body.classList.remove('no-scroll');
    };
  }, []);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [cardinal]);

  const cardinalKeys: Array<keyof typeof YOUTUBE_LINK> = Object.keys(
    YOUTUBE_LINK,
  ) as Array<keyof typeof YOUTUBE_LINK>;

  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#262626] bg-opacity-70 flex items-end"
      onClick={() => modalHandler()}>
      <motion.div
        className="modal"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        onClick={(e) => onClickHandler(e)}
        ref={divRef}>
        <div className="w-[900px] max-lg:w-[660px] max-md:w-[500px] max-sm:w-[426px] h-max py-14 flex flex-col gap-y-5 max-sm:px-8">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-2xl">{`[BAMP ${cardinal}기 홍보영상]`}</h2>
              <span className="mt-2 block">{YOUTUBE_TITLE[cardinal]}</span>
            </div>
            <button
              className="block h-9 cursor-pointer"
              onClick={() => modalHandler()}>
              <img
                src="/news/video/close.webp"
                className="h-full"
                alt="엑스 아이콘"
              />
            </button>
          </div>
          <div className="w-full h-[480px] max-lg:h-[480px] max-md:h-[360px] max-sm:h-[240px]">
            <ReactPlayer
              width={'100%'}
              height={'100%'}
              url={YOUTUBE_LINK[cardinal]}
              controls={true}
            />
          </div>

          <hr className="my-4 text-lightGray w-full mx-auto" />

          <h3 className="text-xl font-semibold">다른 홍보 영상 보기</h3>

          <ul className="max-sm:w-10/12 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-3 gap-y-3 mx-auto">
            {cardinalKeys
              .filter((el) => el !== cardinal)
              .map((filtered) => (
                <li
                  key={filtered}
                  className="rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transition-transform"
                  onClick={() => setCurCardinal(filtered)}>
                  <img
                    src={`/news/video/thumbnail-${filtered}.webp`}
                    alt="유튜브썸네일"
                    width={292}
                    height={164}
                  />
                  <span className="pt-2 block pl-2 text-sm">
                    [BAMP{filtered}기 홍보영상]
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
