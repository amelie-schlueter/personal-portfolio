import React from "react";
import InlineNavbar from "./InlineNavbar";
import { format } from "date-fns";
import { Post } from "contentlayer/generated";
import { Mdx } from "./MDX";

const CraftPost = ({ post }: { post: Post }) => {
  const date = new Date(post.publishedAt);
  return (
    <>
      <InlineNavbar />
      <div className="relative grid md:grid-cols-[300px_minmax(900px,_1fr)_100px]">
        <div className="mb-10 md:sticky py-4 md:top-0 h-fit  bg-background">
          <h1 className="text-2xl font-medium ">{post.title}</h1>
          <p className="text-muted-foreground text-sm mt-2">
            {format(date, "EE, dd MMM yyyy")}
          </p>
          {/* <TOC headings={headings} /> */}
        </div>

        <Mdx code={post.body.code} />
      </div>
    </>
  );
};

export default CraftPost;
