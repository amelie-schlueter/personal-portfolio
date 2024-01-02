import React from "react";
import { Button } from "./ui/button";
import { Speech } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CommandLine } from "./CommandLine";
import MobileTopbar from "./MobileTopbar";

const Topbar = ({
  size,
  className,
}: {
  size?: "sm" | "base";
  className?: string;
}) => {
  return (
    <nav
      className={cn(
        "mx-auto container  justify-between flex gap-6  items-center py-3  px-4",
        className
      )}
    >
      <Link href={"/"}>
        <div className=" flex-col flex ">
          <p className=" leading-none">Amelie Schlüter</p>
        </div>
      </Link>

      <p className="text-muted-foreground ">Creative Developer</p>

      <MobileTopbar />
    </nav>
  );
};

export default Topbar;
