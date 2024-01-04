import React from "react";
import { Badge } from "./ui/badge";
import { Dot } from "lucide-react";

const LifeAdventureItem = ({
  value,
  checked,
  inProgress,
}: {
  value: string;
  checked: boolean;
  inProgress?: boolean;
}) => {
  return (
    <div className="pb-1 flex items-center  justify-start ">
      {inProgress && <div className="bg-blue-500 h-1 w-1 mr-2 rounded-full" />}
      <p
        className={`${checked && "line-through text-muted-foreground"} ${
          inProgress && "text-blue-500"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default LifeAdventureItem;
