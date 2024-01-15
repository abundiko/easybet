'use client'

import Link from "next/link";
import AccountCard from "@/components/AccountCard";
import SidePanelList from "@/components/SidePanelList";
import { useState } from "react";
import {FaBars} from 'react-icons/fa6'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = ()=> setOpen(!isOpen);

  return (
    <>
    <header className="px-[10vw] flex items-center justify-between h-16 shadow">
      <Link href="/">
        <h1 className="text-lg">LOGO</h1>
      </Link>
      <div className="flex gap-2">
        <button className="max-md:hidden btn-secondary px-4 py-2">Log in</button>
        <button className="max-md:hidden btn-primary-light px-4 py-2">Sign Up</button>
        <button onClick={toggleSidebar} className="p-2 text-lg md:hidden">
          <FaBars />
        </button>
      </div>
    </header>
    <div className={`flex h-full w-full fixed md:hidden z-30 transition ${
      !isOpen ? "translate-x-[105%]" : ''
    }`}>
      <div className="bg-[#000000aa] w-full" onClick={toggleSidebar} />
      <div className="w-[280px] bg-light flex-shrink-0 px-4 py-8 flex flex-col gap-4">
        <div className="flex gap-2">
        <button className="btn-secondary px-4 py-2 w-full">Log in</button>
        <button className="btn-primary-light px-4 py-2 w-full">Sign Up</button>
        </div>
        <AccountCard />
        <SidePanelList />
      </div>
    </div>
    </>
  );
}
