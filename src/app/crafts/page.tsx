import CraftItem from "@/components/CraftItem";
import Hero from "@/components/Hero";
import { craftsArr } from "@/lib/data";
import { allCrafts } from "contentlayer/generated";
import React from "react";

const Page = () => {
  const crafts = allCrafts;
  const sortedCrafts = craftsArr.sort((a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return (
    <div className="container">
      <div className="flex flex-col py-12  gap-8 items-start justify-end w-full  md:grid md:grid-cols-[1fr,1.25fr] md:justify-end ">
        <Hero
          title="Interaction Corner"
          description="A collection of microinteractions and interactive components, blending functionality with creativity."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {craftsArr &&
          craftsArr.map((craft) => {
            return <CraftItem craft={craft} key={craft.slug} />;
          })}
      </div>
    </div>
  );
};

export default Page;
