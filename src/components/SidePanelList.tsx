import Link from "next/link";

export default function SidePanelList() {
  return (
    <div className="rounded-lg bg-primary p-4 text-light flex flex-col gap-2">
      {links.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className="border-b inline-block border-[#ffffff22] pb-1 text-md"
        >
          {title}
        </Link>
      ))}
    </div>
  );
}

const links = [
  {
    title: "All Bets",
    href: "user/all-bets",
  },
  {
    title: "Pending Bets",
    href: "user/pending-bets",
  },
  {
    title: "Bet History",
    href: "user/bet-history",
  },
  {
    title: "Transaction History",
    href: "/",
  },
  {
    title: "Log Out",
    href: "/",
  },
];
