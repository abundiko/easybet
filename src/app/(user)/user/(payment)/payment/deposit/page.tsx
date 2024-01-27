import Deposit from "./Deposit";
import DepositCard from "./DepositCard";
import DepositOption from "./Depositoption";

export default function Page() {
  return (
    <div className=" flex justify-center items-center flex-col bg-secondary-light">
      <Deposit />
      <div className="mt-3">
        <DepositOption />
      </div>
      <DepositCard />
    </div>
  );
}
