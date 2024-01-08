export default function Welcome() {
  return (
    <section className="bg-defaultYellow" role="intro-page">
      <div className="relative">
        <img
          src="/home/home-main-logo.png"
          className="absolute w-96 max-md:w-40 center"
        />
        <img
          className="w-screen"
          src="/home/main-vector.png"
          alt="둥근하얀장식"
        />

        <img
          className="absolute z-20 top-[-25px] w-screen"
          src="/home/main-image.png"
          alt="사람들을 환영하는 밤프인들"
        />
      </div>
    </section>
  );
}
