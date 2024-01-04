import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ComponentWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full mb-8 border  p-4 md:p-8 overflow-hidden flex items-center justify-center relative  rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
