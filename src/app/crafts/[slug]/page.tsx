import CodeComponent from "@/components/CodeComponent";
import CraftPost from "@/components/CraftPost";
import { Mdx } from "@/components/MDX";
import Post from "@/components/Post";
import { allCrafts, allDocs, allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

async function getcraftsFromParams(slug: string) {
  const craft = allCrafts.find((craft) => craft.slugAsParams === slug);

  if (!craft) {
    notFound();
  }
  return craft;
}

const page = async ({ params }: Props) => {
  const craft = await getcraftsFromParams(params.slug);
  const date = new Date(craft.publishedAt);
  return (
    <div className="container  h-full">
      {/* Navigation */}
      <div className="md:my-10">
        <CraftPost craft={craft} key={craft._id} />
      </div>
    </div>
  );
};

export default page;
