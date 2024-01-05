import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Github, Loader2 } from "lucide-react";
import Confetti from "./Confetti";

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);
    setIsVisible(false);
  };
  return (
    <div className="flex items-center shadow-lg justify-center relative">
      {isVisible && <Confetti />}
      <div className="border-[1px]  w-fit h-fit rounded-lg px-6   py-6 bg-background/60">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={"/stacksdo/logo-neg.png"}
            width={24}
            height={24}
            alt="logo"
          ></Image>
          <h3 className="text-foreground text-md font-medium">
            Welcome to Stackdo!
          </h3>
          <p className="text-muted-foreground text-xs text-center">
            Use Github to create an account or log in
          </p>
        </div>
        <div className="mt-6">
          <div className="flex justify-center gap-2 relative">
            <Button
              type="button"
              size="sm"
              className="w-full  gap-1 text-xs hover:scale-105 transform transition-all duration-200 ease-in-out"
              variant={"default"}
              onClick={handler}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" width={16}></Loader2>
              ) : (
                <Github width={16}></Github>
              )}
              Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;
