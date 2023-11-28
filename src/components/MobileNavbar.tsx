import React from "react";
import NavbarItemMobile from "./NavbarItemMobile";
import { pages } from "./Navbar";
import { Menu, X } from "lucide-react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { transcode } from "buffer";

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sm:hidden shadow-lg relative z-[100]">
      <div
        className="bg-muted p-5 w-fit rounded-full fixed bottom-10 left-0 right-0 mx-auto z-[1000]"
        onClick={() => setOpen(() => !open)}
      >
        {open ? (
          <motion.div>
            <X size={24} />
          </motion.div>
        ) : (
          <Menu size={24} />
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-background px-1 py-1 fixed bottom-0 pb-36 left-0 right-0 mx-auto z-12 rounded-lg w-full flex items-center flex-col h-screen justify-end "
          >
            {pages.map((page) => (
              <NavbarItemMobile
                key={page.title}
                title={page.title}
                link={page.link}
                setOpen={setOpen}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
