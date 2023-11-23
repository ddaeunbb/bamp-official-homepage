export default function LastSection() {
  return (
    <section className="h-max py-20 bg-neutral-800 flex items-center justify-around max-sm:flex-col">
      <div className="flex flex-col gap-y-1 max-sm:text-center">
        <span className="text-white text-lg">우리가 더 궁금하다면?</span>
        <h2 className="text-white text-xl font-bold mb-10">BAMP에서 만나요!</h2>
        <a
          className="max-sm:mx-auto"
          target="_blank"
          href="https://www.instagram.com/gobamp/">
          <img src="/public/home/btn-apply.svg" />
        </a>
        <span className="text-neutral-500 mt-10 text-xs max-sm:hidden">
          @BAMP 20203 All rights reserved
        </span>
      </div>
      <div className="mt-10 h-56 flex gap-x-2 items-end max-sm:h-max">
        <a href="mailto:bamp35@naver.com">
          <img src="/footer/mail.svg" />
        </a>
        <a target="_blank" href="https://www.instagram.com/gobamp/">
          <img src="/footer/insta.svg" alt="인스타그램 아이콘" />
        </a>
        <a target="_blankt" href="https://www.youtube.com/@bamp3754">
          <img src="/footer/youtube.svg" alt="유튜브 아이콘" />
        </a>
        <a target="_blank" href="https://cafe.naver.com/gobamp">
          <img src="/footer/cafe.svg" alt="네이버카페 아이콘" />
        </a>
        <a target="_blank" href="https://blog.naver.com/12bamp">
          <img src="/footer/blog.svg" alt="네이버블로그 아이콘" />
        </a>
      </div>
      <span className="hidden text-neutral-500 text-xs max-sm:block mt-12">
        @BAMP 20203 All rights reserved
      </span>
    </section>
  );
}
