import React, { Children, PropsWithChildren } from "react";

const EntryWrapper = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[600px] relative mx-auto">{children}</div>;
};

export default EntryWrapper;
