import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/MDX";
import EntryWrapper from "@/components/EntryWrapper";
import EntrySidebar from "@/components/EntrySidebar";
import EntryHeader from "@/components/EntryHeader";

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

  return (
    <EntryWrapper>
      <EntrySidebar headings={headings} />
      <EntryHeader title={doc.title} date={date} />
      <Mdx code={doc.body.code} />
    </EntryWrapper>
  );
};

export default Page;
