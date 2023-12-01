import { WorkType } from "@/app/utils/types";
import { format } from "date-fns";
import React from "react";

const Workexperience = ({ work }: { work: WorkType }) => {
  return (
    <div className="flex items-center w-full md:col-start-1">
      <div className=" py-2 flex items-center justify-between w-full">
        <div className="flex flex-col  gap-">
          <h4 className="font-medium">{work.title}</h4>
          <p className="text-muted-foreground text-sm"> {work.company}</p>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          {format(work.startingDate, "MMM yyyy")} -{" "}
          {work.endDate ? format(work.endDate, "MMM yyyy") : <p> Present</p>}
        </div>
      </div>
    </div>
  );
};

export default Workexperience;
