interface NavBtnProps {
  tabName: string;
  isCurTab: boolean;
}

export default function NavBtn({ tabName, isCurTab }: NavBtnProps) {
  return (
    <span className={isCurTab ? 'font-semibold' : 'font-normal'}>
      {tabName}
    </span>
  );
}
