"use client";
/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import TimelineItem from "./TimelineItem";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  subMonths,
  format,
} from "date-fns";

interface Props {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const VerticalTimeline = ({ selectedDate, setSelectedDate }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const x = useMotionValue(0); // motion value to track the drag position
  const isDragging = useRef(false); // flag to indicate if we are dragging
  const [loadedMonths, setLoadedMonths] = useState([new Date()]); // Start with current month
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [orientation, setOrientation] = useState("vertical");

  // Function to load more months
  const loadMoreMonths = (numMonths = 1) => {
    setLoadedMonths((current) => {
      const lastMonth = current[current.length - 1];
      let newMonths = [];
      for (let i = 1; i <= numMonths; i++) {
        newMonths.push(addMonths(lastMonth, i));
      }
      return [...current, ...newMonths];
    });
  };

  // check with month is visible

  const checkMonth = () => {
    const timeline = timelineRef.current;
    const timelineWidth = timeline?.offsetWidth;
    const timelineScrollLeft = timeline?.scrollLeft;
    const timeLinescrollHeight = timeline?.scrollHeight;
    const timelineClientWidth = timeline?.scrollHeight;
    const timelineScrollRight = timeLinescrollHeight! - timelineClientWidth!;
    const timelineScrollPercentage = timelineScrollLeft! / timelineScrollRight;
    const timelineScrollMonth = Math.round(timelineScrollPercentage * 12);
    const timelineScrollDate = addMonths(new Date(), timelineScrollMonth);
    setCurrentMonth(timelineScrollDate);
  };

  // Generate timeline items for loaded months
  const timelineItems = loadedMonths.flatMap((month) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    return eachDayOfInterval({ start, end });
  });
  // Scroll event handler to load more months
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
        const nearEnd = scrollLeft + clientWidth > scrollWidth - 500; // 500px before the end
        if (nearEnd) {
          loadMoreMonths();
        }
      }
      checkMonth();
    };

    timelineRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      timelineRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate max width of timeline container
  useEffect(() => {
    if (containerRef.current) {
      setMaxDrag(containerRef.current.offsetWidth - 75);
    }
  }, [containerRef]);

  // Update the timeline scroll when dragging the indicator
  useEffect(() => {
    const unsubscribeX = x.onChange((latestX) => {
      if (timelineRef.current && isDragging.current) {
        const scrollPercentage = latestX / maxDrag;
        const newScrollLeft =
          scrollPercentage *
          (timelineRef.current.scrollWidth - timelineRef.current.clientWidth);
        timelineRef.current.scrollLeft = newScrollLeft;
      }
    });

    return () => unsubscribeX();
  }, [x, maxDrag]);

  // Update the indicator position when timeline is scrolled
  useEffect(() => {
    const timeline = timelineRef.current;
    const handleScroll = () => {
      if (timeline && !isDragging.current) {
        const scrollPercentage =
          timeline.scrollLeft / (timeline.scrollWidth - timeline.clientWidth);
        const newX = scrollPercentage * maxDrag;
        x.set(newX);
      }
    };

    timeline?.addEventListener("scroll", handleScroll);
    return () => timeline?.removeEventListener("scroll", handleScroll);
  }, [x, maxDrag]);

  return (
    <>
      <div className="relative  pl-6 ">
        <div
          ref={containerRef}
          className=" overflow-hidden w-full relative h-fit max-h-[300px] scrollbar-hide "
        >
          <div className="absolute w-full h-full bg-gradient-to-b pointer-events-none from-background from-2% via-transparent to-background to-95%  z-[20]" />
          <motion.div
            ref={timelineRef}
            className={`flex ${
              orientation === "vertical" ? "flex-col" : "flex-row"
            } overflow-y-auto scrollbar-hide z-[50] space-y-2 h-screen`}
          >
            {timelineItems.map((date) => {
              const formattedDate = format(date, "yyyy-MM-dd");

              return (
                <TimelineItem
                  key={date.toISOString()}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  orientation={orientation}
                />
              );
            })}
          </motion.div>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0.2}
          ref={controlRef}
          dragMomentum={false}
          style={{ x }} // Bind the x motion value to the style
          className="h-2 w-16 mx-auto rounded-lg mt-2 cursor-pointer absolute"
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            isDragging.current = false;
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default VerticalTimeline;
