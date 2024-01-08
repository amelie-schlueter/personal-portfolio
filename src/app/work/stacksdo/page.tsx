//@ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "@/components/stacksdo/UserAuthForm";

import TaskMenuShowcase from "@/components/stacksdo/TaskMenuShowcase";
import { inView, motion, useInView } from "framer-motion";
import { AddTaskButton } from "@/components/stacksdo/AddTaskButton";

import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "next-themes";
import EntryHeader from "@/components/journal/EntryHeader";
import EntrySidebar from "@/components/journal/EntrySidebar";
import EntryWrapper from "@/components/journal/EntryWrapper";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { Task } from "@/lib/types";
import CodeContent from "@/components/layout/CodeContent";
import ComponentContent from "@/components/layout/ComponentContent";
import ComponentCodeBlock from "@/components/layout/ComponentCodeBlock";
import hljs from "highlight.js";

const headings = [
  { level: 3, text: "Ideation", slug: "stacksdo-ideation" },
  { level: 3, text: "Planning", slug: "stacksdo-planning" },
  { level: 3, text: "Building", slug: "stacksdo-building" },
  { level: 3, text: "Result", slug: "stacksdo-result" },
];

const Page = () => {
  const project = projects.find((project) => project.slug === "stacksdo");
  const { resolvedTheme: currentTheme } = useTheme();
  React.useEffect(() => {
    hljs.highlightAll();

    const syntaxHighlightingCSS =
      currentTheme === "dark"
        ? import("src/lib/styles/mdx-dark.css")
        : import("highlight.js/styles/grayscale.css")!;

    syntaxHighlightingCSS.then((module) => {
      module.default;
    });
  }, [currentTheme]);
  const ref = useRef(null);

  const [tasks, setTasks] = React.useState<Task[]>([]);

  if (!project) return notFound();

  return (
    <>
      <EntryWrapper>
        <EntrySidebar headings={headings} />
        <EntryHeader title={project.title} date={project.year} />

        {/*Content*/}
        <div className="max-w-[600px] space-y-4">
          {currentTheme === "dark" ? (
            <video
              src={"/stacksdo/stacksdo-video-dark.mp4"}
              playsInline
              autoPlay
              muted
              alt="stackdo-image-1"
              className="w-full max-h-[400px] h-full object-cover rounded-md"
            ></video>
          ) : (
            <video
              src={"/stacksdo/stacksdo-video-dark.mp4"}
              playsInline
              autoPlay
              muted
              alt="stackdo-image-1"
              className="w-full max-h-[400px] h-full object-cover rounded-md"
            ></video>
          )}
          <div>
            <h3 className="mt-6" id="stacksdo-ideation">
              Ideation
            </h3>
            <p>
              In our digital age, we're constantly bombarded with information
              and stimulation. At the same time, there's an ongoing quest for
              the perfect productivity system or task management tool aimed at
              enhancing productivity and managing our daily 24 hours more
              efficiently. I admit, I've tried nearly every productivity tool
              out there, seeking that slight edge in efficiency. But is this
              relentless pursuit really beneficial?
            </p>
          </div>
          <p>
            I decided to develop a minimalistic, distraction-free project and
            task management tool for personal use. This project was an
            experiment to prove to myself that no system could enhance my
            productivity unless I focused on the work that truly mattered.
          </p>
          <div>
            <h3 className="mt-6" id="stacksdo-planing">
              Planing
            </h3>
            <p>
              First, I identified the essential features needed in a task
              management app. To structure my thoughts and create a coherent
              plan, I began with a visualization of the app's data flow.
            </p>
          </div>
          <div>
            <h3 className="mt-6" id="stacksdo-building">
              Building
            </h3>
            <p>
              Now I could start creating the basic setup of my app as well as
              creating basic components. As a tech stack, I used{" "}
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
          <ComponentCodeBlock>
            <ComponentContent className="w-full max-w-full max-h-full">
              {/* User auth Form */}
              <UserAuthForm />
            </ComponentContent>
            <CodeContent language="typescript">
              {`import NextAuth from "next-auth";
import { options } from "@/lib/auth";
const handler = NextAuth (options);
export { handler as GET, handler as POST };`}
            </CodeContent>
          </ComponentCodeBlock>
          <p>
            The aim was to strip the application down to only the necessary
            features while crafting an intuitive interface for advanced users
            familiar with keyboard shortcuts. I focused on direct user feedback
            combined with minimalistic yet appealing animations and
            interactions.
          </p>

          <ComponentCodeBlock>
            <ComponentContent className="w-full max-w-full max-h-full">
              <div className="w-full" ref={ref}>
                <div className=" w-full  flex items-center justify-center relative">
                  {/* Keyboard Shortcut Showcase*/}
                  <TaskMenuShowcase />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        easings: "spring",
                        delay: 0.3,
                      },
                    }}
                    className="absolute bg-background flex flex-col max-w-[150px] w-full border-[1px] rounded-md p-1 right-50 md:right-10 top-0"
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
              </div>
            </ComponentContent>
            <CodeContent language="typescript">
              {`import NextAuth from "next-auth";
import { options } from "@/lib/auth";
const handler = NextAuth (options);
export { handler as GET, handler as POST };`}
            </CodeContent>
          </ComponentCodeBlock>
          <p>
            I set a focus on direct user feedback paired with minimalistic but
            still beautiful animation and interactions. Try it out yourself:
          </p>
          <ComponentCodeBlock>
            <ComponentContent className="w-full max-w-full max-h-full">
              <div className="w-full">
                <div className=" rounded-md   gap-2 md:gap-8 flex flex-col h-fit  min-h-[300px] md:min-h-fit  lg:flex-row justify-center relative">
                  <AddTaskButton setTask={setTasks} />
                  <div className="w-full flex flex-col gap-2">
                    <h4 className="font-semibold mb-2 w-full">Your Tasks</h4>
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
            </ComponentContent>
            <CodeContent language="typescript">
              {`import NextAuth from "next-auth";
import { options } from "@/lib/auth";
const handler = NextAuth (options);
export { handler as GET, handler as POST };`}
            </CodeContent>
          </ComponentCodeBlock>
          <div>
            <h3 className="mt-6" id="stacksdo-result">
              Result
            </h3>
            <p>
              Stacksdo is an amazing tool for managing tasks and projects
              without any unnecessary distractions for the user. It focuses on
              the foundational elements and still provides an amazing user
              experience through consistent user feedback, a minimal design, and
              great performance. Next.js, TypeScript with Tailwind CSS for
              styling, Planetscale as the database, and Prisma ORM for
              communication with the database.{" "}
              <span>
                <Link href="https://nextjs.org/" className=" underline ">
                  NEXTjs
                </Link>
              </span>
              ,{" "}
              <span>
                <Link
                  href="https://www.typescriptlang.org/"
                  className=" underline "
                >
                  Typescript
                </Link>{" "}
              </span>
              with{" "}
              <span>
                <Link href="https://tailwindcss.com/" className=" underline ">
                  Tailwind CSS
                </Link>{" "}
              </span>
              <span>
                for styling,{" "}
                <Link href="https://planetscale.com/" className=" underline ">
                  Planetscale
                </Link>{" "}
              </span>
              as the database and Prisma ORM for communication with the
              database.
            </p>
          </div>
          <div className="w-full bg-muted  rounded-md flex h-[30] items-center justify-center overflow-hidden">
            {currentTheme === "dark" ? (
              <Image
                src={"/stacksdo/Stacksdo-Landingpage.png"}
                className="w-full max-h-[400px] object-cover rounded-md"
                width={550}
                height={1080}
                alt="stackdo-image-1"
              ></Image>
            ) : (
              <Image
                src={"/stacksdo/Stacksdo-Landingpage.png"}
                className="w-full max-h-[400px] rounded-md"
                width={550}
                height={1080}
                alt="stackdo-image-1"
              ></Image>
            )}
          </div>
        </div>
        <ProjectDetails work="Development" date={2023} />
      </EntryWrapper>
    </>
  );
};

export default Page;
