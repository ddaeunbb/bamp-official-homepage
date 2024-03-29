export default function FourthSection() {
  return (
    <section className="h-max py-24 bg-[url('/home/section-bg.webp')] bg-cover max-lg:h-max max-lg:bg-contain max-sm:py-20">
      <div className="mx-auto w-[920px] flex justify-between max-lg:flex-col max-lg:items-center max-lg:w-screen">
        <div>
          <h2 className="font-extrabold text-3xl max-lg:hidden">
            BAMP에서
            <br />
            얻을 수 있는 값진 경험들
          </h2>
          <h2 className="hidden font-extrabold text-3xl max-lg:block max-lg:text-center">
            BAMP에서
            <br />
            얻을 수 있는
            <br />
            값진 경험들
          </h2>
        </div>
        <img
          src="/home/bamp-box.gif"
          className="w-44 max-sm:w-36 "
          alt="박스안에 전구"
        />
      </div>
      <div className="flex gap-x-10 justify-center mt-10 max-lg:flex-col max-lg:gap-y-10 max-lg:items-center">
        <div className="w-72 h-max flex flex-col gap-y-5 max-sm:gap-y-2">
          <img
            src="/home/home-experience.webp"
            alt="다양한 공모전을 하는 밤프인의 모습"
            loading="lazy"
            width={288}
            height={337}
          />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">다양한 공모전 경험</h2>
            <span className="text-sm text-neutral-500">
              #공모전 수상 #야 너도 할 수 있어
            </span>
          </div>
        </div>
        <div className="w-72 h-max flex flex-col gap-y-5 max-sm:gap-y-2">
          <img
            src="/home/home-curri.webp"
            alt="다양한 커리큘럼에 참여하는 밤프인의 모습"
            loading="lazy"
            width={288}
            height={337}
          />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">알찬 커리큘럼</h2>
            <span className="text-sm text-neutral-500">
              #OB특강 #실력향상ing
            </span>
          </div>
        </div>
        <div className="w-72 h-max flex flex-col gap-y-5 max-sm:gap-y-2">
          <img
            src="/home/home-memory.webp"
            alt="다같이 놀고있는 밤프인의 모습"
            loading="lazy"
            width={288}
            height={337}
          />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">즐거운 추억</h2>
            <span className="text-sm text-neutral-500">
              #기수별 MT #우리우정뽀에버
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
