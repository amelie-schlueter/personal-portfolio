"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  title: string;
  link: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarItemMobile = ({ title, link, setOpen }: Props) => {
  const page = usePathname();

  return (
    <Link href={link} onClick={() => setOpen(() => !open)}>
      <div
        className={`px-8 ${
          page === link ? "bg-background" : null
        } py-3 rounded-full flex item-center w-fit cursor-pointer hover:underline transition-all`}
      >
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, easings: "spring" }}
          className="text-lg font-medium"
        >
          {title}
        </motion.p>
      </div>
    </Link>
  );
};

export default NavbarItemMobile;
