import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Workexperience from "@/components/Workexperience";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { File, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { workExperience } from "@/lib/data";

const Page = () => {
  return (
    <div className="container">
      <div className="flex flex-col py-16 gap-4 items-start justify-end   md:grid md:grid-cols-2 md:justify-end ">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-4xl font-medium">Who i am.</h1>
          <p className="text-muted-foreground">
            My name is Amelie and i am currently studying Interaction Design at
            the HfG Schwaebisch Gmuend. I am passionate about creating
            meaningful digital products.
          </p>
          <p className="">
            If i am not pushing pixel, i love to go to the gym and spent time
            with my friends and family to recharge my battery 🔋.
          </p>
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
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <Twitter size={18} strokeWidth={1.5} />
              Twitter
            </a>
            <a
              target="_blank"
              href="https://twitter.com/amelieschltr"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <Linkedin size={18} strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://read.cv/amelieschltr"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <File size={18} strokeWidth={1.5} />
              CV
            </a>
          </div>
        </div>
      </div>
      <section className="w-full my-10" id="work">
        <div className="flex flex-col md:grid md:grid-cols-[2fr,2fr]  h-full">
          {/*Header*/}
          <div className="w-full mb-8 md:sticky md:top-10 h-fit">
            <p className="text-muted-foreground font-">Work</p>
            <h2 className="text-3xl font-medium">My Experience</h2>
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
