import BlogEntryCard from "@/components/journal/BlogEntryCard";
import Hero from "@/components/Hero";
import { Mdx } from "@/components/MDX";
import Title from "@/components/layout/Title";
import Grid from "@/components/layout/Grid";
import { allDocs } from "contentlayer/generated";
import { format } from "date-fns";
import { ArrowUpRight, PenLine, Pilcrow } from "lucide-react";
import React from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const page = () => {
  const docs = allDocs.sort((a, b) => {
    return b.publishedAt.localeCompare(a.publishedAt);
  });
  return (
    <div className=" container px-4 mx-auto w-full relative my-12 md:mt-24">
      {/*Wrapepr*/}
      {/*Hero*/}
      <div className="flex flex-col gap-10">
        <Grid>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium">Writing</h1>
          </div>
          <div>
            <p className=" max-w-md">
              A collection of thoughts, ideas and learnings. I write about
              design, technology and everything in between. Writing helps me to
              clarify my mind and to reflect on my work.
            </p>
          </div>
        </Grid>
      </div>

      <div className="flex gap-6  flex-col">
        <section
          className="py-10 h-full w-full relative "
          aria-label="journal-section"
        >
          <div className="w-full">
            {/*Blog Wrapper*/}
            <div className="flex flex-col gap-4 sw-full pt-4">
              {/*Blog Entry*/}
              {docs &&
                docs.map((doc, i) => (
                  <div
                    className="flex w-full pb-4 border-b-[1px] border-border/70 "
                    key={doc.slug}
                  >
                    <div className=" md:grid grid-cols-[1fr,1.75fr] gap-16 w-full">
                      <p className="text-muted-foreground text-sm mb-1 md:m-0">
                        {format(new Date(doc.publishedAt), "EE, dd.MMM yyyy")}
                      </p>
                      <Link
                        href={`${doc.slug}`}
                        className="flex items-start  cursor-pointer gap-2 justify-start w-full "
                      >
                        <div>
                          <h2 className="underline font-medium  text-base">
                            {doc.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {doc.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
