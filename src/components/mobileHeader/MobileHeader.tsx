import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BAMP_LINK } from '@/constants/link';
import { PATH } from '@/routers/path';

export default function MobileHeader() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [tab1, setTab1] = useState<boolean>(false);
  const [tab2, setTab2] = useState<boolean>(false);
  const [tab3, setTab3] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setTab1(false);
      setTab2(false);
      setTab3(false);
    };
  }, [isHamburgerOpen]);

  const onClickTab = (tab: number) => {
    if (tab === 1) {
      setTab1(true);
      setTab2(false);
      setTab3(false);
    } else if (tab === 2) {
      setTab1(false);
      setTab2(true);
      setTab3(false);
    } else {
      setTab1(false);
      setTab2(false);
      setTab3(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isHamburgerOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="w-screen h-screen bg-defaultYellow fixed z-50 justify-center items-center text-center max-sm:flex hidden">
            <button
              className="absolute right-8 top-8"
              onClick={() => setIsHamburgerOpen(false)}>
              <img src="/header/mobile-closebtn.png" className="w-8" />
            </button>

            <ul className="flex flex-col gap-y-12">
              <Link to={PATH.home} onClick={() => setIsHamburgerOpen(false)}>
                <li>
                  <img className="w-28" src="/header/logo.png" />
                </li>
              </Link>

              <li
                className="font-semibold text-xl flex flex-col gap-y-4 cursor-pointer transition-all"
                onClick={() => onClickTab(1)}>
                <h2>커리어</h2>
                {tab1 && (
                  <>
                    <Link
                      to={PATH.careerHistory}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        밤프 히스토리
                      </span>
                    </Link>
                    <Link
                      to={PATH.careerAward}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        수상실적
                      </span>
                    </Link>
                  </>
                )}
              </li>

              <li
                className="font-semibold text-xl flex flex-col gap-y-4 cursor-pointer transition-all"
                onClick={() => onClickTab(2)}>
                <h2>밤프소식</h2>
                {tab2 && (
                  <>
                    <Link
                      to={PATH.newsStory}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        밤프인 스토리
                      </span>
                    </Link>
                    <Link
                      to={PATH.newsVideo}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        홍보영상
                      </span>
                    </Link>
                  </>
                )}
              </li>

              <li
                className="font-semibold text-xl flex flex-col gap-y-4 cursor-pointer transition-all"
                onClick={() => onClickTab(3)}>
                <h2>크레딧</h2>
                {tab3 && (
                  <>
                    <Link
                      to={PATH.creditBamsaneung}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        밤사능
                      </span>
                    </Link>
                    <Link
                      to={PATH.creditSponsor}
                      onClick={() => setIsHamburgerOpen(false)}>
                      <span className="font-normal text-base block">
                        후원문의
                      </span>
                    </Link>
                  </>
                )}
              </li>

              <li>
                <a
                  href={BAMP_LINK.apply}
                  target="_blank"
                  className="border-[1.5px] border-xl border-black py-3 px-5 rounded-[30px]">
                  지원하기
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="mobile-header">
        <Link to={PATH.home}>
          <img className="w-20" src="/header/logo.png" alt="밤프로고" />
        </Link>

        <button className="w-5" onClick={() => setIsHamburgerOpen(true)}>
          <img src="/header/mobile-header.png" />
        </button>
      </header>
    </>
  );
}
