import React, { useEffect } from "react";
import InlineNavbar from "./InlineNavbar";
import { format } from "date-fns";

import { Mdx } from "./MDX";
import { Craft } from "contentlayer/generated";
import TOC from "./TOC";

const CraftPost = ({ craft }: { craft: Craft }) => {
  const date = new Date(craft.publishedAt);
  const headings = craft.headings;

  return (
    <>
      <div className="relative h-full lg:flex">
        <div className="mb-10  md:sticky py-4 md:top-0 h-full   bg-background xl:min-w-[450px] lg:min-w-[200px]">
          <InlineNavbar />
          <h1 className="text-2xl font-medium ">{craft.title}</h1>
          <p className="text-muted-foreground text-sm mt-2">
            {format(date, "EE, dd MMM yyyy")}
          </p>
          <TOC headings={headings} />
        </div>

        <div className="w-full">
          <Mdx code={craft.body.code} />
        </div>
      </div>
    </>
  );
};

export default CraftPost;
