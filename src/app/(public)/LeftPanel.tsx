import LeftpanelCard from "@/components/LeftpanelCard";

export default function LeftPanel() {
  return (
    <div className="w-14 max-sm:hidden bg-primary flex ml-1 flex-col gap-2 flex-shrink-0 rounded mt-1 justify-center items-center">
      {images.map((item) => (
        <LeftpanelCard key={item} image={item} />
      ))}
    </div>
  );
}

const images = ["/images/football.png", "/images/ufc.png"];
