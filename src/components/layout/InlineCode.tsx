import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const InlineCode = ({ children }: PropsWithChildren) => {
  return (
    <pre className={cn("w-full  py-2 rounded-md bg-transparent")}>
      <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 py-1 rounded-[7px] text-sm">
        {children}
      </code>
    </pre>
  );
};

export default InlineCode;
