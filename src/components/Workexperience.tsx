import { WorkType } from "@/app/utils/types";
import { format } from "date-fns";
import React from "react";
import { Badge } from "./ui/badge";

const Workexperience = ({ work }: { work: WorkType }) => {
  return (
    <div>
      <div className="flex items-center w-full md:col-start-1">
        <div className=" py-2 flex items-start justify-between w-full">
          <div className="flex flex-col  gap-">
            <h4 className="font-medium underline text-sm">{work.title}</h4>
            <p className="text-muted-foreground text-sm"> {work.company}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
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
      <p className="text-sm text-muted-foreground max-w-xs truncate">
        {work.description}
      </p>
    </div>
  );
};

export default Workexperience;
