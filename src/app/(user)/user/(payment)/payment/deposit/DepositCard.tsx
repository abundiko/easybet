import Image from "next/image";

export default function DepositCard() {
  return (
    <div className="flex justify-center items-center  gap-5">
      {images.map((image, index) => (
        <div key={index} className="bg-primary">
          <Image
            src={image}
            width={100}
            height={100}
            className="h-20 w-20"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

const images = ["/images/Maskgroup.png", "/images/Maskgroup.png"];
