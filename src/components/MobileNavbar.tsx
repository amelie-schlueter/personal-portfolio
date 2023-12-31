import React from "react";
import NavbarItemMobile from "./NavbarItemMobile";
import { pages } from "./Navbar";
import { Menu, X } from "lucide-react";
import { AnimatePresence, delay, motion } from "framer-motion";

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sm:hidden shadow-lg relative z-[100]">
      <div
        className=" w-14 h-14 rounded-full flex items-center justify-center bg-muted fixed bottom-10 left-0 right-0 mx-auto z-[1000]"
        onClick={() => setOpen(() => !open)}
      >
        {open ? (
          <motion.div className="">
            <X />
          </motion.div>
        ) : (
          <motion.div className="flex  flex-col gap-1 items-center justify-center">
            <div className="h-[2px] w-6 bg-foreground "></div>
            <div className="h-[2px] w-6 bg-foreground"></div>
            <div className="h-[2px] w-6 bg-foreground"></div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={NavAnimation}
            className="bg-background px-1 py-1 fixed bottom-0 pb-36 left-0 right-0 mx-auto z-12 rounded-lg w-full flex items-center flex-col h-screen justify-end "
          >
            {pages.map((page, index) => (
              <NavbarItemMobile
                key={page.title}
                title={page.title}
                link={page.link}
                setOpen={setOpen}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;

export const NavAnimation = {
  initial: {
    y: "100%", // Move the component off-screen initially
  },
  animate: {
    y: "0%", // Animate to the on-screen position
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "100%", // Animate off-screen on exit
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
