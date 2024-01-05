import Footer from "@/components/layout/Footer";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default layout;
