import { Link } from 'react-router-dom';
import Award2021 from './career/Award2021';
import Award2022 from './career/Award2022';
import Award2023 from './career/Award2023';
import AwardButton from './career/AwardButton';
import Horizon from './Horizon';
import { PATH } from '@/routers/path';

export default function Award() {
  return (
    <div className="pt-24 h-screen">
      <section className="flex flex-col items-center">
        <div className="w-screen flex flex-col justify-center items-center">
          <h2 className="font-extrabold text-2xl max-sm:text-2xl justify-center">
            커리어
          </h2>
          <div className="pt-8 pb-8 justify-center flex">
            <Link to={PATH.careerHistory}>
              <button>밤프 히스토리</button>
            </Link>
            <div className="mx-2">|</div>
            <Link to={PATH.careerAward}>
              <button className="font-extrabold">수상실적</button>
            </Link>
          </div>
        </div>
        <img className="w-3/5" src="/career/screen.svg" alt="수상로고" />
      </section>
      <Award2023></Award2023>
      <Horizon></Horizon>
      <Award2022></Award2022>
      <Horizon></Horizon>
      <Award2021></Award2021>
      <Horizon></Horizon>
      <AwardButton></AwardButton>
      <div className="h-96"></div>
    </div>
  );
}
