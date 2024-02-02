import GameCard, { GameCardProps } from "@/components/GameCard";

export default function UfcBet() {
  return (
    <section className="max-md:px-6">
      <div className="flex gap-2 overflow-x-auto text-light py-2">
        <button className="btn-secondary py-1 px-2 md:px-4 md:w-full text-nowrap">
          Hot Bets
        </button>
        <button className="btn rounded-md bg-secondary-light py-1 px-2 md:px-4 md:w-full text-nowrap">
          Open Bets
        </button>
        <button className="rounded-md bg-secondary-light py-1 px-2 md:px-4 md:w-full text-nowrap">
          Game Schedule
        </button>
      </div>
    </section>
  );
}
