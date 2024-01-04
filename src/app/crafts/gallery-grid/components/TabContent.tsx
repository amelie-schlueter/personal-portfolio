import React, { PropsWithChildren } from "react";
interface Props {
  tabId: string;
  children: React.ReactNode;
  activeTab: string;
}

const TabContent = ({ tabId, children, activeTab }: Props) => {
  return (
    <div className="w-full">
      {activeTab === tabId && <div className="text-sm w-full">{children}</div>}
    </div>
  );
};

export default TabContent;
