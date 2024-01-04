import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ComponentContent = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "p-10  min-h-[200px] flex items-center justify-center  max-h-[300px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ComponentContent;
