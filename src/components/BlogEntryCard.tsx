"use client";
import { Separator } from "@/components/ui/separator";
import { Doc } from "contentlayer/generated";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUpRight, BookOpenText, Pilcrow } from "lucide-react";
import { motion } from "framer-motion";
import { Mdx } from "./MDX";
const BlogEntryCard = ({ doc }: { doc: Doc }) => {
  const date = new Date(doc.publishedAt);

  const [arrowPosition, setArrowPosition] = React.useState(0);

  return (
    <Link href={doc.slug} className="w-full ">
      <motion.div
        className="flex flex-col  justify-between gap-2 w-full card-content"
        onHoverStart={() => setArrowPosition(2)}
        onHoverEnd={() => setArrowPosition(0)}
      >
        <div className="flex items-center justify-between  underline ">
          <div className="flex items-center gap-2">
            <Pilcrow
              size={16}
              strokeWidth={1.5}
              className="mt-1 text-muted-foreground"
            />

            <div className="flex flex-col">
              {/* <p className="w-fit mt-1 text-muted-foreground text-xs">
                {format(date, "EE, dd MMM yyyy")}
              </p> */}
              <h4 className="font-medium text-md text-sm">{doc.title}</h4>
            </div>
          </div>
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
      </motion.div>
    </Link>
  );
};

export default BlogEntryCard;
