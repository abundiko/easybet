import CenterPanelCard from "./CenterPanelCard";

export default function CenterPanel() {
  return (
    <div className="flex justify-center items-center mt-2 gap-10 pb-6 ">
      {images.map(item => <CenterPanelCard key={item} image={item} />)}
    </div>
  );
}

const images = ["/images/football.png", "/images/ufc.png"];
