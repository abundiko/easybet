export type MatchDetailsProp = {
  title: string;
  number: string;
};

export default function MatchDetails({ title, number }: MatchDetailsProp) {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary-light p-6 sm:p-8 md:p-10 lg:p-12">
      <MatchDetailsContent title="Home win" number="10k" />
      <MatchDetailsContent title="Away Win" number="2k" />
      <MatchDetailsContent title="1st Half-Home" number="4k" />
      <MatchDetailsContent title="2nd Half-Home" number="10k" />
      <MatchDetailsContent title="2nd Half-Home" number="10k" />
      <MatchDetailsContent title="1st Half-Away" number="15k" />
      <MatchDetailsContent title="2nd Half-Away" number="5k" />

      <div className=" flex justify-center items-center gap-7 mt-4">
        <button className="btn-primary w-40 p-2">Edit bet</button>
        <button className="btn-primary w-40 p-2">cancel bet</button>
      </div>
    </div>
  );
}

function MatchDetailsContent({ title, number }: MatchDetailsProp) {
  return (
    <div className="flex w-full md:w-10/12  lg:w-8/12 justify-center items-center gap-2 md:gap-9">
      <span className="text-lg font-semibold w-full">{title}</span>
      <div className="h-[3px] rounded w-full bg-secondary"></div>
      <span className="text-sm font-semibold">{number}</span>
    </div>
  );
}
