import UfcHeroSection from "./UfcHeroSection";
import UfcBet from "./UfcBet";
import UfcFightSection from "./UfcFightSection";
import UfcMatchDetails from "./[fight]/UfcMatchDetails";
export default function UfcPage() {
  return (
    <div>
      <UfcHeroSection />
      <UfcBet />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-8 px-4">
        <UfcFightSection />
      </div>
      {/* <UfcMatchDetails /> */}
    </div>
  );
}
