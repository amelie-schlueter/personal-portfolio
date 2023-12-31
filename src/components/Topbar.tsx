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
        <div className=" items-center gap-4 flex">
          <Image
            src={"/profile.png"}
            width={42}
            className="rounded-full"
            alt="profileimage"
            height={42}
          ></Image>
          <div className=" flex-col flex invisible md:visible">
            <p className="text-md leading-none">Amelie Schlüter</p>
            <p className="text-muted-foreground text-sm">Creative Developer</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <CommandLine />
        <Button variant={"outline"}>Lets connect</Button>
        <ModeToggle />
      </div>
      <MobileTopbar />
    </nav>
  );
};

export default Topbar;
