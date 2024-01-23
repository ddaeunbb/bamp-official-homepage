export default function Welcome() {
  return (
    <section className="bg-defaultYellow h-max relative" role="intro-page">
      <img
        className="w-screen max-sm:hidden"
        src="/home/main-vector.webp"
        alt="둥근하얀장식"
        width={1440}
        height={816}
      />
      <img
        src="/home/main-image.webp"
        className="w-full absolute z-20 bottom-24 max-lg:bottom-14 max-md:bottom-10 max-sm:hidden"
        alt="사람들을 환영하는 밤프인들"
        width={1440}
        height={790}
      />
      <img
        src="/home/main-image-mobile.webp"
        className="w-full max-sm:block hidden bg-white"
        alt="사람들을 환영하는 밤프인들"
        width={500}
        height={614}
      />
    </section>
  );
}
