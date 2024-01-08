export default function Welcome() {
  return (
    <section className="bg-defaultYellow h-max relative" role="intro-page">
      <img
        className="w-screen"
        src="/home/main-vector.webp"
        alt="둥근하얀장식"
      />
      <img
        src="/home/main-image.webp"
        className="w-full absolute z-20 bottom-24 max-lg:bottom-14 max-md:bottom-10 max-sm:bottom-6"
        alt="사람들을 환영하는 밤프인들"
      />
    </section>
  );
}
