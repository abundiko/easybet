import AllBetTableRow from "../BetTableRow";

export default function AllBets() {
  return (
    <div className="flex justify-center items-center overflow-x-auto max:md-px-4 py-6">
      <table className="sm:min-w-full  border-gray-300 app-table min-w-[500px]">
        <thead>
          <tr>
            <th className="py-4">Sports</th>
            <th>Teams</th>
            <th>Prediction</th>
            <th>Score</th>
            <th>Bet</th>
            <th>Bet Status</th>
            <th>Cashout</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <AllBetTableRow
            sport="Soccer"
            team1={{
              name: "FCB",
              image: "/images/clubs/manu.png",
            }}
            team2={{
              name: "FCB",
              image: "/images/clubs/manu.png",
            }}
            betType="Home Win"
            score="2:0"
            amount="$50"
            status="Complete"
            action={
              <button className="btn-primary py-1 px-2 w-full">-$200</button>
            }
          />
          <AllBetTableRow
            sport="Soccer"
            team1={{
              name: "FCB",
            }}
            team2={{
              name: "FCB",
            }}
            betType="Home Win"
            score="2:0"
            amount="$50"
            status="Complete"
            action={
              <button className="btn-danger py-1 px-2 w-full">-$200</button>
            }
          />
        </tbody>
      </table>
    </div>
  );
}
