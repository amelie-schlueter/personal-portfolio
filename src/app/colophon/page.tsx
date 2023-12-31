import TechStackItem from "@/components/TechStackItem";

import Grid, { GridItem } from "@/components/layout/Grid";
import Title from "@/components/layout/Title";

import {
  ArrowUpRight,
  Brain,
  Code,
  Glasses,
  Home,
  Lightbulb,
  Pen,
  Podcast,
  Server,
  Smile,
  Type,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "@/components/layout/Footer";

const imprint = () => {
  return (
    <>
      <div className=" container px-4 mx-auto w-full relative my-12 md:mt-24 ">
        <h1 className="text-xl font-medium">Colophon</h1>
        <p className="text-muted-foreground mb-8">Guide to this website</p>
        <div className=" mx-auto w-full relative">
          <Grid className="mb-8 p-0">
            <GridItem className="border-0 ">
              <Title
                title="Tech stack"
                icon={<Code strokeWidth={1.5} className="h-4 w-4" />}
              />
            </GridItem>
            <GridItem className=" border-t md:border-none">
              <p>
                I used my favorite tech stack for this site and added some
                additional tools to make my life easier and create the best
                possible experience while keeping flexibility in mind.
              </p>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-1 justify-start">
                  <TechStackItem title="Language" value="JavaScript" />
                  <TechStackItem title="Framework" value="ReactJS" />
                  <TechStackItem title="SSR" value="NextJS" />
                  <TechStackItem title="CSS Framework" value="TailwindCSS" />
                  <TechStackItem title="Syntax" value="Typescript" />
                  <TechStackItem title="Markdown" value="Contentlayer" />
                  <TechStackItem
                    title="Syntax Highlighting"
                    value="Highlight.js"
                  />
                </div>
              </div>
            </GridItem>
          </Grid>

          {/*Hosting*/}
          <Grid className="">
            <GridItem className="border-0 md:border-t-[1px]">
              <Title
                title="Hosting"
                icon={<Server strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem className="m-0">
              <p>
                This side is deployed and hosted on{" "}
                <span className="underline">
                  <Link href={"https://vercel.com"}>Vercel</Link>.
                </span>
              </p>
            </GridItem>
          </Grid>
          {/*Icons*/}
          <Grid className="mb-6 ">
            <GridItem className="border-0 md:border-t">
              <Title
                title="Icons"
                icon={<Home strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem className="m-0">
              <p>
                This personal site uses the React Icon library{" "}
                <span className="underline">
                  <Link href={"https://lucide.dev/"}>Lucide React</Link>
                </span>
                .
              </p>
            </GridItem>
          </Grid>
          <Grid className="mb-6">
            <GridItem className="border-0 md:border-t">
              <Title
                title="Typography"
                icon={<Type strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem className="m-0 ">
              <p>
                The simple and clean typeface{" "}
                <span className="underline">
                  <Link href={"https://klim.co.nz/retail-fonts/soehne/"}>
                    Soehne
                  </Link>
                </span>{" "}
                by <span>Kris Sowersby</span> and published through{" "}
                <span className="underline">
                  <Link href={"https://klim.co.nz/"}>Klim Type Foundry</Link>
                </span>{" "}
                is used for this website. I used only the regular and the
                semibold weight.
              </p>
            </GridItem>
          </Grid>
          <Grid className="mb-6">
            <GridItem className="border-0 md:border-t">
              <Title
                title="User Interface Elements"
                icon={<Pen strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem className="m-0 ">
              <p>
                The foundation of the user interface elements is the open-source
                library{" "}
                <span>
                  <Link href={"https://ui.shadcn.com/"} className="underline">
                    ShadcnUI
                  </Link>
                </span>
                . I customized the components to fit my needs and added
                additional components where needed.
              </p>
            </GridItem>
          </Grid>
          <Grid className="mb-6">
            <GridItem className="border-0 md:border-t">
              <Title
                title="Inspiration"
                icon={<Lightbulb strokeWidth={1.5} size={14} />}
              />
            </GridItem>
            <GridItem className="m-0 ">
              <p>
                Day by day, I see many great websites on the World Wide Web, and
                I am always inspired by the work of others. I try to learn from
                them and implement the things I like in my own way.
              </p>
              <p>
                I want to mention some amazing sites that inspired me for this
                personal site:
              </p>
              <ul className="text-base mt-4">
                <li>
                  <Link
                    href={"https://linusrogge.com/"}
                    className="underline"
                    target="_blank"
                  >
                    Linus Rogge
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://rauno.me/"}
                    className="underline"
                    target="_blank"
                  >
                    Rauno Freiberg
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://floriankiem.com"}
                    className="underline"
                    target="_blank"
                  >
                    Florian Kiem
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://antonstallboerger.com/"}
                    className="underline"
                  >
                    Anton Stallbörger
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.0xshapeshifter.dev/"}
                    target="_blank"
                    className="underline"
                  >
                    Shapeshifter
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.fabianschultz.com/"}
                    target="_blank"
                    className="underline"
                  >
                    Fabian Schultz
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://paco.me/"}
                    target="_blank"
                    className="underline"
                  >
                    Paco Coursey
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://carlbarenbrug.com/"}
                    target="_blank"
                    className="underline"
                  >
                    Carl Barenburg
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.ambedg.ar/"}
                    target="_blank"
                    className="underline"
                  >
                    Edgar Ambartsoumian
                  </Link>
                </li>
              </ul>
            </GridItem>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default imprint;
