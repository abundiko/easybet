import CenterPanelCard from "./CenterPanelCard";

export default function CenterPanel() {
  return (
    <div className="flex justify-center items-center mt-2 ">
      <div className="flex gap-16  ">
        {images.map((item) => (
          <CenterPanelCard key={item} image={item} />
        ))}
      </div>
    </div>
  );
}

const images = ["/images/football.png", "/images/ufc.png"];
