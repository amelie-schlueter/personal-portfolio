import { Layout } from "lucide-react";
import React from "react";
interface Props {
  title: string;
  icon: React.ReactNode;
}

const Title = ({ title, icon }: Props) => {
  return (
    <div className=" h-fit md:mb-6 md:border-t py-2">
      <div className="flex gap-2 items-center text-muted-foreground">
        {icon && icon}
        <h3 className="text-md font-medium md:max-w-[200px]">{title}</h3>
      </div>
    </div>
  );
};

export default Title;
