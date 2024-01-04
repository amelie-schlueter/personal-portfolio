"use client";
import { Layout } from "lucide-react";
import React from "react";
import CraftBanner from "../CraftBanner";
interface Props {
  title: string;
  icon: React.ReactNode;
  additionalLink?: React.ReactNode;
}

const Title = ({ title, icon, additionalLink }: Props) => {
  return (
    <div className=" h-fit md:mb-6 md:border-t md:p-2">
      <div className="flex gap-2 items-center  mt-3 text-muted-foreground">
        {icon && icon}
        <h3 className="text-md font-medium md:max-w-[200px]">{title}</h3>
      </div>
      {additionalLink && additionalLink}
    </div>
  );
};

export default Title;
