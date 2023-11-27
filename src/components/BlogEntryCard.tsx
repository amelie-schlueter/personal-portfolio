import { Separator } from "@/components/ui/separator";
import { Doc } from "contentlayer/generated";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";

const BlogEntryCard = ({ doc }: { doc: Doc }) => {
  const date = new Date(doc.publishedAt);

  console.log(doc.publishedAt, date);
  return (
    <Link href={doc.slug}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex md:w-[20rem]">
          <p className="w-fit text-muted-foreground text-sm">
            {format(date, "EE, dd MMM yyyy")}
          </p>
        </div>
        <div className="flex flex-col  justify-between gap-2 w-full ">
          <h4 className="font-medium ">{doc.title}</h4>
          <Separator />
          <p className="text-muted-foreground">{doc.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogEntryCard;
