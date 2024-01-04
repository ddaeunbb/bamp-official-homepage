interface ProfileImgProps {
  enName: string;
  koName: string;
}

export default function ProfileImg({ enName, koName }: ProfileImgProps) {
  return (
    <div className="flex flex-col justify-center text-center">
      <img
        src={`/credit/bamsaneung/people/${enName}.png`}
        className="w-32 max-md:mx-auto max-md:w-48"
      />
      <span className="font-semibold">{koName}</span>
    </div>
  );
}