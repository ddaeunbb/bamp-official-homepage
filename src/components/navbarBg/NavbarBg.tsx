interface NavbarBackgroundProps {
  url: string;
}

export default function NavbarBg({ url }: NavbarBackgroundProps) {
  return (
    <div className="overflow-hidden mb-12 relative w-screen h-[360px] bg-defaultYellow bg-[url('/navbar/navbar-bg.webp')] flex justify-center items-end bg-contain">
      {url.includes('/career') && (
        <img
          src="/career/career-bamdi.webp"
          alt="커리어에 팔벌리고 있는 밤디"
          className="w-80"
        />
      )}
      {url.includes('/news') && (
        <img
          src="/news/story-bamdi.webp"
          alt="마이크에 말하는 밤디"
          className="w-72"
        />
      )}
      {url.includes('/credit/sponsor') && (
        <img
          src="/credit/sponsor/credit-sponsor-bamdi.webp"
          alt="하트를 깨무는 밤디"
          className="w-80"
        />
      )}
      {url.includes('/credit/bamsaneung') && (
        <img
          src="/credit/bamsaneung/credit-bamsaneung-bamdi.webp"
          className="w-80"
          alt="하트하는 밤디"
        />
      )}
    </div>
  );
}
