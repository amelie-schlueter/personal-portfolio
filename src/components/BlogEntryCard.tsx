import { Separator } from "@/components/ui/separator";
import { Doc } from "contentlayer/generated";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BlogEntryCard = ({ doc, id }: { doc: Doc; id: number }) => {
  const date = new Date(doc.publishedAt);

  console.log(id);
  return (
    <Link href={doc.slug} className="">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex md:w-[20rem]">
          <p className="w-fit text-muted-foreground text-sm">
            {format(date, "EE, dd MMM yyyy")}
          </p>
        </div>
        <div className="flex flex-col  justify-between gap-2 w-full ">
          <div className="flex items-center justify-between hover:underline">
            <h4 className="font-medium ">{doc.title}</h4>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </div>
          <Separator />
          <p className="text-muted-foreground">{doc.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogEntryCard;
