import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  headings: {
    level: number;
    text: string;
    slug: string;
  }[];
  className?: string;
}

const TOC = ({ headings, className }: Props) => {
  return (
    <nav className={cn("flex flex-col gap-2 my-8", className)}>
      {headings.map((heading) => (
        <Link
          key={`${heading.slug}`}
          href={`#${heading.slug}`}
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          {heading.text}{" "}
        </Link>
      ))}
    </nav>
  );
};

export default TOC;
