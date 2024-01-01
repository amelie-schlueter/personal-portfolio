import Topbar from "@/components/Topbar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
};

export default layout;
