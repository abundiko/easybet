import { FaCircleDot } from "react-icons/fa6";
import Image from "next/image";

export type TableRowProps = {
  sport: string;
  team1: BetTeam;
  team2: BetTeam;
  betType: string;
  score: string;
  amount: string;
  status: string;
  action: React.ReactNode;
};

export type BetTeam = {
  image?: string;
  name: string;
};

export default function AllBetTableRow({
  sport,
  team1,
  team2,
  betType,
  score,
  amount,
  status,
  action,
}: TableRowProps) {
  return (
    <tr>
      <td>{sport}</td>
      <td>
        <div className="flex justify-center items-center gap-1">
          {team1.image && (
            <Image
              src={team1.image}
              alt={team1.name}
              height={200}
              width={200}
              className="aspect-square w-6"
            />
          )}
          <span>{team1.name}</span>
          <FaCircleDot className="scale-50" />
          <span>{team2.name}</span>
          {team2.image && (
            <Image
              src={team2.image}
              alt={team2.name}
              height={200}
              width={200}
              className="aspect-square w-6"
            />
          )}
        </div>
      </td>
      <td>{betType}</td>
      <td>{score}</td>
      <td>{amount}</td>
      <td>{status}</td>
      <td>{action}</td>
    </tr>
  );
}
