"use client";
import { format } from "date-fns";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import React, { useEffect } from "react";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";

interface Props {
  title: string;
  date: Date | string;
}

const EntryHeader = ({ title, date }: Props) => {
  const [copied, setCopied] = React.useState(false);

  const copyURLHandler = async () => {
    await navigator.clipboard.writeText(location.href);
    setCopied(true);
    toast.success(`Copied to clipboard successfully`);
  };

  return (
    <div className="h-fit w-full mb-4 ">
      <div className="flex items-start   justify-between w-full ">
        <div className=" w-full">
          <h1 className="text-md font-semibold max">{title}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {format(new Date(date), "EE, dd MMM yyyy")}
          </p>
        </div>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger
              className=" cursor-pointer rounded-full p-3 bg-muted flex items-center justify-center "
              onClick={copyURLHandler}
            >
              <Copy strokeWidth={1.5} className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className=" py-1.5 text-sm">
              <p className="text-sm">Copy URL </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default EntryHeader;
