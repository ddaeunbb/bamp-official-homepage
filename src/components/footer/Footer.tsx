import { BAMP_LINK } from '@/constants/link';

export default function Footer() {
  return (
    <footer className="h-max py-20 bg-neutral-800 flex items-center justify-around max-sm:flex-col">
      <div className="flex flex-col gap-y-1 max-sm:text-center">
        <span className="text-white text-lg">우리가 더 궁금하다면?</span>
        <h2 className="text-white text-xl font-bold mb-10">BAMP에서 만나요!</h2>
        <a
          className="max-sm:mx-auto"
          target="_blank"
          href={BAMP_LINK.apply}
          rel="external"
          role="밤프에 지원하는 버튼">
          <img src="/home/btn-apply.svg" alt="지원하기 버튼" />
        </a>
        <span className="text-neutral-500 mt-10 text-xs max-sm:hidden">
          @BAMP 2024 All rights reserved
        </span>
      </div>
      <div
        className="mt-10 h-56 flex gap-x-2 items-end max-sm:h-max"
        role="푸터">
        <a
          href={`mailto:${BAMP_LINK.mail}`}
          role="밤프에 메일을 보내는 버튼"
          rel="external">
          <img src="/footer/mail.svg" alt="메일 아이콘" />
        </a>
        <a
          target="_blank"
          href={BAMP_LINK.instagram}
          role="밤프인스타로 연결된 버튼"
          rel="external">
          <img src="/footer/insta.svg" alt="인스타그램 아이콘" />
        </a>
        <a
          target="_blankt"
          href={BAMP_LINK.youtube}
          role="밤프유튜브로 연결된 버튼"
          rel="external">
          <img src="/footer/youtube.svg" alt="유튜브 아이콘" />
        </a>
        <a
          target="_blank"
          href={BAMP_LINK.cafe}
          role="밤프카페로 연결된 버튼"
          rel="external">
          <img src="/footer/cafe.svg" alt="네이버카페 아이콘" />
        </a>
        <a
          target="_blank"
          href={BAMP_LINK.blog}
          role="밤프블로그로 연결된 버튼"
          rel="external">
          <img src="/footer/blog.svg" alt="네이버블로그 아이콘" />
        </a>
      </div>
      <span className="hidden text-neutral-500 text-xs max-sm:block mt-12">
        @BAMP 2024 All rights reserved
      </span>
    </footer>
  );
}
