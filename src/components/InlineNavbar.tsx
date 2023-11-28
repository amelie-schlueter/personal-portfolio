"use client";
import { ChevronLeft, SkipBack } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const InlineNavbar = () => {
  const router = useRouter();
  return (
    <div
      className="flex py-4 items-center hover:underline hover:text-opacity-80 cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft className="w-6 h-6 " />
      <p className="text-sm">Back</p>
    </div>
  );
};

export default InlineNavbar;
