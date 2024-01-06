import { motion } from 'framer-motion';
import BamsaneungBoy from '@/assets/credit/bamsaneung/bamsaneung-boy.svg?react';
import BigSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-big.svg?react';
import SmallSpeechBalloon from '@/assets/credit/bamsaneung/bamsaneung-speechballoon-small.svg?react';
import Horizon from '@/components/horizon/Horizon';
import Navbar from '@/components/navbar/Navbar';
import ProfileImg from '@/components/profileImg/ProfileImg';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.creditBamsaneung, PATH.creditSponsor]}
        tabNameArr={[PATH_NAME.bamsaneung, PATH_NAME.sponsor]}
      />

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}>
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
          <div className="flex gap-x-10 max-sm:flex-col">
            <img
              src="/credit/bamsaneung/bamsaneung-heart.png"
              className="w-96 max-sm:w-full"
            />
            <div className="flex flex-col justify-center gap-y-5 max-sm:w-full max-sm:mt-8">
              <div>
                <span className="inline-block">든든한 OB 그룹</span>
                <h2 className="font-semibold text-4xl">밤.사.능</h2>
              </div>
              <div className="flex flex-col mt-5">
                <h3 className="font-semibold text-lg mb-3">밤사능이란?</h3>
                <span>"밤프,사랑과 능력"의 줄임말로,</span>
                <span>밤프를 사랑하는 OB가 모여 만든 그룹이에요.</span>
              </div>
              <span>현직자 세미나, 공식 홈페이지 제작, 운영진 지원까지</span>
              <div className="flex flex-col">
                <span>활동기수의 성장을 위해 필요한 모든 서포트를</span>
                <span>제공하고 있답니다.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-7">
            <h2 className="font-semibold text-3xl">밤사능 멤버</h2>
            <div>
              <h3 className="font-semibold text-lg">운영팀</h3>
              <div className="flex max-md:grid max-md:grid-cols-2">
                <ProfileImg enName={'ain'} koName={'아인'} />
                <ProfileImg enName={'sungchae'} koName={'성채'} />
                <ProfileImg enName={'sungmin'} koName={'성민'} />
                <ProfileImg enName={'jaehak'} koName={'재학'} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">홈페이지 제작팀</h3>
              <div className="flex max-md:grid max-md:grid-cols-2">
                <ProfileImg enName={'minwoo'} koName={'민우'} />
                <ProfileImg enName={'gyuri'} koName={'규리'} />
                <ProfileImg enName={'sunghyun'} koName={'성현'} />
                <ProfileImg enName={'engu'} koName={'은구'} />
                <ProfileImg enName={'daeun'} koName={'다은'} />
                <ProfileImg enName={'haerin'} koName={'혜린'} />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
