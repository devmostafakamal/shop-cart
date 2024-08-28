import React from "react";
import { motion } from "framer";
export default function Test() {
  return (
    <div className="coursor">
      <motion.div
        className="box"
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
}
