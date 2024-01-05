"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Dot, PenTool } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { type } from "os";
import { isAscii } from "buffer";
interface Props {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const NavbarItem = ({ title, link, icon }: Props) => {
  const [active, setActive] = React.useState(false);
  const page = usePathname();
  console.log({ page }, { link });

  useEffect(() => {
    if (page === link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [link, page]);

  return (
    <Link href={link} className="flex items-center justify-center ">
      <TooltipProvider>
        <Tooltip delayDuration={0.1}>
          <TooltipTrigger className="flex items-center justify-center flex-col">
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.1,
              }}
              transition={{ duration: 0.03, type: "spring" }}
              className={`${
                page == link ? "bg-background bottom-3 shadow-md" : "bg-muted "
              }  h-12 w-12 rounded-full flex  flex-col item-center shadow-sm relative cursor-pointer  ring-1 ring-foreground/10  transition-all items-center justify-center`}
            >
              {icon}
            </motion.div>
            {active && <Dot className="absolute bottom-[-5px]" width={18} />}
          </TooltipTrigger>
          <TooltipContent className="" sideOffset={20}>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default NavbarItem;
