import Navbar from "@/components/Navbar";
import TabsComponent from "@/components/Tabs";
import Topbar from "@/components/Topbar";
import React from "react";

const Page = () => {
  return (
    <div className="container">
      {/* <h1 className="text-4xl font-medium">Work</h1>
       */}

      <div className="py-32">
        <TabsComponent />
      </div>
    </div>
  );
};

export default Page;
