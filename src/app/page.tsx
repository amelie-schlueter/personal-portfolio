import { Button, buttonVariants } from "@/components/ui/button";

import BlogEntryCard from "@/components/BlogEntryCard";

import { allDocs } from "contentlayer/generated";

import Projectcard from "@/components/Projectcard";
import { projects } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import { format } from "date-fns";
import { ArrowUpRight, Layout, PenLine } from "lucide-react";
import Title from "@/components/Title";
import Grid from "@/components/layout/Grid";

export default function Home() {
  const docs = allDocs.sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
  return (
    <div className="max-w-[700px] px-4 mx-auto w-full relative mt-12 md:mt-24">
      {/*Wrapepr*/}
      {/*Hero*/}
      <div className="flex flex-col gap-10">
        <Grid>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Amelie Schlüter</h1>
            <p className="text-muted-foreground text-sm">Creative Developer</p>
          </div>
          <div>
            <p className="text-sm max-w-md">
              Hey there, i am Amelie, a creative developer based in Germany. I
              am currently studying Interaction Design at the University of
              Applied Sciences in in Schwaebisch Gmuend.
            </p>
            <p className="text-sm max-w-md mt-4 ">
              I am passionate about creating meaningful digital experiences by
              combining design and technology.
            </p>
            <p className="text-sm max-w-md mt-4 ">
              Currently i am working at{" "}
              <span className="underline">
                <Link href={"https://zwoeins.de"}>zwoeins marketing</Link>
              </span>{" "}
              in germany as an interaction designer.
            </p>
          </div>
        </Grid>
      </div>

      {/*Projects*/}
      <div className="flex gap-6 mt-16 flex-col ">
        {/*My Work*/}
        <section className="w-full " id="work">
          <Grid>
            {/*Header*/}
            <Title
              title="projects"
              icon={<Layout strokeWidth={1.5} size={14} />}
            />

            <div className="flex flex-col  border-t pt-4">
              {projects.map((project) => (
                <div
                  className="flex justify-between items-start   cursor-pointer"
                  key={project.slug}
                >
                  {/* <p className="text-muted-foreground text-sm md:w-[20rem]">
                    {format(project.year, "yyyy")}
                  </p> */}
                  <div className="flex items-center justify-between w-full">
                    <div className="max-w-sm">
                      <h3 className="font-medium text-sm mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </section>

        {/*What i do*/}

        {/*Thoughts*/}
        <section
          className="py-10 h-full w-full relative "
          aria-label="journal-section"
        >
          <div className="w-full">
            <Grid>
              <Title
                title="Writing"
                icon={<PenLine strokeWidth={1.5} size={14} />}
              />

              {/*Blog Wrapper*/}
              <div className="flex flex-col gap-4 sw-full pt-4 border-t">
                {/*Blog Entry*/}
                {docs &&
                  docs.map((doc, i) => <BlogEntryCard doc={doc} key={i} />)}
              </div>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
