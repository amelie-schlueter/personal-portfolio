"use client";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className=" flex items-center justify-center  md:min-h-[60vh] p container">
      <div className="min-w-[250px] w-full bg-muted rounded-md md:max-w-[500px] shadow-sm  md:h-full flex  pb-6 flex-col relative items-center justify-start">
        <div className="w-full flex items-center gap-1 py-4 px-4">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
        </div>

        <div className="py-6 px-4 flex flex-col gap-2 items-center justify-center h-full ">
          <p className="text-4xl">404</p>
          <p className="text-sm text-center">
            Ups.. looks like i could not find the page you are looking fore.
          </p>
          <Button
            variant={"outline"}
            className="mt-4"
            onClick={() => {
              router.push("/");
            }}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
