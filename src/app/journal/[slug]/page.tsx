import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { Mdx } from "@/components/MDX";
import { format } from "date-fns";
import InlineNavbar from "@/components/InlineNavbar";
import { useScroll } from "framer-motion";
import Post from "@/components/Post";

interface Props {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }
  return doc;
}

const Page = async ({ params }: Props) => {
  const doc = await getDocFromParams(params.slug);
  const date = new Date(doc.publishedAt);

  return (
    <div className="container min-h-screen h-full">
      {/* Navigation */}
      <div className="my-10">
        <Post doc={doc} />
      </div>
    </div>
  );
};

export default Page;
