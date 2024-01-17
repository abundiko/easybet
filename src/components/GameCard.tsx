import Image from "next/image";

export type Club = {
  name: string;
  img: string;
};

export type GameCardProps = {
  club1: Club;
  club2: Club;
  time: string;
  users: string;
  bets: string;
};

export default function GameCard({
  club1,
  club2,
  time,
  users,
  bets,
}: GameCardProps) {
  return (
    <div className="p-2 bg-primary-dark text-slate-300 rounded-md">
      <div className="flex items-center">
        <div className="w-4/12 flex-shrink-0 flex flex-col gap-1 items-center justify-center">
          <Image
            height={100}
            width={100}
            src={club1.img}
            alt={club1.name}
            className="w-full object-contain"
          />
          <h1 className="uppercase text-sm font-semibold">{club1.name}</h1>
        </div>
        <div className="h-[1px] rounded w-3/12 bg-secondary" />
        <div className="w-4/12 flex-shrink-0 flex flex-col gap-1 items-center justify-center">
          <Image
            height={100}
            width={100}
            src={club2.img}
            alt={club2.name}
            className="w-full object-contain"
          />
          <h1 className="uppercase text-sm font-semibold">{club2.name}</h1>
        </div>
      </div>
      <div className="py-5 flex justify-center items-center text-xs">
        <div className="w-fit flex gap-2">
          <div className="flex flex-col font-semibold gap-1">
            <p>Time:</p>
            <p>Users:</p>
            <p>Bets:</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>{time}</p>
            <p>{users}</p>
            <p>{bets}</p>
          </div>
        </div>
      </div>
      <button className="btn-primarydark w-full py-1">Join Bet</button>
    </div>
  );
}
