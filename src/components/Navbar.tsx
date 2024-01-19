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
      <header className="px-[8vw] flex items-center justify-between h-16 shadow bg-primary-darker">
        <Link href="/">
          <h1 className="text-lg text-light">LOGO</h1>
        </Link>
        <div className="flex gap-2 ml-auto pr-2 items-center max-md:hidden">
          <SearchInput />
        </div>

        <div className="flex gap-2 bg-primary-dark rounded-lg p-1">
          <div className="flex max-md:hidden text-light">
            {
              defaultNavLinks.map(({ title, href, icon }) => (
          <Link key={title} href={href} className="hover:scale-110 py-2 px-3">
        {icon}
      </Link>
        ))
            }
          </div>
          <button className="max-md:hidden btn-secondary bg-secondary px-2 lg:px-4 py-1">
            Log in
          </button>
          <button className="max-md:hidden btn-primary-light px-2 lg:px-4 py-1">
            Sign Up
          </button>
          <button onClick={toggleSidebar} className="p-2 text-lg md:hidden text-light">
            <FaBars />
          </button>
        </div>
      </header>
      <div
        className={`flex h-full w-full fixed top-0 md:hidden z-30 transition ${
          !isOpen ? "translate-x-[105%]" : ""
        }`}
      >
        <div className="bg-[#000000aa] w-full" onClick={toggleSidebar} />
        <div className="w-[280px] bg-primary-dark flex-shrink-0 px-4 py-8 flex flex-col gap-4">
          <div className="flex gap-2">
            <button className="btn-secondary px-4 py-2 w-full">Log in</button>
            <button className="btn-primary-light px-4 py-2 w-full">
              Sign Up
            </button>
          </div>
          <MobileNavLink />
          <AccountCard />
          <SidePanelList />
        </div>
      </div>
    </>
  );
}

function MobileNavLink() {
  return (
    <nav className="flex justify-between items-center text-light md:hidden">
      {
        defaultNavLinks.map(({ title, href, icon }) => (
          <Link key={title} href={href} className="hover:underline">
        {title}
      </Link>
        ))
      }
    </nav>
  );
}

const defaultNavLinks = [
  {
    title: "Home",
    href: "/",
    icon: <FaHouse />
  },
  {
    title: "About Us",
    href: "/about",
    icon: <FaCircleInfo />
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: <FaPhone />
  },
]
