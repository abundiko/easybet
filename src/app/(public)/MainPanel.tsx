import BetsSection from "./BetsSection";
import HeroSection from "./HeroSection";
import SearchInput from "./Search";
import CenterPanel from "./CenterPanel";

export default function MainPanel() {
  return (
    <>
      <HeroSection />
      <div className="md:hidden p-3 flex">
        <SearchInput />
      </div>
      <CenterPanel />
      <BetsSection />
    </>
  );
}
