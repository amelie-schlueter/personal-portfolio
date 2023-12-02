"use client";
import { Doc } from "contentlayer/generated";
import { format } from "date-fns";
import React from "react";
import { Mdx } from "./MDX";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import InlineNavbar from "./InlineNavbar";

const Post = ({ doc }: { doc: Doc }) => {
  const date = new Date(doc.publishedAt);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="sticky h-1 top-0 w-full flex items-center z-10 justify-center bg-background pt-6 pb-4">
        <motion.div
          className="h-1 w-full flex items-center z-10 justify-center bg-foreground "
          style={{
            scaleX: scrollYProgress,
            originX: 0,
          }}
        ></motion.div>
      </div>
      <InlineNavbar />
      <div className="md:grid md:grid-cols-[1fr,1.25fr] relative ">
        <div className="mb-10 md:sticky md:top-10 h-fit">
          <h1 className="text-3xl font-medium">{doc.title}</h1>
          <p className="text-muted-foreground text-sm mt-2">
            {format(date, "EE, dd MMM yyyy")}
          </p>
        </div>

        <Mdx code={doc.body.code} />
      </div>
    </>
  );
};

export default Post;
