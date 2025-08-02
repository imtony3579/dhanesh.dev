import { motion } from "framer-motion";
import React, { useState } from "react";



export default function SkillItem({ children, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10, color: "#ffffff" }}
      className="skill-item"
    >
      {children}
    </motion.li>
  );
}
