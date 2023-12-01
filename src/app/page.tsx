import { Button, buttonVariants } from "@/components/ui/button";

import BlogEntryCard from "@/components/BlogEntryCard";

import { allDocs } from "contentlayer/generated";

import Projectcard from "@/components/Projectcard";
import { projects } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";

export default function Home() {
  const docs = allDocs.sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
  return (
    <div className="container w-full relative min-h-screen h-full">
      {/*Wrapepr*/}
      <div className="flex flex-col py-24 tems-start justify-center gap-10 md:grid md:grid-cols-2 md:items-center  md:h-full md:py-20  ">
        {/*Hero*/}
        <Hero
          title="Hi, Im Amelie"
          description="Im Amelie an Interaction Design student at HFG Schwäbisch Gmuend,
          and Im passionate about using user-centered functional design to
          solve real-world problems."
          button="Lets connect"
        />

        <div className="w-full flex md:items-start md:justify-start ">
          {/* <Button variant={"outline"} className="gap-2">
            <Briefcase strokeWidth={1.5} size={22} />
            Working
            <span>
              <a href="https://zwoeins.de">@zwoeins</a>
            </span>
          </Button> */}
        </div>
      </div>

      {/*My Work*/}
      <section className="w-full my-10" id="work">
        <div className="flex flex-col md:grid md:grid-cols-[2fr,2fr]  h-full">
          {/*Header*/}
          <div className="w-full mb-8 md:sticky md:top-10 h-fit">
            <p className="text-muted-foreground font-">Cases</p>
            <h2 className="text-3xl font-medium">My Work</h2>
          </div>
          {/*Project Card Wrapper*/}
          {/*Project Card*/}

          {projects.map((project) => (
            <Projectcard project={project} key={project.slug} />
          ))}
        </div>
      </section>

      {/*What i do*/}

      {/*Thoughts*/}
      <section
        className="py-10 h-full w-full relative "
        aria-label="journal-section"
      >
        <div className="w-full">
          <div className="w-full grid  gap-6 md:grid-cols-[1.25fr,2fr] md:gap-24">
            <div className="flex flex-col gap-6 md:sticky md:top-10 h-fit">
              <h3 className="text-3xl font-medium md:max-w-xs">
                Writing makes you a better designer
              </h3>
              <div>
                <Link
                  href="/journal"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  More Thoughts
                </Link>
              </div>
            </div>

            {/*Blog Wrapper*/}
            <div className="flex flex-col gap-10">
              {/*Blog Entry*/}
              {docs &&
                docs.map((doc, i) => <BlogEntryCard doc={doc} key={i} />)}
            </div>
          </div>

          {/* Footer */}
        </div>
      </section>
    </div>
  );
}
