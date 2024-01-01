import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Workexperience from "@/components/Workexperience";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Brain,
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
import NextLogo from "@/lib/icons/NextLogo";
import TsLogo from "@/lib/icons/TSLogo";
import TwLogo from "@/lib/icons/TwLogo";
import ReactIcon from "@/lib/icons/ReactIcon";
import XLogo from "@/lib/icons/xLogo";
import JsLogo from "@/lib/icons/JSLogo";
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

const Page = () => {
  return (
    <div className="max-w-[700px] px-4 mx-auto w-full relative mt-12 md:mt-24">
      <div className="flex flex-col gap-10">
        <Grid>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Amelie Schlüter</h1>
            <p className="text-muted-foreground text-sm">Creative Developer</p>
          </div>
          <div>
            <p className="text-sm max-w-md">
              I was born in a small town in western germany and i grew up in an
              ever growing age of technology. My whole life i was curious about
              how technology evolves and how it can enhance our everyday life.
            </p>
            <p className="text-sm max-w-md mt-4 ">
              A few years ago i stared to learn more about design. For me it was
              important to bring my ideas to life, so i self-taught myself how
              to code and dived deeper into the world of{" "}
              <span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="underline">
                      creative development
                    </TooltipTrigger>
                    <TooltipContent>
                      What is creative development?{" "}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>{" "}
              </span>
              . In 2023 i started by bachelor in interaction design at the
              University of Applied Sciences in Schwaebisch Gmuend.
            </p>
            <p className="text-sm max-w-md mt-4 ">
              Right now i am working as a working student at{" "}
              <span className="underline">
                <Link href={""}>zwoeins marketing</Link>
              </span>{" "}
              and i am always working on side projects to improve my skills and
              expand my skills in the field of creative development.
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

      {/*Experience*/}
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
    </div>
  );
};

export default Page;
