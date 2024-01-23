export default function Welcome() {
  return (
    <section className="bg-defaultYellow h-max relative" role="intro-page">
      <img
        className="w-screen max-sm:hidden"
        src="/home/main-vector.webp"
        alt="둥근하얀장식"
        width={1440}
        height={816}
        data-fetchPriority="high"
      />
      <img
        src="/home/main-image-large.webp"
        className="w-full absolute z-20 bottom-24 max-lg:bottom-14 max-md:bottom-10"
        alt="Bamp people welcoming people"
        srcSet="
        /home/main-image-large.webp 900w,
        /home/main-image-medium.webp 700w,
        /home/main-image-mobile.webp 640w"
        sizes="(max-width: 640px) 640px, (max-width: 700px) 700px, 900px"
        data-fetchPriority="high"
      />
    </section>
  );
}
