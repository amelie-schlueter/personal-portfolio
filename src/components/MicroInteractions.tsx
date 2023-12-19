"use client";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { formatDuration } from "date-fns";

const MicroInteractions = () => {
  return (
    <motion.div
      className="rounded-md w-12 h-12 flex items-center justify-center cursor-pointer"
      whileHover={{ backgroundColor: "#f1f1f1" }}
    >
      <motion.p
        className="text-xl"
        whileHover={{ rotate: 20, transition: { duration: 0.1 } }}
      >
        📞
      </motion.p>
    </motion.div>
  );
};

export default MicroInteractions;
