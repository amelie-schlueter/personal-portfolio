// @ts-nocheck
"use client";
import InlineNavbar from "@/components/layout/InlineNavbar";
import { Separator } from "@/components/ui/separator";
import { craftsArr } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import hljs from "highlight.js";

import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import Slider from "./SliderComponents/Slider";

import EntryWrapper from "@/components/journal/EntryWrapper";
import EntrySidebar from "@/components/journal/EntrySidebar";
import EntryHeader from "@/components/journal/EntryHeader";
import { allCrafts } from "contentlayer/generated";
import SliderItem from "./SliderComponents/SliderItem";
import ComponentWrapper from "@/components/layout/ComponentWrapper";

const Page = () => {
  const craft = craftsArr.find((craft) => craft.slug === "slider");
  const craftMdx = allCrafts.find((craft) => craft.title === "Slider");
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

        <div className="flex flex-col relative">
          <div className="w-full mt-4">
            <ComponentWrapper>
              <Slider />
            </ComponentWrapper>
            <p className="">
              I was inspired by{" "}
              <span>
                <Link
                  href={"https://rauno.me/craft/fractional-slider"}
                  className="underline hover:text-blue-500"
                >
                  Fractional Slider by Rauno Freiberg
                </Link>
              </span>{" "}
              an recreated it using Framer Motion and React. My focus was
              primarily on the motion and the sound design of these component.
            </p>
            <video
              playsInline
              className="w-full h-fit max-h-[225px] md:max-h-full my-8 rounded-md "
              src={`${
                currentTheme === "dark"
                  ? "/crafts/slider/slider-video_dark.mp4"
                  : "/crafts/slider/slider-video_light.mp4"
              }`}
              autoPlay
              loop
              muted
            />
            <p className="">
              I started by creating my state variables as well as the refs and
              the individual slider-range. I used the useMotionValue hook from
              framer motion to track the drag position.
            </p>
            <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
              <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
                {`const range = [-20, 20];
const sliderRef = useRef<HTMLDivElement>(null);
const [value, setValue] = useState<number>(0);

const items = Array.from({ 
  length: range[1] - range[0] + 1 }(_, i) => i + range[0]
  );
const [maxWidth, setMaxWidth] = useState(0);
const x = useMotionValue(0);`}
              </code>
            </pre>
            <Separator className="w-full my-6" />
            <h3 className="mt-8 scroll-m-20 text-md font-semibold  tracking-tight">
              TSX elements and Framer-motion setup
            </h3>
            <p className="">
              I created the individual slider elements and pased the value i
              also pased an active prop to track if the element is currently
              within the selected range.
            </p>
            <div className="p-10 border-[1px] mt-4 flex items-center justify-center rounded-md max-h-[300px]">
              <div className="flex items-center justify-start gap-[0.35rem] z-[1]">
                <SliderItem value={0} active />
                <SliderItem value={2} active />
                <SliderItem value={1} />
              </div>
            </div>
            <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
              <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 rounded-[7px] text-sm">
                {`   <div className="relative justify-center cursor-ew-resize p-10 ">
      <p>{value}</p>
      <div 
      className="relative flex items-center max-w-[750px] 
      overflow-x-hidden justify-center">
        <div 
        className="w-full h-full absolute bg-gradient-to-r 
        pointer-events-none from-background from-5% 
        via-transparent to-background to-95% z-[2]" 
        />
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: -maxWidth, right: maxWidth }}
          style={{ x }} // Bind the motion value to the x style property
          className="flex items-center    justify-start gap-[0.35rem] z-[1]"
        >
          {items.map((item, index) => (
            <SliderItem
              key={index}
              value={item}
              active={
                (value >= 0 && item <= value && item >= 0) ||
                (value < 0 && item >= value && item <= 0)
              }
            />
          ))}
        </motion.div>
      </div>
      <Dot 
      className="mr-[26px] absolute right-[50%] left-[47.5%] text-orange-500" 
      />

    </div>`}
              </code>
            </pre>
            http://localhost:3000/crafts/slider
            <p className="">
              I used Framer-Motions "drag" option to implement the
              slider-dragging logic. To create a seamless experience i used the
              dragConstraints option to limit the dragging to the slider-range.
            </p>
            <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
              <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 rounded-[7px] text-sm">
                {` useEffect(() => {
    const updateMaxWidth = () => {
      const width = sliderRef.current?.offsetWidth;
      if (width) {
        setMaxWidth(width / 2);
      }
    };
    updateMaxWidth();
    window.addEventListener("resize", updateMaxWidth);
    return () => window.removeEventListener("resize", updateMaxWidth);
  }, []);`}
              </code>
            </pre>
            <p className="">
              To create the selecting logic i used React-state.I used some math
              to calculate the current value and set the state on every change.
              Then i also added a click-soundeffect whenever the value changes.{" "}
            </p>
            <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
              <code className="language-javascript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 rounded-[7px] text-sm">
                {`useEffect(() => {
    const unsubscribeX = x.onChange((latestX) => {
      const progress = (latestX + maxWidth) / (2 * maxWidth);
      const newValue = Math.floor(progress * (range[1] - range[0])) + range[0];
      setValue(-newValue);
    });

    return () => {
      unsubscribeX();
    };
  }, [x, maxWidth, range]);

  useEffect(() => {
    const audio = new Audio(sound);
    audio
      .play()
      .catch((error) => console.error("Error playing the sound:", error));
  }, [value]);`}
              </code>
            </pre>
          </div>
        </div>
      </EntryWrapper>
    </div>
  );
};

export default Page;
