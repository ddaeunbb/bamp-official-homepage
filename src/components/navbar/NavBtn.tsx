interface NavBtnProps {
  tabName: string;
}

export default function NavBtn({ tabName }: NavBtnProps) {
  return (
    <button className="max-sm:px-10 transition-shadow hover:shadow rounded px-20 py-3 bg-white border-2 border-black">
      {tabName}
    </button>
  );
}
