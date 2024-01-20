// import NumberCard from "./NumberCard";

export default function Mainbet() {
  return (
    <div className="flex justify-center items-center flex-col bg-secondary-light p-6 sm:p-8 md:p-10 lg:p-12">
      <select
        id="exampleSelect"
        name="exampleSelect"
        className="py-2 px-64 w-full sm:px-6 lg:px-8 bg-primary  sm:w-64 rounded-md text-secondary text-left mb-4 sm:mb-6 px"
      >
        <option value="">Select prediction</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <input
        type="text"
        className="px-4 py-2 w-full sm:w-64 bg-white rounded-md text-dark mb-4 sm:mb-6"
        placeholder="Enter Amount"
      />

      <div className="flex flex-wrap gap-4 w-full justify-center items-center mt-3">
        {gamep.map((item) => (
          <button className="btn-primary p-3">{item.title}</button>
        ))}
      </div>

      <button className="btn-primary rounded-md mt-5 p-2  sm:w-40">
        Place Bet
      </button>
    </div>
  );
}

const gamep = [
  { title: "500k" },
  { title: "1k" },
  { title: "5k" },
  { title: "10k" },
];
