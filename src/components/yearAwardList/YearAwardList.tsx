import Horizon from '@/components/horizon/Horizon';
interface YearAwardListProps {
  year: string;
  awardList: string[][];
}

export default function YearAwardList({ year, awardList }: YearAwardListProps) {
  return (
    <section>
      <Horizon />
      <div className="py-14 w-[600px] mx-auto flex justify-center items-center max-sm:flex-col max-sm:w-full max-sm:px-4 max-sm:gap-y-10">
        <h2 className="w-1/4 text-defaultYellow self-start text-2xl font-semibold max-sm:w-full">
          {year}
        </h2>
        <ul className="w-3/4 flex flex-col gap-y-3 max-sm:w-full">
          {awardList.map((list, idx) => {
            const [award, contest] = list;
            return (
              <li key={idx}>
                <strong>{award}</strong>
                <span className="ml-1 font-normal leading-none">{contest}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
