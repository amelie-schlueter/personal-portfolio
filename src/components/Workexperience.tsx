import { format } from "date-fns";
import React from "react";
import { Badge } from "./ui/badge";
import { WorkType } from "@/lib/types";

const Workexperience = ({ work }: { work: WorkType }) => {
  return (
    <div>
      <div className="flex items-center w-full md:col-start-1">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col ">
            <h4 className="font-medium m-0">{work.title}</h4>
            <p className="text-muted-foreground "> {work.company}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground ">
            {format(work.startingDate, "MM / yyyy")} -{" "}
            {work.endDate ? (
              format(work.endDate, "MMM yyyy")
            ) : (
              <Badge className="ml-1" variant={"green"}>
                Present
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workexperience;
