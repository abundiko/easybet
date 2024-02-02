"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function AllBetsHeader() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-8 mt-3">
        {betLinks.map(({ title, to }) => {
          const active = pathname == to;
          return (
            <Link
              key={title}
              href={to}
              className={`${
                active ? "btn-primary" : "btn-white text-dark"
              } px-4 py-2`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const betLinks = [
  {
    title: "All Bets",
    to: "/user/all-bets",
  },
  {
    title: "Pending Bets",
    to: "/user/pending-bets",
  },
  {
    title: "Bet History",
    to: "/user/bet-history",
  },
  {
    title: "Transaction History",
    to: "/user/transaction-history",
  },
];
