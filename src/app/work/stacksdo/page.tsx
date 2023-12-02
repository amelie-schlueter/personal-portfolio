"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import NextLogo from "@/lib/icons/NextLogo";
import TsLogo from "@/lib/icons/TSLogo";
import TwLogo from "@/lib/icons/TwLogo";
import Vercel from "@/lib/icons/Vercel";
import Hero from "@/components/Hero";
import Link from "next/link";
import UserAuthForm from "@/components/stacksdo/UserAuthForm";

import TaskMenuShowcase from "@/components/stacksdo/TaskMenuShowcase";
import { inView, motion, useInView } from "framer-motion";
import { AddTaskButton } from "@/components/stacksdo/AddTaskButton";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Page = () => {
  const project = projects.find((project) => project.slug === "stacksdo");
  if (!project) return notFound();

  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(isInView, "is in view");

  console.log(project.slug);

  const [tasks, setTasks] = React.useState<Task[]>([]);

  console.log(tasks);

  return (
    <>
      <div className="container">
        <div className="flex flex-col py-16 items-start justify-center gap-10 md:grid md:grid-cols-[1fr,1.25fr] md:items-center md:h-full md:py-20">
          {/*Hero*/}{" "}
          <div className=" md:sticky top-10 w-fit">
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
          <section id="stacksdo-ideation" className="col-start-2 w-full">
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
            id="stacksdo-building-I"
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
            <div className="w-full grid  md:grid-cols-2 gap-4 flex-col md:flex-row">
              {/* User auth Form */}
              <div className="w-full">
                <div className="py-16 px-12 md:px-4 bg-muted  h-72 w-full  flex items-center justify-center">
                  {/* User auth Form */}
                  <UserAuthForm />
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Authentication using Github OAuth via Next Auth
                </p>
              </div>

              {/* Code Component*/}
              <div className="bg-muted  h-72  w-full flex items-center justify-center">
                <Image
                  src={"/stacksdo/codeimage-dark.png"}
                  width={500}
                  height={1200}
                  alt="stacksdo-authcode"
                ></Image>
              </div>
            </div>
          </section>
          <section
            id="stacksdo-building-I"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="">
              <p>
                My goal was to reduce the application to the really neccessary
                features but also to create an easy usable interface for
                advanced user who are familiar to keyboard shortcuts.
              </p>
            </div>
            <div className="w-full grid  md:grid-cols-2 gap-4 flex-col md:flex-row">
              {/* User auth Form */}
              <div className="w-full" ref={ref}>
                <div className="py-16 px-12 md:px-4 bg-muted  h-72 w-full  flex items-center justify-center relative">
                  {/* Keyboard Shortcut Showcase*/}
                  <TaskMenuShowcase />
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        easings: "spring",
                        delay: 0.3,
                      },
                    }}
                    className="absolute bg-background flex flex-col min-w-[150px] border-[1px] rounded-md p-1 right-4 bottom-10"
                  >
                    <div className="text-xs w-full h-full cursor-pointer hover:bg-accent py-2 px-2 rounded-sm">
                      Edit
                    </div>
                    <div className="text-xs w-full h-full cursor-pointer hover:bg-accent py-2 px-2 rounded-sm">
                      Duplicate
                    </div>
                    <div className="text-xs flex items-center justify-between w-full h-full cursor-pointer hover:bg-accent py-2 px-2 rounded-sm">
                      Delete{" "}
                      <p className="text-[9px] text-muted-foreground"> ⌘⌫</p>
                    </div>
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Keyboard Shortcuts and calendar day selector
                </p>
              </div>

              {/* Code Component*/}
              <div className="bg-muted h-72 w-full flex items-center justify-center overflow-hidden">
                <Image
                  src={"/stacksdo/stacksdo-calendar.png"}
                  width={1500}
                  height={1500}
                  alt="stacksdo-authcode"
                ></Image>
              </div>
            </div>
          </section>
          <section
            id="stacksdo-building-I"
            className="col-start-2 mt-16 flex flex-col gap-8"
          >
            <div className="">
              <p>
                I set a focus on direct user feedback pared with minimalistic
                but still beautiful animation and interactions. Try out
                yourself:
              </p>
            </div>
            <div className="w-full grid gap-4 flex-col md:flex-row">
              {/* User auth Form */}
              <div className="w-full">
                <div className="py-8 px-6  md:px-10 bg-background border-[1px] gap-8 flex flex-col h-fit    md:flex-row justify-center relative">
                  <AddTaskButton setTask={setTasks} />
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-semibold mb-2 w-full">Your Tasks</h3>
                    {tasks.length > 0 &&
                      tasks.map((task) => (
                        <div key={task.id} className="flex items-center gap-2">
                          <Checkbox key={task.id} id={task.id.toString()} />
                          <label
                            htmlFor={task.id.toString()}
                            className="text-sm"
                          >
                            {task.title}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
