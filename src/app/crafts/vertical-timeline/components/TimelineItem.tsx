import { format, set } from "date-fns";

import React, { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
interface Props {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  date: Date;
  orientation: string;
}

const TimelineItem = ({
  date,
  selectedDate,
  setSelectedDate,
  orientation,
}: Props) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const router = useRouter();

  const onClickHandler = () => {};

  useEffect(() => {
    if (format(selectedDate, "dd-MM-yyyy") === format(date, "dd-MM-yyyy")) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedDate, date]);

  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={0.1}>
          <TooltipTrigger asChild>
            <div
              className={`cursor-pointer h-fit flex ${
                orientation === "vertical" ? "flex-row" : "flex-col"
              } items-center gap-4  w-full relative hover:bg-primary/10 justify-start flex-shrink-0${
                isSelected &&
                "border-[1px] border-blue-500 bg-muted-foreground/10"
              } w-fit px-3 py-2 rounded-md`}
            >
              <div
                className=" w-6 flex flex-col items-center justify-center"
                onClick={() => {
                  setSelectedDate(date);
                  onClickHandler();
                }}
              >
                <p className="text-xs text-muted-foreground ">
                  {format(date, "EE")}
                </p>
                <p className="">{format(date, "dd")}</p>
                {/* {<Dot className="w-6 h-6 absolute top-10" />} */}
              </div>
              <div className="">
                <p className="text-sm text-accent-foreground font-medium">
                  {format(date, "dd.MMM yyyy")}
                </p>
                <p className="text-sm text-muted-foreground">Open Daily note</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{format(date, "EE, dd.MMM yyyy")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TimelineItem;
