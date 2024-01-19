import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <LeftPanel />
      <section className="w-full">
        {children}
      </section>
      <RightPanel />
    </div>
  );
}
