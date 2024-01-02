import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container px-4 py-12 h-full">
      {/* Navigation */}
      <div className="md:my-10">{children}</div>
    </div>
  );
};

export default layout;
