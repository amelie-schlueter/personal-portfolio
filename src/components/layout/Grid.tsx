import Link from "next/link";
import React, { PropsWithChildren } from "react";
interface Props {
  columns?: number;
  children: React.ReactNode;
}

const Grid = ({ columns, children }: Props) => {
  return (
    <div className={`grid md:grid-cols-[1fr,1.75fr] gap-6`}>{children}</div>
  );
};

export default Grid;
