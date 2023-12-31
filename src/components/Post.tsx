"use client";
import { Doc } from "contentlayer/generated";
import { format } from "date-fns";
import React from "react";
import { Mdx } from "./MDX";
import { AnimatePresence, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import InlineNavbar from "./InlineNavbar";
import TOC from "./TOC";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowDown, CornerDownLeft, CornerUpLeft, List } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

import { Button } from "./ui/button";

const Post = ({ doc }: { doc: Doc }) => {
  const date = new Date(doc.publishedAt);
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = React.useState(false);
  const headings = doc.headings;
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <div className="sticky hidden md:visible z-[200] w-full h-fit top-4 ">
          <div
            className="flex md:flex gap-2  text-muted-foreground items-center hover:underline hover:text-foreground cursor-pointer"
            onClick={() => router.push("/journal")}
          >
            <CornerUpLeft strokeWidth={1.5} size={18} />
            <p className="text-sm">Back</p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-[1fr,1.25fr] relative ">
          <MobileInlineNav headings={headings} />
          <div className="mb-10 md:sticky bg-background top-10 pt-4 h-fit w-full">
            <div className="flex items-center justify-between w-full ">
              <div className=" w-full">
                <h1 className="text-lg font-semibold max-w-[300px] md:max-w-[300px]">
                  {doc.title}
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {format(date, "EE, dd MMM yyyy")}
                </p>
              </div>
            </div>
            <TOC headings={headings} className="hidden md:flex" />
          </div>

          <Mdx code={doc.body.code} />
        </div>
      </div>
    </>
  );
};

export default Post;

interface TOCProps {
  headings: {
    level: number;
    text: string;
    slug: string;
  }[];
  className?: string;
}
export const MobileInlineNav = ({ headings, className }: TOCProps) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      className="h-fit md:hidden sticky w-full left-0 top-0 bg-background flex flex-col items-end py-4"
    >
      <div className="flex w-full justify-between py-1  items-center">
        <div
          className="flex md:flex gap-2 text-muted-foreground items-center hover:underline hover:text-foreground cursor-pointer"
          onClick={() => router.push("/journal")}
        >
          <CornerUpLeft strokeWidth={1.5} size={18} />
          <p className="text-sm">Back</p>
        </div>
        {headings.length != 0 && (
          <div
            onClick={() => setOpen(() => !open)}
            className="cursor-pointer text-foreground   rounded-full  flex  items-start justify-center "
          >
            {!open ? (
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <List strokeWidth={1.5} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Table of Content</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <CornerDownLeft size={18} className="" strokeWidth={1.5} />
            )}
          </div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial="initial"
            animate="animate"
            exit="exit"
            variants={NavAnimation}
            className={cn("flex flex-col gap-2 rounded-sm ")}
          >
            {headings.map((heading) => (
              <div
                key={`${heading.slug}`}
                onClick={() => {
                  router.push(`#${heading.slug}`);
                  setOpen(() => !open);
                }}
                className="text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:underline"
              >
                {heading.text}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const NavAnimation = {
  initial: {
    x: "300%", // Move the component off-screen initiallx
  },
  animate: {
    x: "0%", // Animate to the on-screen position
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "300%", // Animate off-screen on exit
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
