import Footer from "@/components/layout/Footer";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container px-4 py-12 h-full">
      {/* Navigation */}
      <div className="md:my-10">{children}</div>
      <Footer className="max-w-[600px] mx-auto" />
    </div>
  );
};

export default layout;
