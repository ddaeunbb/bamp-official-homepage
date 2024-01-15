import { motion } from 'framer-motion';
import { useState } from 'react';
import StoryTabBtn from '@/components/button/StoryTabBtn';
import Horizon from '@/components/horizon/Horizon';
import Navbar from '@/components/navbar/Navbar';
import StoryGrownUp from '@/pages/newsStory/section/StoryGrownUp';
import StoryNewbieToOB from '@/pages/newsStory/section/StoryNewbieToOB';
import StoryPassion from '@/pages/newsStory/section/StoryPassion';
import StoryTeamplay from '@/pages/newsStory/section/StoryTeamplay';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  const [tab1, setTab1] = useState<boolean>(true);
  const [tab2, setTab2] = useState<boolean>(false);
  const [tab3, setTab3] = useState<boolean>(false);
  const [tab4, setTab4] = useState<boolean>(false);

  const moveTab1Click = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  };

  const moveTab2Click = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  };

  const moveTab3Click = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  };

  const moveTab4Click = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  };

  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.newsStory, PATH.newsVideo]}
        tabNameArr={[PATH_NAME.story, PATH_NAME.video]}
      />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}>
        <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
          <img
            className="w-[600px] max-sm:hidden"
            src="/news/story/story-boy.webp"
            alt="궁금해 하는 캐릭터"
            width={600}
            height={300}
          />
          <img
            className="w-[300px] hidden max-sm:block mx-auto"
            src="/news/story/story-boy-mobile.webp"
            alt="궁금해 하는 캐릭터"
            width={300}
            height={350}
          />
        </div>

        <Horizon />

        <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-20">
          <div className="w-full overflow-scroll scroll">
            <div className="flex gap-x-5 justify-center max-md:w-max max-md:justify-start max-md:gap-x-2">
              <StoryTabBtn
                content="열정을 넘어선 광기"
                handler={moveTab1Click}
                isClicked={tab1}
              />
              <StoryTabBtn
                content="공모전 뉴비부터 고인물까지"
                handler={moveTab2Click}
                isClicked={tab2}
              />
              <StoryTabBtn
                content="차곡차곡 쌓이는 성장일기"
                handler={moveTab3Click}
                isClicked={tab3}
              />
              <StoryTabBtn
                content="팀플레이의 정석"
                handler={moveTab4Click}
                isClicked={tab4}
              />
            </div>
          </div>

          {tab1 && <StoryPassion />}
          {tab2 && <StoryNewbieToOB />}
          {tab3 && <StoryGrownUp />}
          {tab4 && <StoryTeamplay />}
        </section>
      </motion.div>
    </div>
  );
}
