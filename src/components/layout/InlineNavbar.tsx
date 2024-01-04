"use client";
import {
  ArrowBigDown,
  ArrowDownZaIcon,
  ChevronLeft,
  CornerDownLeft,
  CornerUpLeft,
  SkipBack,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const InlineNavbar = () => {
  const router = useRouter();
  return (
    <div
      className=" flex mb-4 gap-2 visible  py-4 md:p-0  md:relative text-muted-foreground items-center hover:underline hover:text-foreground cursor-pointer"
      onClick={() => router.back()}
    >
      <CornerUpLeft strokeWidth={1.5} size={18} />
      <p className="text-sm">Back</p>
    </div>
  );
};

export default InlineNavbar;
