import React from "react";
import { Button } from "./ui/button";
import { Speech } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-4">
      <Link href={"/"}>
        <div className="flex items-center gap-4">
          <Image
            src={"/profile.png"}
            width={42}
            className="rounded-full"
            alt="profileimage"
            height={42}
          ></Image>
          <div className="flex flex-col ">
            <p className="text-lg leading-none">Amelie Schlüter</p>
            <p className="text-muted-foreground">Designer & Developer</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Button variant={"outline"}>Let's connect</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Topbar;
