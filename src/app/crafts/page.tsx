import CraftItem from "@/components/CraftItem";
import Hero from "@/components/Hero";
import Grid from "@/components/layout/Grid";
import { craftsArr } from "@/lib/data";
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
            <h1 className="text-xl font-medium">Interaction Corner</h1>
          </div>
          <div>
            <p className=" max-w-md">
              A collection of microinteractions and interactive components,
              blending functionality with creativity.
            </p>
          </div>
        </Grid>
      </div>

      <div className="grid md:grid-cols-3 px-4 gap-4 mt-12">
        {craftsArr &&
          craftsArr.map((craft) => {
            return <CraftItem craft={craft} key={craft.slug} />;
          })}
      </div>
    </div>
  );
};

export default Page;
