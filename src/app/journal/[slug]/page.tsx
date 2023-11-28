import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import { Mdx } from "@/components/MDX";
import { format } from "date-fns";
import InlineNavbar from "@/components/InlineNavbar";

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
    <div className="container">
      {/* Navigation */}
      <div className="my-10">
        <InlineNavbar />
        <div className="md:grid md:grid-cols-2 relative">
          <div className="mb-10 md:sticky md:top-10 h-fit">
            <h1 className="text-3xl font-medium">{doc.title}</h1>
            <p className="text-muted-foreground text-sm mt-2">
              {format(date, "EE, dd MMM yyyy")}
            </p>
          </div>
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </div>
  );
};

export default Page;
