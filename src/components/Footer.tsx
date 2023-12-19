"use client";
import React from "react";
import { pages } from "./Navbar";
import Link from "next/link";
import { getYear } from "date-fns";
import { File, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pb-4  mt-12 md:pt-8 md:mb-6 container ">
      <div className="flex flex-row w-full justify-between md:flex-row border-t-[1px] pt-4 items-center ">
        <div className=" flex flex-col items-start  justify-center">
          <p className="text-lg leading-none">Amelie Schlüter</p>
          <p className="text-muted-foreground">Designer & Developer</p>
        </div>
        <div className="text-muted-foreground text-xs">
          <div className="flex gap-2 my-4">
            <Link
              className="hover:underline hover:text-foreground"
              href={"/imprint"}
            >
              Imprint
            </Link>
            <Link
              className="hover:underline hover:text-foreground"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* <div className="flex flex-col justify-between gap-10 md:flex-row w-1/2 lg:w-1/3">
          <div>
            <p className="font-semibold">Navigation</p>

            <div className="flex flex-col mt-3 gap-2">
              {pages.map((page) => {
                return (
                  <Link
                    className={`text-muted-foreground hover:text-white hover:underline text-sm`}
                    href={page.link}
                    key={page.title}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-semibold">Connection</p>

            <div className="flex flex-col mt-3 gap-2    ">
              <Link
                href="https://twitter.com/amelieschltr"
                className="flex items-center text-muted-foreground  hover:text-foreground  text-sm "
              >
                X
              </Link>
              <Link
                href=""
                className="flex items-center text-muted-foreground hover:text-foreground  text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href=""
                className="flex items-center text-muted-foreground hover:text-foreground  text-sm "
              >
                CV
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
