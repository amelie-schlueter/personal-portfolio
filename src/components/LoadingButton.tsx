import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [iconXPosition, setIconXPosition] = useState(0);

  const mockApiResponse = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, 2000);
    });
  };

  const handleClick = async () => {
    setIsLoading(true);
    const response = await mockApiResponse();
    console.log(response);
    setIsLoading(false);
  };

  const onTap = () => {
    // Toggle the x position between two values, e.g., 0 and 20
    const newPosition = iconXPosition === 0 ? 75 : 0;
    setIconXPosition(newPosition);
  };

  return (
    <motion.div
      onTap={onTap}
      className={cn(buttonVariants(), "cursor-pointer")}
      onClick={handleClick} // Assuming you want to trigger handleClick on the same action
    >
      <motion.div
        animate={{ x: iconXPosition }}
        initial={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.4, easing: "spring" }}
      >
        <ShoppingCart size={20} strokeWidth={1.5} />
      </motion.div>
      <motion.p
        initial={{ y: 0 }}
        animate={{ y: iconXPosition }}
        transition={{ duration: 0.2 }}
      >
        Save to cart
      </motion.p>
    </motion.div>
  );
};

export default LoadingButton;
