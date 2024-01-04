import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  language: string;
  variant?: "component" | "default";
}

const CodeContent = ({ children, className, language, variant }: Props) => {
  return (
    <div>
      <pre className={cn("w-full bg-transparent", className)}>
        <code
          className={cn(
            codeBlockVariants({ variant, className }),
            `language-${language}`
          )}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeContent;

const codeBlockVariants = cva(
  " py-6 overflow-x-scroll custom-scrollbar   w-full  px-2  text-sm",
  {
    variants: {
      variant: {
        component: "border-t-[1px]",
        default: "rounded-md border-[1px]",
      },
    },
    defaultVariants: {
      variant: "component",
    },
  }
);
