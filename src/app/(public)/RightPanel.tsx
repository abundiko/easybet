import AccountCard from "@/components/AccountCard";
import SidePanelList from "@/components/SidePanelList";

export default function RightPanel() {
  return (
    <div className="w-3/12 min-w-[260px] bg-red flex flex-col gap-2 flex-shrink-0 p-2 py-4 max-md:hidden sticky top-0 h-fit">
      <AccountCard />
      <SidePanelList />
    </div>
  );
}
