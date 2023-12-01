"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageGrid from "@/components/premium-room-design/ImageGrid";
import LoadingButton from "@/components/LoadingButton";

const Page = () => {
  const project = projects.find(
    (project) => project.slug === "premium-room-design"
  );
  if (!project) return notFound();

  return (
    <>
      <div className="container">
        <section className="flex flex-col py-16 tems-start justify-center gap-10 md:grid md:grid-cols-2 md:items-center  md:h-full md:py-20  ">
          {/*Hero*/}
          <div className="max-w-md">
            <div className="mb-6 text-4xl">
              <h1 className="font-medium">{project?.title}</h1>
            </div>
            <p className="text-muted-foreground max-w-xl ">
              Im Amelie an Interaction Design student at HFG Schwäbisch Gmuend,
              and Im passionate about using user-centered functional design to
              solve real-world problems.
            </p>
            <div className="mt-6 flex gap-2">
              {project?.tags.map((tag) => (
                <Badge key={tag} variant={"green"}>
                  {tag}
                </Badge>
              ))}
              <Badge variant={"outline"}>{format(project.year, "yyyy")}</Badge>
            </div>
          </div>
          <div>
            <LoadingButton />
          </div>
          <div className="w-full flex md:items-start md:justify-start "></div>
        </section>
        <section className="py-16">
          <motion.div className="md:max-w-[70%] mx-auto">
            <Image
              src={"/prd-ipad.png"}
              className="z-1"
              width={2836}
              height={2263}
              alt="ipad-mockup-website"
            ></Image>
          </motion.div>
        </section>
        <section className="pb-16 pt-6">
          <div className="grid md:grid-cols-2 md:gap-8">
            <div className="max-w-md flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Branding</h2>
              <p className="text-muted-foreground">
                Firstly, the establishment of a visual brand stands as a
                fundamental requisite for any company. In this context, I made a
                deliberate choice to employ a subdued and neutral color palette.
                The infusion of a green hue serves as a symbolic representation
                of the companys unwavering commitment to sustainability.
              </p>
            </div>
            <div className="flex items-end justify-end mt-8 md:mt-0">
              <div className="flex gap-4 w-full">
                <div>
                  <div className="bg-[#919287]  w-28 h-28"></div>
                  <p className="text-sm text-muted-foreground font-medium mt-2">
                    #919287
                  </p>
                </div>
                <div>
                  <div className="bg-[#272627]   w-28 h-28"></div>
                  <p className="text-sm text-muted-foreground font-medium mt-2">
                    #272627
                  </p>
                </div>
                <div>
                  <div className="bg-white w-28 h-28"></div>
                  <p className="text-sm text-muted-foreground font-medium mt-2">
                    #FFFFFF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 relative">
        <div className="container grid md:grid-cols-2 md:gap-8">
          <div className="max-w-md flex flex-col gap-2">
            <h2 className="text-2xl font-medium">Animations</h2>
            <p className="text-muted-foreground">
              Firstly, the establishment of a visual brand stands as a
              fundamental requisite for any company. In this context, I made a
              deliberate choice to employ a subdued and neutral color palette.
              The infusion of a green hue serves as a symbolic representation of
              the companys unwavering commitment to sustainability.
            </p>
          </div>
        </div>

        {/* Grid Image */}
      </section>
      <ImageGrid />
    </>
  );
};

export default Page;
