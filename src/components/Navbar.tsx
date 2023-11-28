"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { Menu, X } from "lucide-react";
import NavbarItemMobile from "./NavbarItemMobile";
import MobileNavbar from "./MobileNavbar";

export const pages: {
  title: string;
  link: string;
}[] = [
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Journal",
    link: "/journal",
  },
  {
    title: "Playground",
    link: "/playground",
  },
];

const Navbar = () => {
  return (
    <div className="">
      <div className=" container bg-muted px-1 py-1 rounded-full  w-fit fixed bottom-8 left-0 right-0 mx-auto z-50 hidden sm:flex">
        {pages.map((page) => (
          <NavbarItem title={page.title} link={page.link} key={page.title} />
        ))}
      </div>

      {/*Mobile Navbar*/}
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
