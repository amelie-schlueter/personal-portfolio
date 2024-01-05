// @ts-nocheck
"use client";
import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
// Markdown.tsx

import { cn } from "@/lib/utils";
import hljs from "highlight.js";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn("mt-8 scroll-m-20 text-lg font-semibold ", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-8 scroll-m-20 border-b pb-1 text-md font-semibold  first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-8 font-semibold  ", className)}
      {...props}
      id={props.id}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-2 scroll-m-20 text-xs font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-2 scroll-m-20 text-xs fond-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-2 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("text-base underline  ", className)}
      target="_blank"
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(" text-base [&:not(:first-child)]:mt-2", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc text-base", className)} {...props} />
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-6 ml-6 list-decimal text-base", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-1 text-base", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn(className)} {...props} />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        className={cn("rounded-md border ", className)}
        alt={alt}
        {...props}
        src={url}
      />
    );
  },
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn("w-full my-4 py-2 rounded-md bg-transparent", className)}
      {...props}
    />
  ),

  code: ({ className, ...props }) => {
    return (
      <code class=" language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
        {props.children}
      </code>
    );
  },
  Image,
  video: ({ className, ...props }) => (
    <video className="w-full h-fit" autoPlay muted loop {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full mdx ">
      <Component components={components} />
    </div>
  );
}
