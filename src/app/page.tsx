import BlogEntryCard from "@/components/journal/BlogEntryCard";
import { allDocs } from "contentlayer/generated";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Glasses, Layout, PenLine } from "lucide-react";
import Title from "@/components/layout/Title";
import Grid, { GridItem } from "@/components/layout/Grid";
import Image from "next/image";

import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import CraftBanner from "@/components/CraftBanner";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Projectcard from "@/components/projects/Projectcard";

export default function Home() {
  const docs = allDocs
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .filter((doc) => doc.published);

  return (
    <div className=" container px-4 mx-auto w-full relative my-12 md:mt-24">
      {/*Hero*/}
      <div className="flex flex-col gap-10">
        <Grid className="p-0 border-none">
          <GridItem className="border-none p-0">
            <div className="flex flex-col gap-0">
              <h1 className="text-xl font-medium">Amelie Schlüter</h1>
              <p className="text-muted-foreground ">Creative Developer</p>
            </div>
          </GridItem>
          <GridItem className="border-none p-0">
            <div>
              <p className=" max-w-md">
                Hey there, i am Amelie, a{" "}
                <span>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger className="md:underline cursor-default">
                        creative developer
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
                </span>{" "}
                based in Germany. I am currently studying Interaction Design at
                the University of Applied Sciences in Schwaebisch Gmuend.
              </p>
              <p className=" max-w-md mt-4 ">
                I am passionate about creating meaningful digital experiences by
                combining design and technology.
              </p>
              <p className=" max-w-md mt-4 ">
                Currently i am working at{" "}
                <span className="inline-flex items-center underline">
                  <Link href={"https://zwoeins.de"} className="underline">
                    zwoeins marketing
                  </Link>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    size={14}
                    className="inline-block"
                  />
                </span>
                in Germany as an interaction designer.
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>

      {/*Projects*/}
      <div className="flex gap-6 mt-8  flex-col ">
        {/*My Work*/}
        <section className="w-full " id="work">
          <Grid className="border-t">
            <GridItem className="">
              {/*Header*/}
              <Title
                title="Projects"
                icon={<Layout strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem>
              <div className="flex flex-col gap-8">
                {projects.map((project) => (
                  <Projectcard project={project} key={project.slug} />
                ))}
              </div>
            </GridItem>
          </Grid>
        </section>

        {/*Thoughts*/}
        <section
          className="py-8 h-full w-full relative "
          aria-label="journal-section"
        >
          <div className="w-full">
            <Grid>
              <GridItem className="">
                <div>
                  <Title
                    title="Writing"
                    icon={<Glasses strokeWidth={1.5} size={14} />}
                  />
                </div>
              </GridItem>
              <GridItem>
                {/*Blog Wrapper*/}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 sw-full ">
                    {/*Blog Entry*/}
                    {docs &&
                      docs.map((doc, i) => <BlogEntryCard doc={doc} key={i} />)}
                  </div>
                  <Link
                    href={"/journal"}
                    className="text-sm underline text-muted-foreground"
                  >
                    View all
                  </Link>
                </div>
              </GridItem>
            </Grid>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
