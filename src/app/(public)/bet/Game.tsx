import Image from "next/image";
import { Club } from "@/components/GameCard";

export type GameProps = {
  club1: Club;
  club2: Club;
};

export default function Game({ club1, club2 }: GameProps) {
  return (
    <div className="flex items-center md:px-[10vw] gap-4 md:gap-10">
      <div className="w-2/12 flex-shrink-0 flex flex-col items-center justify-center ">
        <h1 className="uppercase font-bold text-lg">HOME</h1>
        <Image
          height={100}
          width={100}
          src={club1.img}
          alt={club1.name}
          className="w-full object-contain"
        />
        <h1 className="uppercase font-bold text-lg">{club1.name}</h1>
      </div>
      <div className="h-[3px] rounded w-full bg-secondary" />

      <div className="w-2/12 flex-shrink-0 flex flex-col items-center justify-center">
        <h1 className="uppercase font-bold text-lg">AWAY</h1>
        <Image
          height={100}
          width={100}
          src={club2.img}
          alt={club2.name}
          className="w-full object-contain"
        />
        <h1 className="uppercase font-bold text-lg">{club2.name}</h1>
      </div>
    </div>
  );
}
