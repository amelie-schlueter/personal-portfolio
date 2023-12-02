import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { Projectdatepicker } from "@/components/datepicker";

import React from "react";

const Page = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-medium">Crafts</h1>
      <div className="bg-muted  h-72  w-full flex items-center justify-center overflow-hidden h-screen">
        <Projectdatepicker />
      </div>
    </div>
  );
};

export default Page;
