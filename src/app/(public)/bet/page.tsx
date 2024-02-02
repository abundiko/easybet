import Active from "./Active";
import Game from "./Game";
import Mainbet from "./Mainbet";
import MatchDetails from "./MatchDetails";

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
          <div className="py-5"></div>
          <Active status="Active" ammount="50k" people="50" time="20:15" />
          <Mainbet />
          <MatchDetails />
        </div>
      </div>
    </>
  );
}
