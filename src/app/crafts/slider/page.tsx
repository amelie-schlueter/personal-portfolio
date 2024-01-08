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
import ComponentCodeBlock from "@/components/layout/ComponentCodeBlock";
import CodeContent from "@/components/layout/CodeContent";
import ComponentContent from "@/components/layout/ComponentContent";
import Footer from "@/components/layout/Footer";
import InlineCode from "@/components/layout/InlineCode";

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

        <div className="flex flex-col relative ">
          <div className="w-full space-y-4 flex flex-col">
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
              nd recreated it using Framer Motion and React. My focus was
              primarily on the motion and the sound design of these components.
            </p>
            <video
              playsInline
              className="w-full h-fit max-h-[225px] md:max-h-full  rounded-md "
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
              Framer Motion to track the drag position.
            </p>
            <CodeContent language="typescript" variant="default">
              {`const range = [-20, 20];
const sliderRef = useRef<HTMLDivElement>(null);
const [value, setValue] = useState<number>(0);

const items = Array.from({ 
  length: range[1] - range[0] + 1 }(_, i) => i + range[0]
  );
const [maxWidth, setMaxWidth] = useState(0);
const x = useMotionValue(0);`}
            </CodeContent>

            <div>
              <h3 className="mt-6">TSX elements and Framer-motion setup</h3>
              <p className="">
                I created the individual slider elements and passed the value. I
                also passed an active prop to track if the element is currently
                within the selected range.
              </p>
            </div>
            <ComponentCodeBlock>
              <ComponentContent>
                <div className="flex items-center justify-start gap-[0.35rem] z-[1]">
                  <SliderItem value={0} active />
                  <SliderItem value={2} active />
                  <SliderItem value={1} />
                </div>
              </ComponentContent>
              <CodeContent language="html">
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
              </CodeContent>
            </ComponentCodeBlock>

            <p className="">
              I used Framer Motion's "drag" option to implement the
              slider-dragging logic. To create a seamless experience, I used the
              dragConstraints option to limit the dragging to the slider-range.
            </p>

            <p className="">
              To create the selecting logic, I used React state. I used some
              math to calculate the current value and set the state on every
              change. Then I also added a click sound effect whenever the value
              changes.
            </p>

            <CodeContent language="typescript" variant="default">
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
            </CodeContent>
          </div>
        </div>
        <Footer />
      </EntryWrapper>
    </div>
  );
};

export default Page;
