import Image from "next/image";
import React from "react";

const JsLogo = () => {
  return (
    <Image
      src="/JS.png"
      width={28}
      height={28}
      alt="jslogo"
      className="rounded-[2px]"
    ></Image>
  );
};

export default JsLogo;
