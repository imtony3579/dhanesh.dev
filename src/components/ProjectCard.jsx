import { motion } from "framer-motion";
import React, { useState } from "react";


export default function ProjectCard({ title, description, technologies, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3 }
      }}
      className="project-card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {technologies && (
        <div className="tech-stack">
          <small><strong>Technologies:</strong> {technologies}</small>
        </div>
      )}
    </motion.div>
  );
}