import CareerBamdi from '@/assets/career/bamdi-career.svg?react';

export default function NavBarBackground() {
  return (
    <div className="overflow-hidden mb-12 relative w-screen h-[360px] bg-defaultYellow bg-[url('/navbar/navbar-bg.svg')] flex justify-center items-end">
      <CareerBamdi className="w-[360px]" />
    </div>
  );
}
