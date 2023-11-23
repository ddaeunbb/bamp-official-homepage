export default function FourthSection() {
  return (
    <section className="h-max py-32 bg-[url('/home/section-bg.png')] bg-cover max-lg:h-max max-lg:bg-contain max-sm:py-20">
      <div className="w-screen flex justify-around max-lg:flex-col max-lg:items-center">
        <div className="w-40">
          <h2 className="font-extrabold text-3xl max-lg:text-center">
            BAMP에서 얻을 수 있는 값진 경험들
          </h2>
        </div>
        <div className="">
          <img src="/home/bamp-box.gif" className="w-44" />
        </div>
      </div>
      <div className="flex gap-x-10 justify-center mt-10 max-lg:flex-col max-lg:gap-y-10 max-lg:items-center">
        <div className="w-72 h-max flex flex-col gap-y-5">
          <img src="/home/photobox.svg" />
          <h2 className="text-xl font-bold">다양한 공모전 경험</h2>
          <span className="text-sm text-neutral-500">
            #공모전 수상 #야 너도 할 수 있어
          </span>
        </div>
        <div className="w-72 h-max flex flex-col gap-y-5">
          <img src="/home/photobox.svg" />
          <h2 className="text-xl font-bold">알찬 커리큘럼</h2>
          <span className="text-sm text-neutral-500">#OB특강 #실력향상ing</span>
        </div>
        <div className="w-72 h-max flex flex-col gap-y-5">
          <img src="/home/photobox.svg" />
          <h2 className="text-xl font-bold">즐거운 추억</h2>
          <span className="text-sm text-neutral-500">
            #기수별 MT #우리우정뽀에버
          </span>
        </div>
      </div>
    </section>
  );
}
