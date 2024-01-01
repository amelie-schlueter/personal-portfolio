import React from "react";
import { Button } from "./ui/button";
import { Speech } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CommandLine } from "./CommandLine";
import MobileTopbar from "./MobileTopbar";

const Topbar = () => {
  return (
    <nav className=" container flex items-center justify-between w-full py-1 md:py-4">
      <Link href={"/"}>
        <div className=" flex-col flex text-sm">
          <p className="text-sm leading-none">Amelie Schlüter</p>
        </div>
      </Link>

      <p className="text-muted-foreground text-sm">Creative Developer</p>

      <MobileTopbar />
    </nav>
  );
};

export default Topbar;
