import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function Section({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Your Name</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Section>
        <h2 id="about">About Me</h2>
        <p>Developer specializing in web apps, DevOps, and modern JavaScript stacks. I love building animated, interactive websites!</p>
      </Section>
      <Section>
        <h2 id="skills">Skills</h2>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>DevOps (Docker, CI/CD, Cloud)</li>
          <li>APIs, Databases, REST</li>
        </ul>
      </Section>
      <Section>
        <h2 id="projects">Projects</h2>
        <div className="project-card">
          <h3>URL Shortener</h3>
          <p>A personal project using DevOps best practices to build a scalable service.</p>
        </div>
        {/* Add more projects here */}
      </Section>
      <Section>
        <h2 id="contact">Contact</h2>
        <p>Email: your.email@example.com</p>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
      </Section>
    </div>
  );
}

export default App;
