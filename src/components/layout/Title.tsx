"use client";
import { Layout } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  additionalLink?: React.ReactNode;
}

const Title = ({ title, icon, additionalLink }: Props) => {
  return (
    <div className=" h-fit md:mb-6 ">
      <div className="flex gap-2 items-center  text-muted-foreground">
        {icon && icon}
        <h2 className="text-base font-medium md:max-w-[200px]">{title}</h2>
      </div>
      {additionalLink && additionalLink}
    </div>
  );
};

export default Title;
