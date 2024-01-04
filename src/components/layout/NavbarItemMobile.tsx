"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  title: string;
  link: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: Number;
}

const NavbarItemMobile = ({ title, link, setOpen, index }: Props) => {
  const page = usePathname();

  const ItemAnimation = {
    inital: {
      opacity: 0,
      y: 20,
    },
    animate: (i: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: 0.3 + i * 0.1,
        },
      };
    },
    exit: (i: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: i * 0.1,
        },
      };
    },
  };

  return (
    <motion.p
      custom={index}
      variants={ItemAnimation}
      initial="inital"
      animate="animate"
      exit="exit"
      className="text-lg font-medium"
    >
      <Link href={link} onClick={() => setOpen(() => !open)}>
        <div
          className={`px-8 ${
            page === link ? "bg-background" : null
          } py-3 rounded-full flex item-center w-fit cursor-pointer hover:underline transition-all`}
        >
          {title}
        </div>
      </Link>
    </motion.p>
  );
};

export default NavbarItemMobile;
