import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container px-4 py-12 mb-12 md:my-10 h-full">{children}</div>
  );
};

export default layout;
