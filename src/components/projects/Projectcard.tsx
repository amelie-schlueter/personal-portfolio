"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

import { describe } from "node:test";
import { format } from "date-fns";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ProjectType } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

const Projectcard = ({ project }: { project: ProjectType }) => {
  const { resolvedTheme: theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="flex justify-between items-start   cursor-pointer"
      key={project.slug}
      href={`/work/${project.slug}`}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between  w-full">
          <div className={`w-full`}>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h3
                  className={`font-medium  mb-1 ${
                    isHovered ? "underline" : ""
                  }`}
                >
                  {project.title}
                </h3>
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </div>
              <p className=" text-muted-foreground">{project.description}</p>
            </div>
            <Image
              src={project.imageDarkmode}
              width={600}
              height={400}
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Projectcard;
