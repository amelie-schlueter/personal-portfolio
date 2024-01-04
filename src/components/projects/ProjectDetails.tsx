import Link from "next/link";
import React from "react";

const ProjectDetails = () => {
  return (
    <div className="max-w-[300px] my-24">
      <p className="text-base text-muted-foreground">Project Details</p>

      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Date</p>
        <p className="text-base">2023</p>
      </div>
      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Work</p>
        <div>
          <p className="text-base">Design</p>
          <p className="text-base">Development</p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Live side</p>
        <div>
          <Link href={"/"} className="text-base underline">
            stacksdo.com
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 items-start py-2 border-b justify-between w-full">
        <p className="text-base">Github</p>
        <div>
          <Link href={"/"} className="text-base underline">
            github repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
