import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MainPanel from "./MainPanel";

export default function Home() {
  return (
    <div className="flex gap-2">
      <LeftPanel />
      <MainPanel />
      <RightPanel />
    </div>
  );
}
