import GameCard, { GameCardProps } from "@/components/GameCard";

export default function BetsSection() {
  return (
    <section className="max-md:px-6">
      <div className="flex gap-2 overflow-x-auto text-light py-2">
        <button className="btn-secondary py-1 px-2 md:px-4 md:w-full text-nowrap">
          Hot Bets
        </button>
        <button className="btn-primary py-1 px-2 md:px-4 md:w-full text-nowrap">
          Open Bets
        </button>
        <button className="btn-primary py-1 px-2 md:px-4 md:w-full text-nowrap">
          Game Schedule
        </button>
      </div>
      <h1 className="font-bold text-lg py-4">Trending Bets</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(_ => <GameCard key={_} {...dummyGame} />)}
      </div>
    </section>
  );
}

const dummyGame: GameCardProps = {
  time: "-00:15:24",
  users: "20m",
  bets: "12k",
  club1: {
    name: "manu",
    img: "/images/clubs/manu.png"
  },
  club2: {
    name: "manu",
    img: "/images/clubs/manu.png"
  }
};
