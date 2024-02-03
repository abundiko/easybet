import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LeftPanel from "@/app/(public)/LeftPanel";
import RightPanel from "@/app/(public)/RightPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eazy bet",
  description: "start betting today",
  icons: ["/images/ufc.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex gap-2">
        <LeftPanel />
        <section className="w-full">{children}</section>
        <RightPanel />
      </div>
    </>
  );
}
