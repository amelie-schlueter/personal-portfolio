import React from "react";
import InlineNavbar from "../layout/InlineNavbar";
import TOC from "../TOC";

interface Props {
  headings?: {
    level: number;
    text: string;
    slug: string;
  }[];
}

const EntrySidebar = ({ headings }: Props) => {
  return (
    <div className="w-full lg:w-fit  lg:top-24 sticky top-0 z-[10000] bg-background  lg:fixed   lg:left-[10%] xl:left-[20%]">
      <InlineNavbar />
      {headings && <TOC headings={headings} className="hidden md:flex" />}
    </div>
  );
};

export default EntrySidebar;
