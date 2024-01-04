"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import TabContent from "./TabContent";
import Image from "next/image";
import { CornerUpLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface TabsProps {
  tabs: Tab[];
}

const images = [
  { link: "/crafts/gallery_grid/image_01.jpeg", id: "image_01" },
  { link: "/crafts/gallery_grid/image_02.jpeg", id: "image_02" },
  { link: "/crafts/gallery_grid/image_03.jpeg", id: "image_03" },
  { link: "/crafts/gallery_grid/image_04.jpeg", id: "image_04" },
];
const TabsGallery = ({ tabs }: PropsWithChildren<TabsProps>) => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const { resolvedTheme: currentTheme } = useTheme();
  const router = useRouter();

  const clickHandler = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      <div className="flex space-x-1 items-center justify-center mb-2 mt-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => clickHandler(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-muted-foreground"
            } relative rounded-full px-1.5 md:px-3 py-1.5 text-sm font-medium text-foreground outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className={`absolute inset-0 z-10  mix-blend-difference ${
                  currentTheme === "dark" ? "bg-white" : "bg-background"
                }`}
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6 w-full">
        <TabContent tabId="overview" activeTab={activeTab}>
          <motion.div
            className="flex gap-2 overflow-x-auto   mx-auto h-[300px] max-w-[800px] "
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
        </TabContent>
        <TabContent tabId="image_01" activeTab={activeTab}>
          <motion.div
            className="flex flex-col items-center gap-8 w-full"
            layoutId="images"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <Image
              src={images?.[0].link}
              width={600}
              height={400}
              alt="placeholder"
              className="rounded-lg w-full max-h-[100px] md:max-h-[200px] object-cover"
            ></Image>

            <div className="w-full">
              <p className="text-base max-w-sm mx-auto">
                In amet quis sit ad ex. Id ipsum nisi tempor esse ut dolore id
                adipisicing dolor incididunt voluptate et amet. Enim irure
                labore laboris nisi non esse. Amet id incididunt mollit mollit.
                Tempor aute nulla sit veniam velit dolore do consectetur irure
                voluptate. In amet quis sit ad ex.
              </p>
            </div>
          </motion.div>
        </TabContent>
        <TabContent tabId="image_02" activeTab={activeTab}>
          <motion.div
            className="grid md:grid-cols-2 items-center gap-12 w-full"
            layoutId="images"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <Image
              src={images?.[1].link}
              width={600}
              height={400}
              alt="placeholder"
              className="rounded-lg rotateImage-03 shadow-xl max-h-[180px] md:max-h-[600px]  object-cover"
            ></Image>
            <div>
              <p className="text-base max-w-sm">
                In amet quis sit ad ex. Id ipsum nisi tempor esse ut dolore id
                adipisicing dolor incididunt voluptate et amet. Enim irure
                labore laboris nisi non esse. Amet id incididunt mollit mollit.
                Tempor aute nulla sit veniam velit dolore do consectetur irure
                voluptate. In amet quis sit ad ex.
              </p>
            </div>
          </motion.div>
        </TabContent>
        <TabContent tabId="image_03" activeTab={activeTab}>
          <motion.div
            className="grid md:grid-cols-2 items-center gap-5 md:gap-20   md:max-h-full  w-full"
            layoutId="images"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div>
              <p className="text-base max-w-sm">
                In amet quis sit ad ex. Id ipsum nisi tempor esse ut dolore id
                adipisicing dolor incididunt voluptate et amet. Enim irure
                labore laboris nisi non esse. Amet id incididunt mollit mollit.
                Tempor aute nulla sit veniam velit dolore do consectetur irure
                voluptate. In amet quis sit ad ex.
              </p>
            </div>
            <Image
              src={images?.[2].link}
              width={600}
              height={400}
              alt="placeholder"
              className="rounded-lg max-h-[200px]"
            ></Image>
          </motion.div>
        </TabContent>
        <TabContent tabId="image_04" activeTab={activeTab}>
          <motion.div
            className="grid md:grid-cols-2 items-center gap-5 md:gap-20 w-full"
            layoutId="images"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <Image
              src={images?.[3].link}
              width={600}
              height={400}
              alt="placeholder"
              className="rounded-lg"
            ></Image>
            <div>
              <p className="text-base max-w-sm">
                In amet quis sit ad ex. Id ipsum nisi tempor esse ut dolore id
                adipisicing dolor incididunt voluptate et amet. Enim irure
                labore laboris nisi non esse. Amet id incididunt mollit mollit.
                Tempor aute nulla sit veniam velit dolore do consectetur irure
                voluptate. In amet quis sit ad ex.
              </p>
            </div>
          </motion.div>
        </TabContent>
      </div>
    </div>
  );
};

export default TabsGallery;

export type Tab = {
  id: string;
  label: string;
};
