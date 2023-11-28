import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ImageGrid = () => {
  const imageRow1: string[] = [
    "/prd/image-grid/prd-image-grid-image-01.png",
    "/prd/image-grid/prd-image-grid-image-02.png",
    "/prd/image-grid/prd-image-grid-image-03.png",
    "/prd/image-grid/prd-image-grid-image-04.png",
  ];
  const imageRow2: string[] = [
    "/prd/image-grid/prd-image-grid-image-05.png",
    "/prd/image-grid/prd-image-grid-image-06.png",
    "/prd/image-grid/prd-image-grid-image-07.png",
    "/prd/image-grid/prd-image-grid-image-08.png",
  ];

  const { scrollYProgress } = useScroll();
  const row1 = useTransform(scrollYProgress, [0, 1], ["15%", "0%"]);
  const row2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);
  return (
    <div
      id="parallax-image-grid"
      className="flex flex-col gap-10   py-20 overflow-x-hidden"
    >
      <motion.div
        className="flex items-center gap-10 z-1 translate-x-[-75%]"
        style={{ x: row1 }}
      >
        {imageRow1.map((image) => (
          <Image
            src={image}
            height={1080}
            width={720}
            alt={image}
            key={image}
          ></Image>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center gap-10  translate-x-[-75%]"
        initial={{ x: "100%" }}
        style={{ x: row2 }}
      >
        {imageRow2.map((image) => (
          <Image
            src={image}
            height={1080}
            className="z-1"
            width={720}
            alt={image}
            key={image}
          ></Image>
        ))}
      </motion.div>
      <div className="h-screen"></div>
    </div>
  );
};

export default ImageGrid;
