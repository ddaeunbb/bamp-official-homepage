interface TabProps {
  tabName: string;
}

export default function Tab({ tabName }: TabProps) {
  return (
    <ul className="cursor-pointer hover:font-bold hover:text-[#FEC412] max-sm:text-sm transition-colors">
      {tabName}
    </ul>
  );
}
