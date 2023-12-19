import CraftItem from "@/components/CraftItem";
import Hero from "@/components/Hero";
import MicroInteractions from "@/components/MicroInteractions";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { Projectdatepicker } from "@/components/datepicker";
import { allPosts } from "contentlayer/generated";
import { Mic } from "lucide-react";

import React from "react";

const Page = () => {
  const posts = allPosts;
  return (
    <div className="container">
      <div className="flex flex-col py-24 gap-8 items-start justify-end w-full  md:grid md:grid-cols-[1fr,1.25fr] md:justify-end ">
        <Hero
          title="Craft"
          description="A collection of my some side projects and little experiements i did in the past"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {posts &&
          posts.map((post) => {
            return <CraftItem post={post} />;
          })}
      </div>
    </div>
  );
};

export default Page;
