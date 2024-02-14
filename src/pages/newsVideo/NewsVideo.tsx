import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from '@/components/modal/Modal';
import Navbar from '@/components/navbar/Navbar';
import VideoThumbnail from '@/components/videoThumbnail/VideoThumbnail';
import { YOUTUBE_LINK } from '@/constants/link';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [curCardinal, setCurCardinal] =
    useState<keyof typeof YOUTUBE_LINK>('30');

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            cardinal={curCardinal}
            modalHandler={() => setIsModalOpen(false)}
            setCurCardinal={setCurCardinal}
          />
        )}
      </AnimatePresence>

      <div className="pb-24 h-max">
        <Navbar
          urlArr={[PATH.newsStory, PATH.newsVideo]}
          tabNameArr={[PATH_NAME.story, PATH_NAME.video]}
        />

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{ duration: 0.3 }}>
          <ul className="mt-14 max-w-[60rem] max-md:w-11/12 max-sm:w-3/4 mx-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-6 max-md:gap-x-3">
            <VideoThumbnail
              cardinal="36"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="35"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="34"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="33"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="32"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="31"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
            <VideoThumbnail
              cardinal="30"
              modalHandler={setIsModalOpen}
              cardinalHandler={setCurCardinal}
            />
          </ul>
        </motion.div>
      </div>
    </>
  );
}
