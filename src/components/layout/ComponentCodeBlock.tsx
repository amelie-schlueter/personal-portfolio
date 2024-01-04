import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ComponentCodeBlock = ({ children, className }: Props) => {
  return <div className=" border-[1px] rounded-md">{children}</div>;
};

export default ComponentCodeBlock;
