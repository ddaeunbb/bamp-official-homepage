import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div>
      <Navbar
        urlArr={[PATH.creditBamsaneung, PATH.creditSponsor]}
        tabNameArr={[PATH_NAME.bamsaneung, PATH_NAME.sponsor]}
      />
    </div>
  );
}
