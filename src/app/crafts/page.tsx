import CraftItem from "@/components/craft/CraftItem";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Grid from "@/components/layout/Grid";
import { craftsArr } from "@/lib/data";
import { cn } from "@/lib/utils";
import { allCrafts } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  const crafts = allCrafts;
  const sortedCrafts = craftsArr.sort((a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return (
    <div className="  mx-auto w-full relative mt-12 md:mt-24">
      <div className="flex px-4 container flex-col gap-10">
        <Grid>
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="text-xl font-medium">Interaction Corner</h1>
            </div>
          </div>
          <div>
            <p className=" max-w-md">
              A collection of microinteractions and interactive components,
              blending functionality with creativity.
            </p>
            <blockquote className={cn("blockquote")}>
              "Interaction design is an artform to make experiences that fluidly
              respond to human intent."
              <span>Rauno</span>
            </blockquote>
          </div>
        </Grid>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 mt-12">
        {craftsArr &&
          craftsArr.map((craft) => {
            return <CraftItem craft={craft} key={craft.slug} />;
          })}
      </div>
    </div>
  );
};

export default Page;
