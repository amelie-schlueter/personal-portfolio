import { format } from "date-fns";
import Link from "next/link";
import React from "react";

interface Props {
  date: string;
  work: string;
  github?: string;
  live?: string;
}

const ProjectDetails = ({ date, work, github, live }: Props) => {
  return (
    <div className="max-w-[300px] my-24">
      <p className="text-base text-muted-foreground">Project Details</p>

      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Date</p>
        <p className="text-base">{date}</p>
      </div>
      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Work</p>
        <div>
          <p className="text-base">{work}</p>
        </div>
      </div>
      {live && (
        <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
          <p className="text-base">Live side</p>
          <div>
            <Link href={"/"} className="text-base underline">
              {live}
            </Link>
          </div>
        </div>
      )}
      {github && (
        <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
          <p className="text-base">Github</p>
          <div>
            <Link href={github} className="text-base underline">
              Github
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
