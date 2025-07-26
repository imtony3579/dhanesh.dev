import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="section"
    >
      {children}
    </motion.section>
  );
}

function ProjectCard({ title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 40px rgba(39,225,193, 0.3)",
        transition: { duration: 0.3 }
      }}
      className="project-card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

function SkillItem({ children, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10, color: "#27e1c1" }}
      className="skill-item"
    >
      {children}
    </motion.li>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="navbar"
      >
        <motion.h1 
          whileHover={{ scale: 1.05, color: "#27e1c1" }}
          transition={{ duration: 0.3 }}
        >
          Your Name
        </motion.h1>
        <ul>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#about">About</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#skills">Skills</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#projects">Projects</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#contact">Contact</motion.a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <Section id="hero">
        <motion.div 
          className="hero-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-title"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Building modern, animated web experiences
          </motion.p>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <h2>About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a passionate developer specializing in web applications, DevOps, and modern JavaScript stacks. 
          I love building animated, interactive websites that provide exceptional user experiences and solve real-world problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With expertise in both frontend and backend technologies, I enjoy the entire development process 
          from concept to deployment, always focusing on clean code and modern best practices.
        </motion.p>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <SkillItem delay={0.1}>JavaScript (ES6+)</SkillItem>
              <SkillItem delay={0.2}>React & React Hooks</SkillItem>
              <SkillItem delay={0.3}>HTML5 & CSS3</SkillItem>
              <SkillItem delay={0.4}>Responsive Design</SkillItem>
              <SkillItem delay={0.5}>Framer Motion</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend & DevOps</h3>
            <ul>
              <SkillItem delay={0.1}>Node.js & Express</SkillItem>
              <SkillItem delay={0.2}>RESTful APIs</SkillItem>
              <SkillItem delay={0.3}>Docker & Containerization</SkillItem>
              <SkillItem delay={0.4}>CI/CD Pipelines</SkillItem>
              <SkillItem delay={0.5}>Cloud Platforms (AWS/GCP)</SkillItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            delay={0.1}
            title="URL Shortener Service"
            description="A scalable URL shortening service built with Node.js, Express, and MongoDB. Features custom domains, analytics, and RESTful API with comprehensive DevOps pipeline."
          />
          <ProjectCard
            delay={0.3}
            title="Animated Portfolio Website"
            description="This responsive, animated portfolio website showcasing modern React development with Framer Motion animations and professional deployment practices."
          />
          <ProjectCard
            delay={0.5}
            title="Task Management Dashboard"
            description="Full-stack web application for project management with real-time updates, collaborative features, and intuitive drag-and-drop interface."
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <h2>Get In Touch</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's collaborate and build something amazing together!
        </motion.p>
        <div className="contact-links">
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            📧 Email
          </motion.a>
          <motion.a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            🐱 GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            💼 LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            🐦 Twitter
          </motion.a>
        </div>
      </Section>
    </div>
  );
}

export default App;
