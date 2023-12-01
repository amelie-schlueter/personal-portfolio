import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageGrid = () => {
  const imageRow1: string[] = [
    "/prd/image-grid/prd-image-grid-image-02.png",
    "/prd/image-grid/prd-image-grid-image-03.png",
    "/prd/image-grid/prd-image-grid-image-04.png",
    "/prd/image-grid/prd-image-grid-image-05.png",
    "/prd/image-grid/prd-image-grid-image-06.png",
    "/prd/image-grid/prd-image-grid-image-07.png",
    "/prd/image-grid/prd-image-grid-image-08.png",
  ];
  const imageRow2: string[] = [];

  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const carousel = useRef<any>();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log({ width });
  }, [xPosition]);

  const slideLeft = () => {
    setXPosition((prev) => prev + 500);
    console.log("slight left", "xPosition", xPosition);
  };
  const slideRight = () => {
    setXPosition((prev) => prev - 500);
    console.log("slight right", "xPosition", xPosition);

    // i want to set constraint
  };

  return (
    <>
      <motion.div
        ref={carousel}
        className="carusel cursor-grab  overflow-hidden w-full "
      >
        <motion.div
          className="inner-carusel flex  w-fit "
          drag="x"
          animate={{ x: xPosition }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          dragConstraints={{ right: 0, left: -width }}
        >
          {imageRow1.map((image) => (
            <motion.div
              className="item pointer-events-none w-full pl-6  min-w-[27rem] md:min-w-[32rem] lg:min-w-[45rem] "
              key={image}
            >
              <img
                src={image}
                alt={image}
                key={image}
                className="w-full h-full object-cover"
              ></img>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="container flex items-end justify-end mt-8">
        <div className="flex gap-6">
          <Button
            variant={"secondary"}
            className="h-12 w-12 p-2"
            onClick={slideLeft}
            disabled={xPosition === 0}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant={"secondary"}
            className="h-12 w-12 p-2"
            onClick={slideRight}
            disabled={xPosition < -width}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
