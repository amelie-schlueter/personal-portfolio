import Link from "next/link";
import React from "react";

interface Props {
  headings: {
    level: number;
    text: string;
    slug: string;
  }[];
}

const TOC = ({ headings }: Props) => {
  return (
    <div className="flex flex-col gap-2 my-8">
      {headings.map((heading) => (
        <Link
          key={`{heading.slug}`}
          href={`#${heading.slug}`}
          className="underline text-sm text-muted-foreground"
        >
          {heading.text}{" "}
        </Link>
      ))}
    </div>
  );
};

export default TOC;
