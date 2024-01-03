import BamsaneungBoy from '@/assets/credit/bamsaneung/bamsaneung-boy.svg?react';
import BigSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-big.svg?react';
import SmallSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-small.svg?react';
import Horizon from '@/components/horizon/Horizon';
import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
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

      <ul className="mt-14 w-10/12 grid bg-lime-300 grid-cols-3 gap-x-10 mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-10">
        <li className="w-full h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
        <li className="w-full h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
        <li className="w-full h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
      </ul>
    </div>
  );
}
