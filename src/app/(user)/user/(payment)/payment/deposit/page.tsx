import DepositCard from "./DepositCard";
import DepositOption from "./DepositOption";

export default function Page() {
  return (
    <div className=" flex justify-center items-center flex-col py-10">
      <div className="flex flex-col w-full max-w-[500px] items-center">
        <h1 className="py-3 font-bold text-2xl md:text-3xl">Deposit</h1>
        <div className="mt-3">
          <DepositOption />
        </div>
        <div className="flex justify-center items-center gap-5">
          {cardOptions.map(({ image, title }) => (
            <DepositCard key={title} title={title} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

const cardOptions = [
  {
    title: "Paypal",
    image: "/images/Maskgroup.png",
  },
  {
    title: "Card",
    image: "/images/Maskgroup.png",
  },
];
