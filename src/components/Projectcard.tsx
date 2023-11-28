import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ProjectType } from "@/app/utils/types";
import { describe } from "node:test";
import { format } from "date-fns";
import Link from "next/link";

const Projectcard = ({ project }: { project: ProjectType }) => {
  return (
    <Link className="col-start-2 mb-24 " href={`work/${project.slug}`}>
      <div className="flex flex-col gap-6 item-center justify-between w-full ">
        <div className="w-full flex flex-col gap-2 max-w-sm">
          <h3 className="text-xl font-medium">{project.title}</h3>
          <p className="text-muted-foreground text-sm  w-full">
            {project.description}
          </p>
        </div>

        {/*Badges*/}
        <div className="flex item-center gap-3">
          {/*Tags*/}
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <Badge variant={"green"} key={tag}>
                {tag}
              </Badge>
            ))}
          </div>

          {/*Time*/}
          <div>
            <Badge variant={"outline"}>{format(project.year, "yyyy")}</Badge>
          </div>
        </div>
        {/*Image*/}
      </div>
      {/*Image*/}
      <div className="mt-10">
        <Image
          src={project.image}
          className="rounded-lg"
          width={2605}
          height={1618}
          alt="premium-room-design-cover-image"
        ></Image>
      </div>
    </Link>
  );
};

export default Projectcard;
