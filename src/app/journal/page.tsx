import BlogEntryCard from "@/components/BlogEntryCard";
import Title from "@/components/Title";
import Grid from "@/components/layout/Grid";
import { allDocs } from "contentlayer/generated";
import { format } from "date-fns";
import { PenLine } from "lucide-react";
import React from "react";

const page = () => {
  const docs = allDocs.sort((a, b) => {
    return b.publishedAt.localeCompare(a.publishedAt);
  });
  return (
    <div className="max-w-[700px] px-4 mx-auto w-full relative mt-12 md:mt-24">
      {/*Projects*/}
      <div className="flex gap-6 mt-16 flex-col ">
        <section
          className="py-10 h-full w-full relative "
          aria-label="journal-section"
        >
          <div className="w-full">
            <Title
              title="Writing"
              icon={<PenLine strokeWidth={1.5} size={14} />}
            />

            {/*Blog Wrapper*/}
            <div className="flex flex-col gap-4 sw-full pt-4">
              {/*Blog Entry*/}
              {docs &&
                docs.map((doc, i) => (
                  <div className="flex w-full">
                    <div className=" grid grid-cols-[1fr,1.75fr] w-full">
                      <p className="text-muted-foreground text-sm   ">
                        {format(new Date(doc.publishedAt), "EE, dd.MMM yyyy")}
                      </p>
                      <div className="flex items-center justify-start w-full ">
                        <h2>{doc.title}</h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
