"use client";
import { Calendar, MoreHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { motion, useInView } from "framer-motion";
interface Props {
  isInView: boolean;
}

const TaskMenuShowcase = () => {
  const [open, setOpen] = useState(false);

  // if esc is presseed close the menu

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      //   ref={ref}
      className="bg-background flex items-center min-w-[300px] justify-between px-4 py-2 rounded-md border-[1.5px] shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <Calendar width={14} className="text-muted-foreground" />
        <p className="text-sm">2023-12-01</p>
      </div>
      <DropdownMenu>
        {/* <DropdownMenuTrigger> */}
        <MoreHorizontal width={16} className="text-muted-foreground" />
        {/* </DropdownMenuTrigger> */}

        <DropdownMenuContent>
          <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
          <DropdownMenuItem className="text-xs">Duplicate</DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            Delete
            <DropdownMenuShortcut className="text-[9px]">
              ⌘⌫
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskMenuShowcase;
