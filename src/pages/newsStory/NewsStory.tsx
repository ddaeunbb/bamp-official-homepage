import { useState } from 'react';
import BamsaneungBoy from '@/assets/credit/bamsaneung/bamsaneung-boy.svg?react';
import BigSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-big.svg?react';
import SmallSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-small.svg?react';
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
    <div className="pb-24 h-max scroll-smooth">
      <Navbar
        urlArr={[PATH.newsStory, PATH.newsVideo]}
        tabNameArr={[PATH_NAME.story, PATH_NAME.video]}
      />
      <div className="pt-8 w-screen flex justify-center max-sm:flex-col">
        <BamsaneungBoy className="w-44 max-sm:hidden" />
        <div className="hidden relative max-sm:block mx-auto">
          <SmallSpeechBalloon className="w-52" />
        </div>

        <div className="relative">
          <BigSpeechBalloon className="w-52 max-sm:hidden" />
        </div>
        <BamsaneungBoy className="hidden w-44 max-sm:block max-sm:mx-auto max-sm:mt-5" />
      </div>

      <Horizon />

      <section className="mt-14 max-w-[50rem] max-md:w-11/12 max-sm:w-10/12 mx-auto flex flex-col gap-y-20">
        <div className="w-full flex gap-x-5 justify-center max-sm:gap-x-2">
          {/* // sticky top-20 */}
          <StoryTabBtn content="열정을 넘어선 광기" handler={moveTab1Click} />
          <StoryTabBtn
            content="공모전 뉴비부터 고인물까지"
            handler={moveTab2Click}
          />
          <StoryTabBtn
            content="차곡차곡 쌓이는 성장일기"
            handler={moveTab3Click}
          />
          <StoryTabBtn content="팀플레이의 정석" handler={moveTab4Click} />
        </div>

        {tab1 && <StoryPassion />}
        {tab2 && <StoryNewbieToOB />}
        {tab3 && <StoryGrownUp />}
        {tab4 && <StoryTeamplay />}
      </section>
    </div>
  );
}
