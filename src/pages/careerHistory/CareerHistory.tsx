import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div>
      <Navbar
        urlArr={[PATH.careerHistory, PATH.careerAward]}
        tabNameArr={[PATH_NAME.history, PATH_NAME.award]}
      />
    </div>
  );
}
