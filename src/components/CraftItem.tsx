"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  content: string;
  tech: string;
  clickable?: boolean;
  slug?: string;
}

const CraftItem = ({ content, title, tech, clickable, slug }: Props) => {
  const router = useRouter();
  return (
    <div
      className={`h-[300px] w-full relative overflow-hidden ${
        clickable ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (clickable) {
          router.push(`/crafts/${slug}`);
        }
      }}
    >
      <video src={content} autoPlay muted loop className="w-screen" />
      <div className="absolute top-3 right-0 h-fit z-100 px-3 opacity-0">
        <ArrowUpRight strokeWidth={1.5} size={18} />
      </div>
      <div className="w-full flex items-center justify-between absolute bottom-0 text-white right-0 left-0 px-3 text-sm py-2">
        <p>{title}</p>
        <p className="">{tech}</p>
      </div>
    </div>
  );
};

export default CraftItem;
