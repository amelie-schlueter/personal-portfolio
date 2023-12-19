import CraftPost from "@/components/CraftPost";
import { Mdx } from "@/components/MDX";
import Post from "@/components/Post";
import { allDocs, allDocuments, allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

async function getPostsFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }
  return post;
}

const page = async ({ params }: Props) => {
  const doc = await getPostsFromParams(params.slug);
  const date = new Date(doc.publishedAt);
  return (
    <div className="container  h-full">
      {/* Navigation */}
      <div className="md:my-10">
        <CraftPost post={doc} />
      </div>
    </div>
  );
};

export default page;
