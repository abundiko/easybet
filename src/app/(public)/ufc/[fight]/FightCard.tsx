import Image from "next/image";
import { FaClock, FaSackDollar, FaUsers } from "react-icons/fa6";

export type FightCardProps = {
  name1: string;
  name2: string;
  img: string;
};

export default function FightSingle({ name1, name2, img }: FightCardProps) {
  return (
    <div className="w-full md:w-8/12 lg:w-6/12">
      <Image
        height={500}
        width={500}
        src={img}
        alt={img}
        className="w-full object-cover bg-black rounded-t-lg"
      />

      <div className="px-6 py-4">
        <div className="flex w-full justify-center items-center gap-2 md:gap-9 font-bold">
          <span>{name1}</span>
          <div className="h-[2px] rounded w-full  bg-secondary"></div>
          <span>{name2}</span>
        </div>
      </div>
    </div>
  );
}
