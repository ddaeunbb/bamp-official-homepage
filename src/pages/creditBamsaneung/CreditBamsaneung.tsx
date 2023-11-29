import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div>
      <Navbar
        urlArr={[PATH.creditSponsor, PATH.creditBamsaneung]}
        tabNameArr={[PATH_NAME.sponsor, PATH_NAME.bamsaneung]}
      />
    </div>
  );
}
