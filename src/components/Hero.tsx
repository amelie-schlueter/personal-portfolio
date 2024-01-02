import React from "react";
import { Button } from "./ui/button";

const Hero = ({
  title,
  description,
  description2,
  button,
}: {
  title: string;
  description: string;
  description2?: string;
  button?: string;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-muted-foreground ">{description}</p>

        {description2 && <p className="">{description2}</p>}

        {button && (
          <div>
            <Button>{button}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
