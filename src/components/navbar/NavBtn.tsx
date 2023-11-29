interface NavBtnProps {
  tabName: string;
  isCurTab: boolean;
}

export default function NavBtn({ tabName, isCurTab }: NavBtnProps) {
  return (
    <button
      className={isCurTab ? 'navbtn font-semibold' : 'navbtn font-normal'}>
      {tabName}
    </button>
  );
}
