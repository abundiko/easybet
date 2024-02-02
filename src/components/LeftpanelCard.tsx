import Image from "next/image";

type LeftPanelCardProps = {
  image: string;
};

export default function LeftPanelCard({ image }: LeftPanelCardProps) {
  return (
    <div className="py-10 px-2">
      <Image
        src={image}
        alt={`Image ${image}`}
        width={100}
        height={100}
        className="w-20"
      />
    </div>
  );
}
