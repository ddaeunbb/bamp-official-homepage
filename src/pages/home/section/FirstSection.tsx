export default function FirstSection() {
  return (
    <section className="bg-defaultYellow" role="intro-page">
      <div className="relative">
        <picture>
          <source
            className="center max-sm:w-10"
            srcSet="/home/main-logo.png"
            media="(max-width: 586px)"
          />
          <img className="center" src="/home/main-logo.svg" alt="메인로고" />
        </picture>
        <img
          className="w-screen"
          src="/home/main-vector.png"
          alt="둥근하얀장식"
        />
        <picture>
          <source srcSet="/home/main-image.png" media="(max-width: 586px)" />
          <img
            className="absolute z-20 top-[-25px] w-screen"
            src="/home/main-image.svg"
            alt="사람들을 환영하는 밤프인들"
          />
        </picture>
      </div>
    </section>
  );
}
