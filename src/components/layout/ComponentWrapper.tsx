import { cn } from "@/lib/utils";
import { Speaker, VolumeX } from "lucide-react";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  muted?: boolean;
}

const ComponentWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full border  p-4 md:p-8 relativeoverflow-hidden flex items-center justify-center relative  rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
