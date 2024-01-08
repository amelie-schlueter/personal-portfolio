// @ts-nocheck
"use client";
import EntryHeader from "@/components/journal/EntryHeader";
import EntryWrapper from "@/components/journal/EntryWrapper";
import EntrySidebar from "@/components/journal/EntrySidebar";
import { Separator } from "@/components/ui/separator";
import { craftsArr } from "@/lib/data";
import { cn } from "@/lib/utils";
import hljs from "highlight.js";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import TabsGallery, { Tab } from "./components/TabsGallery";
import TabBar from "./components/TabBar";
import ComponentWrapper from "@/components/layout/ComponentWrapper";
import CodeContent from "@/components/layout/CodeContent";
import ComponentCodeBlock from "@/components/layout/ComponentCodeBlock";
import ComponentContent from "@/components/layout/ComponentContent";
import Footer from "@/components/layout/Footer";

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "image_01", label: "Image 1" },
  { id: "image_02", label: "Image 2" },
  { id: "image_03", label: "Image 3" },
  { id: "image_04", label: "Image 4" },
];

const Page = () => {
  const craft = craftsArr.find((craft) => craft.slug === "gallery-grid");
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const { resolvedTheme: currentTheme } = useTheme();
  React.useEffect(() => {
    hljs.highlightAll();

    const syntaxHighlightingCSS =
      currentTheme === "dark"
        ? import("src/lib/styles/mdx-dark.css")
        : import("highlight.js/styles/grayscale.css")!;

    syntaxHighlightingCSS.then((module) => {
      module.default;
    });
  }, [currentTheme]);
  return (
    <div className="container px-4 py-12 md:my-10 h-full">
      <EntryWrapper>
        <EntrySidebar />
        <EntryHeader title={craft.title} date={new Date(craft?.date)} />

        <div className="w-full space-y-4">
          <ComponentWrapper className="flex flex-col">
            <TabsGallery tabs={tabs} />
            <p className="text-sm max-w-[200px] text-center text-muted-foreground/70 md:hidden ">
              A larger screen size is required to view the differencies in the
              layouts
            </p>
          </ComponentWrapper>

          <p className={cn("")}>
            I created a tab bar with a nice microinteraction to change between
            the tab content. I used{""}
            <span>
              <Link
                href={"https://www.framer.com/motion/"}
                className="underline hover:text-blue-500"
              >
                Framer-Motion
              </Link>
            </span>{" "}
            to create these microinteractions.
          </p>
          <ComponentCodeBlock>
            <ComponentContent className="p-4">
              <TabBar />
            </ComponentContent>
            <CodeContent language="typescript">
              {`{activeTab === tab.id && (
    <motion.span
      layoutId="bubble"
      className={"absolute inset-0 z-10  mix-blend-difference"
      style={{ borderRadius: 9999 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
  />
  )}`}
            </CodeContent>
          </ComponentCodeBlock>
          <p>
            You can add some theme logic to change the background color of the
            selected tab whenever the theme changes by using a ternary operator
            within the className attribute.
          </p>
          <div>
            <h3 className="mt-6">Smooth Change Transitions</h3>
            <p className={cn("")}>
              To create these smooth change transitions, I used the
              Layout-Transition functionality from Framer Motion. Here I used a
              layoutId to achieve the desired outcome:
            </p>
          </div>
          <video
            className="w-full  rounded-md max-h-[225px] md:max-h-full"
            src="/crafts/gallery_grid/gallery_video-light.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <CodeContent language="typescript" variant="default">
            {` <TabContent tabId="overview" activeTab={activeTab}>
          <motion.div
            className="flex gap-2 overflow-x-auto mx-auto h-[500px] max-w-[800px] "
            layoutId="images"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            {images.map((image) => {
              return (
                <motion.div
                  className="shadow-lg"
                  key={image.link}
                  whileHover={{
                    width: "350px",
                    transition: { duration: 0.2, easings: "spring" },
                  }}
                >
                  <Image
                    src={image.link}
                    width={400}
                    height={600}
                    onClick={() => clickHandler(image.id)}
                    alt="placeholder"
                    className="rounded-md h-full object-cover cursor-pointer "
                  ></Image>
                </motion.div>
              );
            })}
          </motion.div>
        </TabContent>`}
          </CodeContent>
        </div>
        <Footer />
      </EntryWrapper>
    </div>
  );
};

export default Page;
