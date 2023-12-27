import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div>
      <Navbar
        urlArr={[PATH.newsStory, PATH.newsVideo]}
        tabNameArr={[PATH_NAME.story, PATH_NAME.video]}
      />
    </div>
  );
}
