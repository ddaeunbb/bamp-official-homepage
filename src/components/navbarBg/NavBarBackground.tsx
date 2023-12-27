import CareerBamdi from '@/assets/career/career-bamdi.svg?react';
import CreditBamdi from '@/assets/credit/credit-bamdi.svg?react';

interface NavbarBackgroundProps {
  url: string;
}

export default function NavbarBackground({ url }: NavbarBackgroundProps) {
  return (
    <div className="overflow-hidden mb-12 relative w-screen h-[360px] bg-defaultYellow bg-[url('/navbar/navbar-bg.svg')] flex justify-center items-end">
      {url.includes('/career') && <CareerBamdi className="w-[360px]" />}
      {url.includes('/credit') && (
        <CreditBamdi className="absolute w-[180px] bottom-[-32px]" />
      )}
    </div>
  );
}
