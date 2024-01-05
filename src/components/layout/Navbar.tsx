"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { AnimatePresence, motion } from "framer-motion";
import {
  Glasses,
  Home,
  HomeIcon,
  Mail,
  Menu,
  MoreHorizontal,
  PaintBucket,
  PenTool,
  Pointer,
  Twitter,
  User,
  X,
  XIcon,
} from "lucide-react";

import { ModeToggle } from "./Mode-toggle";
import XLogo from "@/lib/icons/xLogo";

export const pages: {
  title: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon strokeWidth={1.5} width={20} />,
  },
  {
    title: "Writing",
    link: "/journal",
    icon: <Glasses strokeWidth={1.5} width={20} />,
  },
  {
    title: "Interaction Corner",
    link: "/crafts",
    icon: <Pointer strokeWidth={1.5} width={20} />,
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
      <div className=" bg-muted ring-1 ring-accent px-1 py-1 rounded-full  gap-2 w-fit fixed bottom-8 left-0 right-0 mx-auto z-50  flex ">
        {pages.map((page) => (
          <NavbarItem
            title={page.title}
            link={page.link}
            key={page.title}
            icon={page.icon}
          />
        ))}

        <div className="h-10 w-[1px] bg-foreground/10 my-auto mx-2"></div>
        <MobileExpand />
        <div className="gap-2 md:flex hidden">
          {sublinks.map((page) => {
            return (
              <NavbarItem
                title={page.title}
                link={page.link}
                key={page.title}
                icon={page.icon}
              />
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const sublinks: {
  title: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "X",
    link: "https://twitter.com/amelieschltr",
    icon: <XLogo />,
  },
  {
    title: "Mail",
    link: "mailto:as@amelieschlueter.com",
    icon: <Mail strokeWidth={1.5} width={20} />,
  },
];

export const MobileExpand = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={NavAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute  right-0 flex flex-col gap-2 bg-muted rounded-full p-1"
          >
            {sublinks.map((page) => {
              return (
                <NavbarItem
                  title={page.title}
                  link={page.link}
                  key={page.title}
                  icon={page.icon}
                />
              );
            })}
            <ModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex md:hidden items-center justify-center flex-col">
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.2,
          }}
          onClick={() => setOpen(() => !open)}
          transition={{ duration: 0.03, type: "spring" }}
          className={`"bg-background bg-muted  h-12 w-12 rounded-full flex  flex-col item-center shadow-sm relative cursor-pointer  ring-1 ring-foreground/10  transition-all items-center justify-center`}
        >
          <MoreHorizontal strokeWidth={1.5} width={20} />
        </motion.div>
      </div>
    </div>
  );
};

export const NavAnimation = {
  initial: {
    y: "0%", // Move the component off-screen initially
    opacity: 0,
  },
  animate: {
    y: "-110%", // Animate to the on-screen position
    opacity: 100,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "0%", // Animate off-screen on exit
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
