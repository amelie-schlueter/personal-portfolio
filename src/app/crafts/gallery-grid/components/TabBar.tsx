"use client";
import { motion } from "framer-motion";
import React from "react";

import { useTheme } from "next-themes";
import { Tab } from "./TabsGallery";

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "image_01", label: "Image 1" },
  { id: "image_02", label: "Image 2" },
  { id: "image_03", label: "Image 3" },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);
  const clickHandler = (tabId: string) => {
    setActiveTab(tabId);
  };

  const { resolvedTheme: currentTheme } = useTheme();

  return (
    <div className="flex space-x-1 w-full items-center justify-center mb-6 mt-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => clickHandler(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-muted-foreground"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-foreground outline-sky-400 transition focus-visible:outline-2`}
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
  );
};

export default TabBar;
