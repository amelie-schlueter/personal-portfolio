"use client";
import { Post } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  post: Post;
}

const CraftItem = ({ post }: Props) => {
  return (
    <Link href={post.slug}>
      <div
        className={`h-[300px] w-full relative  cursor-pointer overflow-hidden`}
      >
        <video src={post.video} autoPlay muted loop className="w-screen" />
        <div className="absolute top-3 right-0 h-fit z-100 px-3 opacity-0">
          <ArrowUpRight strokeWidth={1.5} size={18} />
        </div>
        <div className="w-full flex items-center justify-between absolute bottom-0 text-white right-0 left-0 px-3 text-sm py-2">
          <p>{post.title}</p>
          <p className="">{post.type}</p>
        </div>
      </div>
    </Link>
  );
};

export default CraftItem;
