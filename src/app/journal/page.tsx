import BlogEntryCard from "@/components/BlogEntryCard";
import Hero from "@/components/Hero";

import { allDocs } from "contentlayer/generated";
import React from "react";

const page = () => {
  const docs = allDocs.sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <div className="container">
      <div className="flex flex-col py-24 gap-8 items-start justify-end w-full  md:grid md:grid-cols-[1fr,1.25fr] md:justify-end ">
        <Hero
          title="Journal"
          description="  Writing is one of the most underrated skills when it comes to
              design and development. I deeply believe that the ability to
              commuicate your ideas and thoughts hugely impacts the quality of
              your work."
          description2="   This is why i love to share my thoughts and feelings about different
              design, development and life specific topics."
        />

        <div className="flex flex-col gap-6 w-full">
          {docs.map((doc) => {
            return <BlogEntryCard doc={doc} key={doc.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
