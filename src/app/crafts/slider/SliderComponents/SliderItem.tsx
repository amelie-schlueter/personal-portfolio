import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  active: boolean;
}

const SliderItem = ({ value, active }: Props) => {
  return (
    <div
      className="flex flex-col items-start justify-start relative gap-2"
      id={`${value}_sliderItem`}
    >
      <p
        className={`ml-[-4px] text-sm ${
          active ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {value}
      </p>
      <div className="flex gap-[0.35rem] items-end">
        <div
          className={`w-[1px] h-5 ${
            active ? "bg-orange-500" : "bg-foreground"
          }`}
        ></div>
        <div
          className={`w-[1px] h-2 ${
            active ? "bg-orange-500" : "bg-muted-foreground"
          } opacity-60`}
        ></div>
        <div
          className={`w-[1px] h-2 ${
            active ? "bg-orange-500" : "bg-muted-foreground"
          } opacity-60`}
        ></div>
        <div
          className={`w-[1px] h-2 ${
            active ? "bg-orange-500" : "bg-muted-foreground"
          } opacity-60`}
        ></div>
        <div
          className={`w-[1px] h-2 ${
            active ? "bg-orange-500" : "bg-muted-foreground"
          } opacity-60`}
        ></div>
      </div>
    </div>
  );
};

export default SliderItem;
