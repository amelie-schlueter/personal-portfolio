import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
interface Props {
  columns?: number;
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ columns, children, className }: Props) => {
  return (
    <div
      className={cn(
        `grid md:grid-cols-[1fr,1.75fr] gap-2 md:gap-16`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;

export const GridItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("border-t pt-6", className)}>{children}</div>;
};
