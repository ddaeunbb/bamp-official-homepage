interface NavbarBackgroundProps {
  url: string;
}

export default function NavbarBg({ url }: NavbarBackgroundProps) {
  return (
    <div className="overflow-hidden mb-12 relative w-screen h-[360px] bg-defaultYellow bg-[url('/navbar/navbar-bg.webp')] flex justify-center items-end bg-contain">
      {url.includes('/career') && (
        <img src="/career/career-bamdi.webp" className="w-80" />
      )}
      {url.includes('/news') && (
        <img src="/news/story-bamdi.webp" className="w-72" />
      )}
      {url.includes('/credit/sponsor') && (
        <img src="/credit/sponsor/credit-sponsor-bamdi.webp" className="w-80" />
      )}
      {url.includes('/credit/bamsaneung') && (
        <img
          src="/credit/bamsaneung/credit-bamsaneung-bamdi.webp"
          className="w-80"
        />
      )}
    </div>
  );
}
