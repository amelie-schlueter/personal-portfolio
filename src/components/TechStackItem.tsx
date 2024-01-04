import React from "react";

const TechStackItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="text-muted-foreground grid grid-cols-2">
      <p className="text-muted-foreground">{title}</p>
      <p className="text-base text-foreground">{value}</p>
    </div>
  );
};

export default TechStackItem;
