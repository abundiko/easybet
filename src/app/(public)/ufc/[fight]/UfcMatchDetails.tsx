export type UfcMatchDetailsProp = {
  title: string;
  number: string;
};

export default function UfcMatchDetails() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary-light p-6 sm:p-8 md:p-10 lg:p-12">
      <UfcMatchDetailsContent title="Song Win" number="10k" />
      <UfcMatchDetailsContent title="Gutierrez" number="2k" />
      <UfcMatchDetailsContent title="Draw" number="4k" />
      <UfcMatchDetailsContent title="Song K.O Win" number="10k" />
      <UfcMatchDetailsContent title="Gutierrez K.O Win" number="10k" />
      <UfcMatchDetailsContent title="Song Win (submit)" number="15k" />
      <UfcMatchDetailsContent title="Gutierrez win(submit)" number="5k" />

      <div className=" flex justify-center items-center gap-7 mt-4">
        <button className="btn-primary w-40 p-2">Edit bet</button>
        <button className="btn-primary w-40 p-2">cancel bet</button>
      </div>
    </div>
  );
}

function UfcMatchDetailsContent({ title, number }: UfcMatchDetailsProp) {
  return (
    <div className="flex w-full md:w-10/12  lg:w-8/12 justify-center items-center gap-2 md:gap-9">
      <span className="text-lg font-semibold w-full">{title}</span>
      <div className="h-[3px] rounded w-full bg-secondary"></div>
      <span className="text-sm font-semibold">{number}</span>
    </div>
  );
}
