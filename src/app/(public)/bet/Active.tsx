export type ActiveProps = {
  status: string;
  ammount: string;
  people: string;
  time: string;
};

import {
  FaClock,
  FaSackDollar,
  FaTowerBroadcast,
  FaUsers,
} from "react-icons/fa6";

export default function Active({ status, ammount, people, time }: ActiveProps) {
  return (
    <div className="flex justify-around items-center bg-secondary-light rounded-lg shadow-md p-4 md:p-4 gap-8 md:gap-10 md:px-[5vw] font-semibold">
      <span className="flex items-center">
        <FaTowerBroadcast className="mr-2" /> {status}
      </span>
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
  );
}
