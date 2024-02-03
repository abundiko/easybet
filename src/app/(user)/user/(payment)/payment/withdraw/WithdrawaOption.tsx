export default function WithdrawalOption() {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="exampleSelect" className="text-dark">
        Country:
      </label>
      <select
        id="exampleSelect"
        name=""
        className="py-2 inline-block w-80 max-w-[90vw] md:w-60 px-5 sm:px-6 lg:px-8 bg-slate-100  rounded-md text-dark text-left mb-4 sm:mb-6 "
      >
        <option disabled selected value="">
          Select Country
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}
