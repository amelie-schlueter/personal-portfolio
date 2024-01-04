import Topbar from "@/components/layout/Topbar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/* <Topbar /> */}
      {children}
    </div>
  );
};

export default layout;
