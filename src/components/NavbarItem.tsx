"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  title: string;
  link: string;
}

const NavbarItem = ({ title, link }: Props) => {
  const page = usePathname();
  console.log(page);
  if (page.includes(link)) {
    console.log("mark", title);
  }
  return (
    <Link href={link}>
      <div
        className={`px-8 ${
          page.includes(link) ? "bg-background" : null
        } py-3 rounded-full flex item-center w-fit cursor-pointer hover:underline transition-all`}
      >
        <p className="text-md font-medium">{title}</p>
      </div>
    </Link>
  );
};

export default NavbarItem;
