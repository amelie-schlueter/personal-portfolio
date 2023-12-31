"use client";
import Navbar from "@/components/layout/Navbar";
import Topbar from "@/components/layout/Topbar";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function Page() {
  const path = usePathname();
  console.log("this is path", path);
  return (
    <div className="container">
      <h1 className="text-4xl font-medium"></h1>
    </div>
  );
}

export default Page;
