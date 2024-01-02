import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Workexperience from "@/components/Workexperience";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Brain,
  Code,
  File,
  Glasses,
  Layout,
  Linkedin,
  PenLine,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { reading, workExperience } from "@/lib/data";

import Link from "next/link";
import Title from "@/components/Title";
import Grid from "@/components/layout/Grid";
import ReadingItem from "@/components/ReadingItem";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className=" container px-4 mx-auto w-full relative mt-12 md:mt-24">
      <div className="flex flex-col gap-10">
        <Grid>
          <div>
            <Image
              src={"/profile.png"}
              width={150}
              height={150}
              alt="profile-picture"
              className="rounded-full"
            />
            <div className="my-4 md:mt-12 flex flex-col gap-2">
              <Separator />
              <div className=" flex gap-4 items-start ">
                <Link href={"https://twitter.com"} className="underline">
                  <p>X</p>
                </Link>
                <Link href={"https://twitter.com"} className="underline">
                  <p>Read.cv</p>
                </Link>
                <Link href={"https://github.com"} className="underline">
                  <p>Github</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className=" max-w-md">
              I was born in a small town in western germany and i grew up in an
              ever growing age of technology. My whole life i was curious about
              how technology evolves and how it can enhance our everyday life.
            </p>
            <p className=" max-w-md mt-4 ">
              A few years ago i stared to learn more about design. For me it was
              important to bring my ideas to life, so i self-taught myself how
              to code and learned more about{" "}
              <span>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="underline">
                      creative development
                    </TooltipTrigger>
                    <TooltipContent className=" max-w-xs ">
                      <p className="font-medium">
                        What is creative development?{" "}
                      </p>
                      <p className="">
                        Creative development is the process of creating
                        interactive experiences by combining design and
                        technology.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>{" "}
              </span>
              . In 2023 i started my bachelor in interaction design at the
              University of Applied Sciences in Schwaebisch Gmuend.
            </p>
            <p className=" max-w-md mt-4 ">
              Right now i am working at{" "}
              <span className="inline-flex items-center underline">
                <Link href={""} className="underline">
                  zwoeins marketing
                </Link>
                <ArrowUpRight
                  strokeWidth={1.5}
                  size={14}
                  className="inline-block"
                />
              </span>
              and I am always working on side projects to improve my skills and
              expand my knowledge in the field of creative development.
            </p>
          </div>
        </Grid>
      </div>

      {/*Experience*/}
      <section className="w-full  mt-16" id="experience">
        <Grid>
          <Title
            title="Experience"
            icon={<Brain strokeWidth={1.5} size={14} />}
          />

          <div className="flex flex-col gap-6 border-t pt-4">
            {workExperience.map((work) => {
              return (
                <Workexperience work={work} key={work.title + work.company} />
              );
            })}
          </div>
        </Grid>
      </section>

      {/*Reading*/}
      <section className="w-full  mt-16" id="Reading">
        <Grid>
          <Title
            title="Reading"
            icon={<Glasses strokeWidth={1.5} size={14} />}
          />

          <div className="flex flex-col gap-6 border-t pt-4">
            {reading.map((book) => {
              return <ReadingItem book={book} />;
            })}
          </div>
        </Grid>
      </section>

      {/*Reading*/}
      <section className="w-full  mt-16" id="Tech Stack">
        <Grid>
          <Title
            title="Tech stack"
            icon={<Code strokeWidth={1.5} size={14} />}
          />

          <div className="flex flex-col gap-6 border-t pt-4">
            <div className="flex flex-col gap-2 justify-start">
              <TechStackItem title="Language" value="JavaScript" />
              <TechStackItem title="Framework" value="ReactJS" />
              <TechStackItem title="SSR" value="NextJS" />
              <TechStackItem title="CSS Framework" value="TailwindCSS" />
              <TechStackItem title="Syntax" value="Typescript" />
            </div>
          </div>
        </Grid>
      </section>
    </div>
  );
};

export default Page;

export const TechStackItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="text-muted-foreground grid grid-cols-[0.75fr,1.75fr]">
      <p className="text-muted-foreground">{title}</p>
      <p className="text-base text-foreground">{value}</p>
    </div>
  );
};
