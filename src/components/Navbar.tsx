"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import {
  Glasses,
  Home,
  Menu,
  PaintBucket,
  PenTool,
  User,
  X,
} from "lucide-react";
import NavbarItemMobile from "./NavbarItemMobile";
import MobileNavbar from "./MobileNavbar";

export const pages: {
  title: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Journal",
    link: "/journal",
    icon: <Glasses strokeWidth={1.5} width={20} />,
  },
  {
    title: "Crafts",
    link: "/crafts",
    icon: <PaintBucket strokeWidth={1.5} width={20} />,
  },
  {
    title: "About",
    link: "/about",
    icon: <User strokeWidth={1.5} width={20} />,
  },
];

const Navbar = () => {
  return (
    <div className="">
      <div className=" container bg-muted ring-1 ring-accent px-1 py-1 rounded-full  gap-2 w-fit fixed bottom-8 left-0 right-0 mx-auto z-50 hidden sm:flex ">
        {pages.map((page) => (
          <NavbarItem
            title={page.title}
            link={page.link}
            key={page.title}
            icon={page.icon}
          />
        ))}
      </div>

      {/*Mobile Navbar*/}
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
