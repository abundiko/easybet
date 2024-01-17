"use client";
import Link from "next/link";
import AccountCard from "@/components/AccountCard";
import SidePanelList from "@/components/SidePanelList";
import { useState } from "react";
import { FaBars, FaPhone, FaHouse, FaCircleInfo } from "react-icons/fa6";
import SearchInput from "@/app/(public)/Search";
// import MyNavLink from "@/components/Navbar";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <>
      <header className="px-[10vw] flex items-center justify-between h-16 shadow bg-primary-darker">
        <Link href="/">
          <h1 className="text-lg text-light">LOGO</h1>
        </Link>
        <div className="flex gap-2 ml-auto pr-3 items-center max-md:hidden">
          <SearchInput />
        </div>

        <div className="flex gap-2 bg-primary-dark rounded-lg">
          <button className="max-md:hidden text-light px-4 py-2">
            <FaHouse />
          </button>
          <button className="max-md:hidden text-light px-4 py-2">
            <FaCircleInfo />
          </button>
          <button className="max-md:hidden text-light px-4 py-2">
            <FaPhone />
          </button>
          <button className="max-md:hidden btn-secondary bg-secondary px-4 py-2">
            Log in
          </button>
          <button className="max-md:hidden btn-primary-light px-4 py-2">
            Sign Up
          </button>
          <button onClick={toggleSidebar} className="p-2 text-lg md:hidden">
            <FaBars />
          </button>
        </div>
      </header>
      <div
        className={`flex h-full w-full fixed md:hidden z-30 transition ${
          !isOpen ? "translate-x-[105%]" : ""
        }`}
      >
        <div className="bg-[#000000aa] w-full" onClick={toggleSidebar} />
        <div className="w-[280px] bg-light flex-shrink-0 px-4 py-8 flex flex-col gap-4">
          <div className="flex gap-2">
            <button className="btn-secondary px-4 py-2 w-full">Log in</button>
            <button className="btn-primary-light px-4 py-2 w-full">
              Sign Up
            </button>
          </div>
          <MyNavLink />
          <AccountCard />
          <SidePanelList />
        </div>
      </div>
    </>
  );
}

export function MyNavLink() {
  return (
    <nav className="flex justify-center items-center text-light">
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/">
        <span>About</span>
      </Link>
      <Link href="/">
        <span>Contact Us</span>
      </Link>
    </nav>
  );
}
