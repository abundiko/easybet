import { FaMagnifyingGlass } from "react-icons/fa6";
export default function SearchInput() {
  return (
    <div className="flex gap-2 w-full justify-center items-center">
      <input
        type="text"
        className="bg-secondary-light md:bg-primary-dark outline-secondary rounded-lg w-full sm:w-80 text-sm py-2 px-5 shadow-md inline-block"
        placeholder="Search here"
      />
      <button className="bg-primary-dark rounded-lg p-3 text-light">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}
