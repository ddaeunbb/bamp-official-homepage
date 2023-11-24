export default function FirstSection() {
  return (
    <section className="bg-defaultYellow" role="intro-page">
      <div className="relative">
        <picture>
          <source srcSet="/home/main-logo.webp" type="image/webp" />
          <img className="center" src="/home/main-logo.svg" alt="메인로고" />
        </picture>
        <img src="/home/main-vector.png" alt="둥근하얀장식" />
        <img
          className="absolute z-20 top-[-8px]"
          src="/home/main-image.svg"
          alt="사람들을 환영하는 밤프인들"
        />
      </div>
    </section>
  );
}
