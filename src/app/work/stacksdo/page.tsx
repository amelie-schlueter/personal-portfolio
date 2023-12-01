"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import NextLogo from "@/lib/icons/NextLogo";
import TsLogo from "@/lib/icons/TSLogo";
import TwLogo from "@/lib/icons/TwLogo";
import Vercel from "@/lib/icons/Vercel";
import Hero from "@/components/Hero";
import Link from "next/link";

const Page = () => {
  const project = projects.find((project) => project.slug === "stacksdo");
  if (!project) return notFound();

  return (
    <>
      <div className="container">
        <div className="flex flex-col py-16 tems-start justify-center gap-10 md:grid md:grid-cols-2 md:items-center  md:h-full md:py-20  ">
          {/*Hero*/}{" "}
          <div className="sticky top-10">
            <Hero title="Stacksdo" description="Stacksdo Case Study" />
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
          </div>
          <section id="stacksdo-ideation" className="col-start-2">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Ideation</h2>
              <p>
                The digital epidemic of constant stimulation and information
                overload is a constant in our daily lifes. At the same time, we
                are constantly seeking the perfect productivity system or task
                management tool, that assists us being ulitmative productive and
                get more things done. Honestly, i am also guility in trying out
                almost any productivity tool on the planet with the intention to
                get a little bit more done in just 24 hours every day. But is
                that what we should strive for?
              </p>
              <p>
                I decided to create a minimal and distraction free project and
                task management tool for myself with the intention to proof to
                myself that the no system on the planet will make me more
                productive if i cannot get my attention on to the work that
                really matters.{" "}
              </p>
            </div>
          </section>
          {/*Section Planing*/}{" "}
          <section
            id="stacksdo-planning"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Planing</h2>
              <p>
                After figuring out what basic features a task management app
                really needs. I sit down to plan how i can structure codebase of
                the app. To create a mental model for myself i started creating
                a visualisation of the app dataflow.
              </p>
            </div>
            <div>
              <div className="py-16 px-12 bg-muted">
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
            id="stacksdo-planning"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-semibold">Building</h2>
              <p>
                Now i could start creating the basic setup of my app as well as
                creating basic components. As a techstack i used{" "}
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
            <div>
              <div className="py-16 px-12 bg-muted">
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
        </div>
      </div>
    </>
  );
};

export default Page;
