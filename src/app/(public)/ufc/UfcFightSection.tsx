import UfcCard, { UfcCardProps } from "./UfcCard";

export default function UfcFightSection() {
  return (
    <>
      {ufcCardsData.map((card, index) => (
        <UfcCard key={index} {...card} />
      ))}
    </>
  );
}

const ufcCardsData: UfcCardProps[] = [
  {
    name1: "Song",
    name2: "Guatierrez",
    people: "50",
    time: "15:45:06",
    ammount: 50,
    img: "/images/ufc_fight.png",
  },
  {
    name1: "Song",
    name2: "Guatierrez",
    people: "50",
    time: "15:45:06",
    ammount: 50,
    img: "/images/ufc_fight.png",
  },
  {
    name1: "Song",
    name2: "Guatierrez",
    people: "50",
    time: "15:45:06",
    ammount: 50,
    img: "/images/ufc_fight.png",
  },
  {
    name1: "Song",
    name2: "Guatierrez",
    people: "50",
    time: "15:45:06",
    ammount: 50,
    img: "/images/ufc_fight.png",
  },
];
