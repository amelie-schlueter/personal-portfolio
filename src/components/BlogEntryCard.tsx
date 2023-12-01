"use client";
import { Separator } from "@/components/ui/separator";
import { Doc } from "contentlayer/generated";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
const BlogEntryCard = ({ doc }: { doc: Doc }) => {
  const date = new Date(doc.publishedAt);

  const [arrowPosition, setArrowPosition] = React.useState(0);

  return (
    <Link href={doc.slug} className="">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex md:w-[20rem]">
          <p className="w-fit text-muted-foreground text-sm">
            {format(date, "EE, dd MMM yyyy")}
          </p>
        </div>
        <motion.div
          className="flex flex-col  justify-between gap-2 w-full card-content"
          onHoverStart={() => setArrowPosition(2)}
          onHoverEnd={() => setArrowPosition(0)}
        >
          <div className="flex items-center justify-between hover:underline">
            <h4 className="font-medium ">{doc.title}</h4>
            <motion.div
              animate={{ y: -arrowPosition, x: arrowPosition }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              }}
            >
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </motion.div>
          </div>
          <Separator />
          <p className="text-muted-foreground">{doc.description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export default BlogEntryCard;
