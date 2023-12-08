import MainLogo from '@/assets/home/home-main-logo.svg?react';

export default function Welcome() {
  return (
    <section className="bg-defaultYellow" role="intro-page">
      <div className="relative">
        <MainLogo className="absolute w-96 max-md:w-40 center" />
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
