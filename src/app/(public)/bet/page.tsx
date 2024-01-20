import Active from "./Active";
import Game from "./Game";
import Mainbet from "./Mainbet";

export default function BetPage() {
  return (
    <>
      <div className="app-container">
        <div className="flex flex-col gap-2 py-10">
          <Game
            club1={{
              name: "FCB",
              img: "/images/clubs/manu.png",
            }}
            club2={{
              name: "PSG",
              img: "/images/clubs/manu.png",
            }}
          />
          <Active />
          <Mainbet />
        </div>
      </div>
    </>
  );
}
