import Image from "next/image";

export type DepositCardProps = {
  image: string;
  title: string;
};

export default function WithdrawalCard({ image, title }: DepositCardProps) {
  return (
    <div className="bg-primary-dark aspect-square text-light rounded p-3 flex flex-col items-center gap-2">
      <Image
        src={image}
        width={100}
        height={100}
        className="w-20 md:w-24 aspect-square"
        alt=""
      />
      <p className="font-semibold">{title}</p>
    </div>
  );
}
