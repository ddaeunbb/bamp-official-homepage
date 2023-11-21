export default function Home() {
  return (
    <div className="pt-14 h-screen">
      {/* 국내 최초 대학생공모전 연합 동아리 section */}
      <section className="bg-defaultYellow">
        <div className="relative">
          <img className="center" src="/home/main-logo.png" alt="메인로고" />
          <img src="/home/main-vector.png" alt="둥근하얀장식" />
          <img
            className="absolute z-20 top-[-8px]"
            src="/home/main-image.png"
            alt="사람들을 환영하는 밤프인들"
          />
        </div>
      </section>

      {/* 국내 최초 대학생공모전 연합 동아리 section */}
      <section className="bg-defaultYellow h-[600px] py-32">
        <div className="w-screen flex flex-col items-center gap-y-2 max-sm:gap-y-1">
          <h2 className="text-xl font-bold max-sm:text-base">
            브랜딩 광고 마케팅을 꿈꾼다면
          </h2>
          <span className="font-extrabold text-4xl max-sm:text-2xl">
            이미 당신은 BAMP
          </span>
        </div>
      </section>
    </div>
  );
}
