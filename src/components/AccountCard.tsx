import Image from "next/image";

export default function AccountCard() {
  return (
    <div className="rounded-lg bg-primary p-4 text-light">
      <div className="flex gap-2 items-center">
        <Image
          height={50}
          width={50}
          src="/images/google.png"
          alt="profile"
          className="overflow-hidden rounded-full h-10 w-10 aspect-square bg-black"
        />
        <h1 className="text-sm">My name is</h1>
      </div>
      <div className="my-4 border-b border-slate-300 flex items-center justify-between gap-1">
        <span>Balance:</span>
        <b>#5000</b>
      </div>
      <div className="flex gap-3 justify-between">
        <button className="btn-secondary w-full px-1 py-2">Deposit</button>
        <button className="btn-secondary w-full px-1 py-2">Withdrawl</button>
      </div>
    </div>
  );
}
