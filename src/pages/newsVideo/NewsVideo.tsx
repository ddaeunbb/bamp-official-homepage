import Navbar from '@/components/navbar/Navbar';
import { PATH, PATH_NAME } from '@/routers/path';

export function Component() {
  return (
    <div className="pb-24 h-max">
      <Navbar
        urlArr={[PATH.newsStory, PATH.newsVideo]}
        tabNameArr={[PATH_NAME.story, PATH_NAME.video]}
      />

      <ul className="mt-14 max-w-[60rem] max-md:w-11/12 max-sm:w-10/12 mx-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <li className="col-span-1 h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
        <li className="col-span-1 h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
        <li className="col-span-1 h-64 bg-blue-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          similique harum esse voluptatibus deserunt suscipit, id fugit qui
          voluptatem enim rem nesciunt maxime nihil totam consequatur repellat
          ratione perferendis!
        </li>
      </ul>
    </div>
  );
}
