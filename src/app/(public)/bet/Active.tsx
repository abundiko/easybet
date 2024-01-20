import {
  FaClock,
  FaSackDollar,
  FaTowerBroadcast,
  FaUsers,
} from "react-icons/fa6";

export default function Active() {
  return (
    <div className="flex justify-around items-center bg-secondary-light rounded-lg shadow-md p-4 md:p-4 gap-8 md:gap-10 md:px-[5vw] font-semibold mt-10">
      <span className="flex items-center">
        <FaTowerBroadcast className="mr-2" /> Active
      </span>
      <span className="flex items-center">
        <FaSackDollar className="mr-2" /> 50k
      </span>
      <span className="flex items-center">
        <FaUsers className="mr-2" /> 50
      </span>
      <span className="flex items-center">
        <FaClock className="mr-2" /> 15:45:06
      </span>
    </div>
  );
}
