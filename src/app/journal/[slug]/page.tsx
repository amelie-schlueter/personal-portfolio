import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/MDX";
import EntryWrapper from "@/components/journal/EntryWrapper";
import EntrySidebar from "@/components/journal/EntrySidebar";
import EntryHeader from "@/components/journal/EntryHeader";
import BlogFooter from "@/components/journal/BlogFooter";

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
  const headings = doc.headings;
  const docs = allDocs.find((doc) => {
    return doc.slugAsParams !== params.slug && doc.published;
  });

  return (
    <EntryWrapper>
      <EntrySidebar headings={headings} />
      <EntryHeader title={doc.title} date={date} />
      <Mdx code={doc.body.code} />
      <BlogFooter post={docs} />
    </EntryWrapper>
  );
};

export default Page;
