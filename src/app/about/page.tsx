import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Workexperience from "@/components/Workexperience";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { File, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { workExperience } from "@/lib/data";
import NextLogo from "@/lib/icons/NextLogo";
import TsLogo from "@/lib/icons/TSLogo";
import TwLogo from "@/lib/icons/TwLogo";
import ReactIcon from "@/lib/icons/ReactIcon";
import XLogo from "@/lib/icons/xLogo";
import JsLogo from "@/lib/icons/JSLogo";

const Page = () => {
  return (
    <div className="container">
      <div className="flex flex-col py-12 md:py-24 gap-4 items-start justify-end   md:grid md:grid-cols-2 md:justify-end ">
        <div className="flex flex-col gap-10">
          <div className="max-w-md">
            <div className="mb-6 text-4xl">
              <h1 className="font-medium">Who i am.</h1>
            </div>
            <p className="text-muted-foreground max-w-xl ">
              My name is Amelie and i am currently studying Interaction Design
              at the HfG Schwaebisch Gmuend. I am passionate about creating
              meaningful digital products.
            </p>
            <p className="mt-4">
              If i am not pushing pixel, i love to go to the gym and spend time
              with my friends and family to recharge my battery 🔋.
            </p>
          </div>
          <div className="">
            <p className="text-muted-foreground font-">Tech Stack</p>
            <h3 className="text-2xl font-medium">Technology</h3>
            <div className="flex gap-4 mt-6">
              {/*Technology Item*/}
              {/*Next*/}
              <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                <NextLogo />
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                <TsLogo />
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                <TwLogo />
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center py-2 text-foreground">
                <ReactIcon />
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center py-2 text-foreground">
                <JsLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Image
            src="/profile.png"
            width={300}
            height={300}
            alt="profile-image"
            className="rounded-full"
          ></Image>
          <div className="flex gap-4 py-4">
            <a
              target="_blank"
              href="https://twitter.com/amelieschltr"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2 text-foreground"
              )}
            >
              <div className="w-4 h-4">
                <XLogo />
              </div>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/amelieschltr"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              target="_blank"
              href="https://read.cv/amelieschltr"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <File size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <section className="w-full my-10" id="work">
        <div className="flex flex-col md:grid md:grid-cols-[2fr,2fr]  h-full">
          {/*Header*/}
          <div className="w-full mb-6 md:sticky md:top-10 h-fit">
            <p className="text-muted-foreground font-">Work</p>
            <h3 className="text-2xl font-medium">My Experience</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
          {workExperience.map((work) => (
            <Workexperience work={work} key={work.link} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
