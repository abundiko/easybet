import PaypalCard from "./PaypalCard";

export default function Page() {
  return (
    <div className=" flex justify-center items-center flex-col py-10">
      <div className="flex flex-col w-full max-w-[500px] items-center">
        <h1 className="py-3 font-bold text-2xl md:text-3xl">Paypal</h1>
        <div className="mt-3">
          <PaypalCard />
        </div>
      </div>
    </div>
  );
}
