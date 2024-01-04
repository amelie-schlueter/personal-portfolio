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
import React from "react";
import ComponentWrapper from "@/components/layout/ComponentWrapper";
import VerticalTimeline from "./components/VerticalTimeline";

const Page = () => {
  const craft = craftsArr.find((craft) => craft.slug === "vertical-timeline");

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
          <ComponentWrapper>
            <VerticalTimeline selectedDate={new Date()} />
          </ComponentWrapper>
          <video
            className="w-full my-8 rounded-md max-h-[225px] md:max-h-full"
            src="/crafts/vertical-timeline/timeline_video.mp4"
            autoPlay
            playsInline
            loop
            muted
          />
          <h3>Code</h3>
          <p className={cn("")}>
            Preparing the states and variables for the unlimited month scroll
            and the drag funtionality
          </p>
          <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
            <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
              {`const { data } = trpc.entries.getEntries.useQuery()
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const controlRef = useRef<HTMLDivElement>(null)
  const [maxDrag, setMaxDrag] = useState(0)
  const x = useMotionValue(0) // motion value to track the drag position
  const isDragging = useRef(false) // flag to indicate if we are dragging
  const [loadedMonths, setLoadedMonths] = useState([new Date()]) // Start with current month
  const [currentMonth, setCurrentMonth] = useState(new Date())`}
            </code>
          </pre>
          <Separator className="w-full my-6" />
          <h3>Unlimited Month scroll</h3>
          <p className={cn("")}>Logic for unlimited month scroll</p>
          <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
            <code className="language-typescript overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
              {` const loadMoreMonths = (numMonths = 1) => {
    setLoadedMonths((current) => {
      const lastMonth = current[current.length - 1]
      let newMonths = []
      for (let i = 1; i <= numMonths; i++) {
        newMonths.push(addMonths(lastMonth, i))
      }
      return [...current, ...newMonths]
    })
  }

  // check with month is visible

  const checkMonth = () => {
    const timeline = timelineRef.current
    const timelineWidth = timeline?.offsetWidth
    const timelineScrollLeft = timeline?.scrollLeft
    const timeLinescrollHeight = timeline?.scrollHeight
    const timelineClientWidth = timeline?.scrollHeight
    const timelineScrollRight = timeLinescrollHeight! - timelineClientWidth!
    const timelineScrollPercentage = timelineScrollLeft! / timelineScrollRight
    const timelineScrollMonth = Math.round(timelineScrollPercentage * 12)
    const timelineScrollDate = addMonths(new Date(), timelineScrollMonth)
    setCurrentMonth(timelineScrollDate)
  }

  // Generate timeline items for loaded months
  const timelineItems = loadedMonths.flatMap((month) => {
    const start = startOfMonth(month)
    const end = endOfMonth(month)
    return eachDayOfInterval({ start, end })
  })
  // Scroll event handler to load more months
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current
        const nearEnd = scrollLeft + clientWidth > scrollWidth - 500 // 500px before the end
        if (nearEnd) {
          loadMoreMonths()
        }
      }
      checkMonth()
    }

    timelineRef.current?.addEventListener('scroll', handleScroll)
    return () =>
      timelineRef.current?.removeEventListener('scroll', handleScroll)
  }, [])`}
            </code>
          </pre>
          <Separator className="w-full my-6" />
          <h3>TSX Elements</h3>
          <p className={cn("")}>
            Implementation of using framer motion for animating the timeline
          </p>
          <pre className={cn("w-full my-4 py-2 rounded-md bg-transparent")}>
            <code className="language-html overflow-x-scroll custom-scrollbar  border-[1px] w-full  px-2 pb-2 rounded-[7px] text-sm">
              {` <div className="relative  pl-6 ">
        <div ref={containerRef} className=" overflow-hidden w-full ">
          <motion.div
            ref={timelineRef}
            className="flex flex-col overflow-y-auto scrollbar-hide space-y-2 h-screen"
          >
            {timelineItems.map((date) => {
              const formattedDate = format(date, 'yyyy-MM-dd')

              const entry = data?.find((entry) => entry.day === formattedDate)

              return (
                <JournalTimelineItem
                  entry={entry}
                  key={date.toISOString()}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              )
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
            isDragging.current = true
          }}
          onDragEnd={() => {
            isDragging.current = false
          }}
        ></motion.div>
      </div>`}
            </code>
          </pre>
          <Separator className="w-full my-6" />
        </div>
      </EntryWrapper>
    </div>
  );
};

export default Page;
