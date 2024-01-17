import Image from "next/image";

type CenterPanelCardProps = {
  image: string;
};

export default function CenterPanelCard({ image }: CenterPanelCardProps) {
  return (
    <div className="w-16 h-16 bg-secondary-light rounded-md md:hidden flex justify-center items-center ">
      <div style={{ padding: "20px 0" }}>
        <Image
          src={image}
          alt={`Image ${image}`}
          width={100}
          height={100}
          className="w-10"
        />
      </div>
    </div>
  );
}
