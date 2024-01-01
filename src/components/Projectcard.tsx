"use client";
import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ProjectType } from "@/app/utils/types";
import { describe } from "node:test";
import { format } from "date-fns";
import Link from "next/link";
import { useTheme } from "next-themes";

const Projectcard = ({ project }: { project: ProjectType }) => {
  const { resolvedTheme: theme } = useTheme();
  return (
    <Link className="col-start-2 " href={`work/${project.slug}`}>
      <div className="flex flex-col gap-6 item-center justify-between w-full ">
        <div className="w-full flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <Badge variant={"outline"}>{format(project.year, "yyyy")}</Badge>
          </div>
          <p className="text-muted-foreground  text-sm  w-full">
            {project.description}
          </p>
        </div>

        {/*Image*/}
      </div>
      {/*Image*/}
      <div className="mt-8 p-10 bg-muted rounded-md">
        <Image
          src={
            theme === "dark" ? project.imageDarkmode : project.imageLightmode
          }
          className="rounded-lg shadow-lg"
          width={2605}
          height={1618}
          alt="premium-room-design-cover-image"
        ></Image>
      </div>
    </Link>
  );
};

export default Projectcard;
