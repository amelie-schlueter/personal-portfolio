import Workexperience from "@/components/Workexperience";
import { ArrowUpRight, Brain, Code, Glasses, Smile } from "lucide-react";
import Image from "next/image";
import React from "react";
import { lifeAdventures, reading, workExperience } from "@/lib/data";

import Link from "next/link";
import Title from "@/components/layout/Title";
import Grid, { GridItem } from "@/components/layout/Grid";
import ReadingItem from "@/components/ReadingItem";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import TechStackItem from "@/components/TechStackItem";
import { Happy_Monkey } from "next/font/google";
import LifeAdventureItem from "@/components/LifeAdventureItem";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <div className=" container px-4 space-y-8 mx-auto w-full relative mt-12 md:mt-24">
      <Grid>
        <div className="">
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
              <Link
                href={"https://twitter.com/amelieschltr"}
                className="underline"
              >
                <p>X</p>
              </Link>
              <Link href={"https://read.cv/amelieschltr"} className="underline">
                <p>Read.cv</p>
              </Link>
              <Link
                href={"https://github.com/amelie-schlueter"}
                className="underline"
              >
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
            important to bring my ideas to life, so i self-taught myself how to
            code and learned more about{" "}
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

      {/*Experience*/}
      <section className="w-full " id="experience">
        <Grid>
          <GridItem className="border-0 md:border-t">
            <Title
              title="Experience"
              icon={<Brain strokeWidth={1.5} className="h-4 w-4" />}
            />
          </GridItem>
          <GridItem>
            <div className="flex flex-col gap-6 ">
              {workExperience.map((work) => {
                return (
                  <Workexperience work={work} key={work.title + work.company} />
                );
              })}
            </div>
          </GridItem>
        </Grid>
      </section>

      {/*Reading*/}
      <section className="w-full " id="Reading">
        <Grid>
          <GridItem className="border-0 md:border-t">
            <Title
              title="Reading"
              icon={<Glasses strokeWidth={1.5} size={14} />}
            />
          </GridItem>
          <GridItem>
            <div className="flex flex-col gap-6  ">
              {reading.map((book) => {
                return <ReadingItem book={book} key={book.title} />;
              })}
            </div>
          </GridItem>
        </Grid>
      </section>

      {/*TeckStack*/}
      <section className="w-full" id="Tech Stack">
        <Grid>
          <GridItem className="border-0 md:border-t">
            <Title
              title="Tech stack"
              icon={<Code strokeWidth={1.5} size={14} />}
            />
          </GridItem>
          <GridItem>
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-1 justify-start">
                <TechStackItem title="Language" value="JavaScript" />
                <TechStackItem title="Framework" value="ReactJS" />
                <TechStackItem title="SSR" value="NextJS" />
                <TechStackItem title="CSS Framework" value="TailwindCSS" />
                <TechStackItem title="Syntax" value="Typescript" />
              </div>
            </div>
          </GridItem>
        </Grid>
      </section>

      {/*Life's Adventure List*/}
      <section className="w-full " id="Life's Adventure List">
        <Grid>
          <GridItem className="border-0 md:border-t">
            <Title
              title="Life's Adventure List"
              icon={<Smile strokeWidth={1.5} size={14} className="" />}
            />
          </GridItem>
          <GridItem>
            <div className="flex flex-col gap-6 ">
              <div className=" w-full justify-start">
                <div className="grid grid-cols-2 gap-cols-4 w-full">
                  {lifeAdventures.map((adventure) => {
                    return (
                      <LifeAdventureItem
                        checked={adventure.checked}
                        value={adventure.title}
                        inProgress={adventure.inProgress}
                        key={adventure.title}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
