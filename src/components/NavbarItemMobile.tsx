"use client";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  title: string;
  link: string;
}

const NavbarItemMobile = ({ title, link }: Props) => {
  const page = usePathname();
  console.log(page);
  return (
    <div
      className={`px-8 ${
        page === link ? "bg-background" : null
      } py-3 rounded-full flex item-center w-fit cursor-pointer hover:underline transition-all`}
    >
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};

export default NavbarItemMobile;
