"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageGrid from "@/components/premium-room-design/ImageGrid";
import LoadingButton from "@/components/LoadingButton";
import Hero from "@/components/Hero";
import NextLogo from "@/lib/icons/NextLogo";
import TsLogo from "@/lib/icons/TSLogo";
import TwLogo from "@/lib/icons/TwLogo";
import Vercel from "@/lib/icons/Vercel";
import TOC from "@/components/TOC";
import Link from "next/link";
import UserAuthForm from "@/components/stacksdo/UserAuthForm";
import { useTheme } from "next-themes";

const Page = () => {
  const { resolvedTheme: currentTheme } = useTheme();
  const project = projects.find(
    (project) => project.slug === "premium-room-design"
  );
  if (!project) return notFound();

  console.log(project.slug);

  return (
    <>
      <div className="container">
        <div className="flex flex-col py-16 items-start justify-center gap-10 md:grid md:grid-cols-[1fr,1.25fr] md:items-center md:h-full md:py-20">
          {/*Hero*/}{" "}
          <div className=" md:sticky top-10 w-fit">
            <Hero
              title="Premium Room Design"
              description="Website for a Luxury brand"
            />
            <div className="mt-6 flex gap-2">
              {project?.tags.map((tag) => (
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
              <Badge variant={"outline"}>{format(project.year, "yyyy")}</Badge>
            </div>
            <div>
              <div className="flex gap-4 my-6">
                <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                  <NextLogo />
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                  <TsLogo />
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                  <TwLogo />
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center py-2 text-foreground">
                  <Vercel />
                </div>
              </div>
            </div>
            {/* <TOC headings={headings} /> */}
          </div>
          <section id="stacksdo-ideation" className="col-start-2 w-full">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Ideation</h2>
              <p>
                In our digital age, we're constantly bombarded with information
                and stimulation. At the same time, there's an ongoing quest for
                the perfect productivity system or task management tool, aimed
                at enhancing productivity and managing our daily 24 hours more
                efficiently. I admit, I've tried nearly every productivity tool
                out there, seeking that slight edge in efficiency. But is this
                relentless pursuit really beneficial?
              </p>
              <p>
                I decided to develop a minimalistic, distraction-free project
                and task management tool for personal use. This project was an
                experiment to prove to myself that no system could enhance my
                productivity unless I focused on the work that truly mattered.
              </p>
            </div>
          </section>
          {/*Section Planing*/}{" "}
          <section
            id="stacksdo-planning"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Planning</h2>
              <p>
                First, I identified the essential features needed in a task
                management app. To structure my thoughts and create a coherent
                plan, I began with a visualization of the app's data flow.
              </p>
            </div>
            <div>
              <div className="py-16 px-12  h-72 bg-muted flex items-center justify-center">
                <Image
                  src={"/stacksdo/stacksdo-dataflow.png"}
                  width={1200}
                  height={600}
                  alt="stacksdo-dataflow"
                ></Image>
                {/*Caption*/}
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                Datavisualisation Flow
              </p>
            </div>
          </section>
          <section
            id="stacksdo-result"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Result</h2>
              <p>
                Stacksdo is an amazing tool for managing task and projects
                without any unnessary distractions for the user. It focuses on
                the foundatinal elements and still provides an amazing user
                experience throught consistent user feedback, a minimal design
                and great performance.
                <Link
                  href="https://nextjs.org/"
                  className=" underline hover:text-muted-foreground"
                >
                  NEXTjs
                </Link>
                ,{" "}
                <Link
                  href="https://www.typescriptlang.org/"
                  className=" underline hover:text-muted-foreground"
                >
                  Typescript
                </Link>{" "}
                with{" "}
                <Link
                  href="https://tailwindcss.com/"
                  className=" underline hover:text-muted-foreground"
                >
                  Tailwind CSS
                </Link>{" "}
                for styling,{" "}
                <Link
                  href="https://planetscale.com/"
                  className=" underline hover:text-muted-foreground"
                >
                  Planetscale
                </Link>{" "}
                as the database and Prisma ORM for communication with the
                database.
              </p>
            </div>
            <div className="w-full bg-muted py-6 px-6 flex h-[30] items-center justify-center overflow-hidden">
              {currentTheme === "dark" ? (
                <Image
                  src={"/stacksdo/Stackdo-image-1.png"}
                  className="shadow-2xl relative"
                  width={550}
                  height={1080}
                  alt="stackdo-image-1"
                ></Image>
              ) : (
                <Image
                  src={"/stacksdo/Stackdo-image-1-neg.png"}
                  className="shadow-2xl relative"
                  width={550}
                  height={1080}
                  alt="stackdo-image-1"
                ></Image>
              )}
            </div>
            <div className="w-full bg-muted py-6 px-6 flex h-[30] items-center justify-center overflow-hidden relative">
              {currentTheme === "dark" ? (
                <Image
                  src={"/stacksdo/stackdo-image-2.png"}
                  className="shadow-lg  relative bottom-[-100px] right-[-150px] scale-[130%]"
                  width={900}
                  height={1080}
                  alt="stackdo-image-1"
                ></Image>
              ) : (
                <Image
                  src={"/stacksdo/stackdo-image-2-neg.png"}
                  className="shadow-lg  relative bottom-[-100px] right-[-150px] scale-[130%]"
                  width={900}
                  height={1080}
                  alt="stackdo-image-1"
                ></Image>
              )}
            </div>
          </section>
        </div>
      </div>
      <ImageGrid />
    </>
  );
};

export default Page;
