import BampMerit from '@/pages/home/section/BampMerit';
import Experiences from '@/pages/home/section/Experiences';
import Intro from '@/pages/home/section/IntroSection';
import LinkToBamsaneung from '@/pages/home/section/LinkToBamsaneung';
import Welcome from '@/pages/home/section/Welcome';

export default function Home() {
  return (
    <div className="pt-14 h-max">
      <Welcome />
      <Intro />
      <BampMerit />
      <Experiences />
      <LinkToBamsaneung />
    </div>
  );
}
