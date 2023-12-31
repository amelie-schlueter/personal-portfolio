// @ts-nocheck
"use client";
import InlineNavbar from "@/components/InlineNavbar";
import { Separator } from "@/components/ui/separator";
import { craftsArr } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import hljs from "highlight.js";
import React from "react";

const Page = () => {
  const craft = craftsArr.find((craft) => craft.slug === "vertical-timeline");
  React.useEffect(() => {
    hljs.highlightAll();

    // check which mode is active
    const currentTheme = window.localStorage.getItem("theme") || "light";
    console.log(currentTheme);

    const syntaxHighlightingCSS =
      currentTheme === "dark"
        ? import("highlight.js/styles/github-dark.css")
        : import("highlight.js/styles/github.css")!;

    syntaxHighlightingCSS.then((module) => {
      module.default;
    });
  });
  return (
    <div className="container  h-full">
      {/* Navigation */}
      <div className="md:my-10">
        <>
          <div className="relative h-full lg:flex">
            <div className="mb-10  md:sticky py-4 md:top-0 h-full   bg-background xl:min-w-[450px] lg:min-w-[200px]">
              <InlineNavbar />
              <h1 className="text-lg font-semibold">{craft?.title}</h1>
              <p className="text-muted-foreground text-sm mt-2">
                {format(new Date(), "EE, dd MMM yyyy")}
              </p>
              {/* <TOC headings={headings} /> */}
            </div>

            <div className="w-full">
              <video
                className="w-full h-fit my-8 rounded-md sm:max-h-[300px] md:max-h-fit"
                src="/crafts/vertical-timeline/timeline_video.mp4"
                autoPlay
                playsInline
                loop
                muted
              />
              <h3 className="mt-8 scroll-m-20 text-md font-semibold  tracking-tight">
                Code
              </h3>
              <p className={cn("leading-7")}>
                Preparing the states and variables for the unlimited month
                scroll and the drag funtionality
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
              <h3 className="mt-8 scroll-m-20 text-md font-semibold  tracking-tight">
                Unlimited Month scroll
              </h3>
              <p className={cn("leading-7")}>
                Logic for unlimited month scroll
              </p>
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
              <h3 className="mt-8 scroll-m-20 text-md font-semibold  tracking-tight">
                TSX Elements
              </h3>
              <p className={cn("leading-7")}>
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
          </div>
        </>
      </div>
    </div>
  );
};

export default Page;