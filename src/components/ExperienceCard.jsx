import React, { useState } from "react";
import { motion } from "framer-motion";



export default function ExperienceCard({ company, role, duration, achievements, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="experience-card"
    >
      <h3>{role}</h3>
      <h4>{company}</h4>
      <p className="duration">{duration}</p>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
}
