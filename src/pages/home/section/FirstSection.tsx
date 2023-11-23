export default function FirstSection() {
  return (
    <section className="bg-defaultYellow">
      <div className="relative">
        <img className="center" src="/home/main-logo.svg" alt="메인로고" />
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
