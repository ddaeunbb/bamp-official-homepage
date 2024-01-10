export default function Intro() {
  return (
    <section
      className="bg-defaultYellow h-[800px] py-32 max-sm:h-[500px] max-sm:py-14"
      role="밤프의 이름 소개">
      <div className="w-screen flex flex-col items-center gap-y-2 max-sm:gap-y-1">
        <h2 className="text-xl font-bold max-sm:text-base">
          브랜드, 광고, 마케팅을 꿈꾼다면
        </h2>
        <span className="font-extrabold text-4xl max-sm:text-2xl">
          이미 당신은 BAMP
        </span>
        <img
          src="/home/section2.gif"
          alt="밤프영어풀네임"
          className="max-sm:w-8/12 w-[30rem]"
        />
      </div>
    </section>
  );
}
