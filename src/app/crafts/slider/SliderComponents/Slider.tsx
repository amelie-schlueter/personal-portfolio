"use client";
import React, {
  HTMLAttributeReferrerPolicy,
  useEffect,
  useRef,
  useState,
} from "react";
import SliderItem from "./SliderItem";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dot, Speaker, Volume2, VolumeX } from "lucide-react";
import { useMotionValue, useScroll, useTransform, motion } from "framer-motion";
const sound = "/crafts/slider/click-sound.mov";

const Slider = () => {
  const range = [-20, 20];
  const [muted, setMuted] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(0);

  const items = Array.from(
    { length: range[1] - range[0] + 1 },
    (_, i) => i + range[0]
  );
  const [maxWidth, setMaxWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateMaxWidth = () => {
      const width = sliderRef.current?.offsetWidth;
      if (width) {
        setMaxWidth(width / 2);
      }
    };
    updateMaxWidth();
    window.addEventListener("resize", updateMaxWidth);
    return () => window.removeEventListener("resize", updateMaxWidth);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Listen to the motion value changes
    const unsubscribeX = x.onChange((latestX) => {
      const progress = (latestX + maxWidth) / (2 * maxWidth);
      const newValue = Math.floor(progress * (range[1] - range[0])) + range[0];
      setValue(-newValue);
    });

    return () => {
      unsubscribeX();
    };
  }, [x, maxWidth, range]);
  // This effect runs every time the value changes
  useEffect(() => {
    const audio = new Audio(sound);
    console.log("sound");
    // Create a new audio object with the sound file
    if (muted) {
      audio.play();
    }
  }, [value, muted]); // Only re-run the effect if value changes

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger
            className=" cursor-pointer absolute right-2 top-2 rounded-full p-3 bg-muted flex items-center justify-center "
            onClick={toggleMute}
          >
            {!muted ? (
              <VolumeX strokeWidth={1.5} className="h-4 w-4" />
            ) : (
              <Volume2 strokeWidth={1.5} className="h-4 w-4" />
            )}
          </TooltipTrigger>
          <TooltipContent className=" py-1.5 text-sm">
            <p className="text-sm">{!muted ? "Unmute" : "Mute"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="relative justify-center max-w-[375px] md:max-w-xl cursor-ew-resize p-10 ">
        <p>{value}</p>
        <div className=" relative flex items-center  overflow-x-hidden   justify-center">
          <div className="w-full h-full absolute bg-gradient-to-r pointer-events-none from-background from-5% via-transparent to-background to-95% z-[2]" />
          <motion.div
            ref={sliderRef}
            drag="x"
            dragConstraints={{ left: -maxWidth, right: maxWidth }}
            style={{ x }} // Bind the motion value to the x style property
            className="flex items-center justify-start gap-[0.35rem] z-[1]"
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
        <Dot className="mr-[26px] absolute right-[50%] left-[47.5%] text-orange-500" />
      </div>
    </>
  );
};

export default Slider;
