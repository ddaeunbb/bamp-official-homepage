import FifthSection from '@/pages/home/section/FifthSection';
import FirstSection from '@/pages/home/section/FirstSection';
import FourthSection from '@/pages/home/section/FourthSection';
import LastSection from '@/pages/home/section/LastSection';
import SecondSection from '@/pages/home/section/SecondSection';
import ThirdSection from '@/pages/home/section/ThirdSection';

export default function Home() {
  return (
    <div className="pt-14 h-screen">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <LastSection />
    </div>
  );
}
