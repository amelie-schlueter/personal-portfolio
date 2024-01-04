"use client";
import { CraftArrItem } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  craft: CraftArrItem;
}

const CraftItem = ({ craft }: Props) => {
  const { resolvedTheme: currentTheme } = useTheme();
  return (
    <Link href={`crafts/${craft.slug}`}>
      <div
        className={`h-[320px] text-white w-full relative cursor-pointer overflow-hidden rounded-md`}
      >
        <motion.video
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, bounce: 0.2 },
          }}
          src={currentTheme == "dark" ? craft.video_dark : craft.video_light}
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full object-cover right-0 left-0"
        />
        <div className="absolute top-3 right-0 h-fit z-100 px-3 opacity-0">
          <ArrowUpRight strokeWidth={1.5} size={18} />
        </div>
        {/* <div className="w-full flex items-center opacity-0 hover:opacity-90 justify-between absolute top-0 text-white right-0 left-0 px-3 text-sm py-2">
          <p>{format(new Date(craft.date), "EE, dd.MMM yyyy")}</p>
        </div> */}
        <div className="w-full flex items-center justify-between absolute bottom-0 text-white right-0 left-0 px-3 text-sm py-2">
          <p className="text-white">{craft.title}</p>
          <p className="text-white">{craft.type}</p>
        </div>
      </div>
    </Link>
  );
};

export default CraftItem;
