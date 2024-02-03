import WithdrawalCard from "./WIthrawalCard";
import WithdrawalOption from "./WithdrawaOption";

export default function Page() {
  return (
    <div className=" flex justify-center items-center flex-col py-10">
      <div className="flex flex-col w-full max-w-[500px] items-center">
        <h1 className="py-3 font-bold text-2xl md:text-3xl">Withdrawal</h1>
        <div className="mt-3">
          <WithdrawalOption />
        </div>
        <div className="flex justify-center items-center gap-5">
          {cardOptions.map(({ image, title }) => (
            <WithdrawalCard key={title} title={title} image={image} />
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
