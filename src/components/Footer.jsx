import { motion } from "framer-motion";
import React, { useState } from "react";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="footer"
    >
      <div className="footer-content">
        <motion.div 
          className="footer-left"
          whileHover={{ scale: 1.02 }}
        >
          <p className="copyright">
            © {currentYear} Dhaneshkumar Prajapati. All rights reserved.
          </p>
          <p className="footer-subtitle">
            Built with React & ❤️ • Inspired by code editors
          </p>
        </motion.div>
        
        <motion.div 
          className="footer-right"
          whileHover={{ scale: 1.05 }}
        >
          <div className="footer-links">
            <motion.a
              href="https://github.com/imtony3579"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#A6E22E" }}
              className="footer-link"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/erdhanesh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#66D9EF" }}
              className="footer-link"
            >
              LinkedIn
            </motion.a>
             <motion.a
              href="mailto:dhaneshkumar15.prajapati@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#ef6666ff" }}
              className="footer-link"
            >
              Gmail
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Code Editor Style Footer Bar */}
      <div className="footer-status-bar">
        <span className="status-item">
          <span className="status-dot green"></span>
          Portfolio • Live
        </span>
        <span className="status-item">
          React • JavaScript • CSS
        </span>
        <span className="status-item">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' })}
        </span>
      </div>
    </motion.footer>
  );
}
