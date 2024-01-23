import Image from "next/image";
import { FaClock, FaSackDollar, FaUsers } from "react-icons/fa6";

export type UfcCardProps = {
  name1: string;
  name2: string;
  people: string;
  time: string;
  ammount: number;
  img: string;
};

export default function UfcCard({
  name1,
  name2,
  people,
  time,
  ammount,
  img,
}: UfcCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        height={300}
        width={300}
        src={img}
        alt={img}
        className="w-full object-contain"
      />

      <div className="px-6 py-4">
        <div className="flex w-full justify-center items-center gap-2 md:gap-9 font-bold">
          <span>{name1}</span>
          <div className="h-[3px] rounded w-full  bg-secondary"></div>
          <span>{name2}</span>
        </div>

        <div className="flex justify-around items-center   p-4 md:p-4 gap-8 md:gap-10 md:px-[5vw] font-semibold ">
          <span className="flex items-center">
            <FaSackDollar className="mr-2" /> {ammount}
          </span>
          <span className="flex items-center">
            <FaUsers className="mr-2" /> {people}
          </span>
          <span className="flex items-center">
            <FaClock className="mr-2" /> {time}
          </span>
        </div>
        <button className="btn-primary p-2 px-5 mx-auto">Join bet</button>
      </div>
    </div>
  );
}
