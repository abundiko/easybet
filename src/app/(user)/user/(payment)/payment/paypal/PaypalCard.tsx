import Link from "next/link";
import { FaCopy } from "react-icons/fa6";

export default function PaypalCard() {
  return (
    <div>
      <div className="flex flex-col gap-1 bg-secondary-light border border-gray-300 p-4 rounded">
        <p>
          if you have paypal app, copy the tag and paste on your app to complete
          the transaction. else {""}
          <Link href="/" className="text-red-500">
            click here
          </Link>{" "}
          to go to paypal platform
        </p>
        <p className="mt-3">
          <span className="font-bold">Notice:</span> you wil be charged $0.08
          for processing fee
        </p>
      </div>
      <div className="flex mt-20 justify-center items-center gap-3">
        <p className="font-bold">paypal</p>
        <div className="bg-secondary-light w-1/2 h-8"></div>
        <FaCopy />
      </div>
    </div>
  );
}
