import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsComponent = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">November 2023</TabsTrigger>
        <TabsTrigger value="password">December 2023</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabsComponent;
