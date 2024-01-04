"use client";
import React from "react";
import { pages } from "./Navbar";
import Link from "next/link";
import { getYear } from "date-fns";
import { File, Linkedin, Twitter } from "lucide-react";
import { format } from "date-fns/esm";

const Footer = () => {
  const year = getYear(new Date());
  return (
    <footer className="mb-24 md:mb-32 mt-12 md:pt-8  text-muted-foreground flex flex-row   md:flex-row justify-between">
      <p className="text-muted-foreground text-sm">Copyright {year}</p>
      <div className="text-sm flex gap-3">
        <Link className="underline" href={"/imprint"}>
          Imprint
        </Link>
        <Link className="underline" href={"/colophon"}>
          Colophon
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
