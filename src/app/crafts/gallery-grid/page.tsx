// @ts-nocheck
"use client";
import EntryHeader from "@/components/journal/EntryHeader";
import EntryWrapper from "@/components/journal/EntryWrapper";
import EntrySidebar from "@/components/journal/EntrySidebar";
import InlineNavbar from "@/components/layout/InlineNavbar";
import { Separator } from "@/components/ui/separator";
import { craftsArr } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import hljs from "highlight.js";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Page = () => {
  const craft = craftsArr.find((craft) => craft.slug === "gallery-grid");

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

        <div className="w-full">
          <video
            className="w-full  my-8 rounded-md max-h-[225px] md:max-h-full"
            src="/crafts/gallery_grid/gallery_video-light.mp4"
            autoPlay
            playsInline
            loop
            muted
          />
          <p className={cn("leading-7")}>
            I created a tabbar with a nice microinteraction to change between
            the tab content. I used{" "}
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
          <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
            <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
              {`const [selectedTab, setSelectedTab] = useState(0)`}
            </code>
          </pre>
          <Separator className="w-full my-6" />
          <h3 className="mt-8 scroll-m-20 text-md font-semibold  tracking-tight">
            Smooth Change Transitions
          </h3>
          <p className={cn("leading-7")}>
            To create these smooth change-transitions i used the
            Layout-Transition functionality from framer motion. Here i used a
            layoutId to achieve the desired outcome
          </p>
          <video
            className="w-full my-8 rounded-md max-h-[225px] md:max-h-full"
            src="/crafts/gallery_grid/gallery_video-light.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
            <code className="language-html overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
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
            </code>
          </pre>
        </div>
      </EntryWrapper>
    </div>
  );
};

export default Page;
