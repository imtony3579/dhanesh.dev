import React, { useState } from "react";
import { motion } from "framer-motion";
import CodeSection from "./components/CodeSection";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/components.css";
import "./styles/footer.css";

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

function ProjectCard({ title, description, technologies, delay = 0 }) {
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

function SkillItem({ children, delay = 0 }) {
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

function ExperienceCard({ company, role, duration, achievements, delay = 0 }) {
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


function Footer() {
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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          whileHover={{ scale: 1.05, color: "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          Dhaneshkumar Prajapati
        </motion.h1>
        
        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <li><motion.a whileHover={{ scale: 1.1 }} href="#about">About</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#experience">Experience</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#skills">Skills</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#projects">Projects</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#education">Education</motion.a></li>
          {/* <li><motion.a whileHover={{ scale: 1.1 }} href="#contact">Contact</motion.a></li> */}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
        </motion.button>

        {/* Mobile Navigation */}
        <motion.div
          className="mobile-nav"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            x: mobileMenuOpen ? '0%' : '100%' 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </motion.nav>

      {/* Hero Section */}
      <CodeSection id="hero">
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
            Software Developer
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            AI/ML • Full Stack • Mobile Development • DevOps
          </motion.p>
        </motion.div>
      </CodeSection>

      {/* About Section */}
      <CodeSection id="about">
        <h2>About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
       I'm a Software Developer and Machine Learning Engineer with over 
       <strong> 4 years</strong> of experience building smart applications 
       powered by AI and mobile solutions. I specialize in creating 
       software that can learn from data and make predictions, helping 
       businesses solve real-world problems more efficiently. 
       My background includes graduate research at <strong>IIT Bombay</strong>, 
       where I developed complex numerical tools for aerospace engineering, 
       giving me a strong foundation in <strong>computational mathematics</strong> and <strong>physics-based modeling</strong>. Currently, at <strong>Lymphomap Inc.</strong>, 
       I've engineered AI/ML solutions achieving <strong>98.7% accuracy </strong> 
       for medical diagnosis, built scalable full-stack applications, 
       and <strong>optimized cloud infrastructure to reduce costs by 30% </strong>. 
       I've also developed several mobile apps using Flutter 
       and am currently implementing real-time communication 
       features using WebSocket technology with Django for live updates. 
        </motion.p>
      </CodeSection>

      {/* Experience Section */}
      <CodeSection id="experience">
        <h2>Work Experience</h2>
        <div className="experience-grid">
          <ExperienceCard
            delay={0.1}
            role="Software Developer"
            company="Lymphomap Inc., Long Island City, NY"
            duration="Jan 2021 - Present (Remote)"
            achievements={[
              "Engineered a Leukemia diagnosis solution with 98.7% accuracy using R scripts and Python ML models",
              "Built user-friendly AI/ML pipeline enabling non-technical users to create automated analytics solutions",
              "Reduced AWS infrastructure costs by 30% through strategic optimization and auto-scaling policies",
              "Migrated production databases from PostgreSQL 10.23 to 16.1 with zero downtime using Blue-Green deployment",
              "Developed cross-platform Flutter apps released on Google Play and Apple App Store",
              "Optimized Django Channels WebSocket consumers for scalable real-time chat and video features"
            ]}
          />
          <ExperienceCard
            delay={0.3}
            role="Software Developer"
            company="Risk Latte Artificial Intelligence Inc., Montreal, Canada"
            duration="Mar 2020 - Mar 2021 (Remote)"
            achievements={[
              "Designed high-performance backend for Lbil.ai using Django and Daphne with real-time chat functionality",
              "Managed backend infrastructure and deployments for 5 production websites",
              "Implemented scalable REST APIs and WebSocket connections for real-time features"
            ]}
          />
        </div>
      </CodeSection>

      {/* Skills Section */}
      <CodeSection id="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <SkillItem delay={0.1}>Python</SkillItem>
              <SkillItem delay={0.2}>Dart/Flutter</SkillItem>
              <SkillItem delay={0.3}>C/C++</SkillItem>
              <SkillItem delay={0.4}>SQL</SkillItem>
              <SkillItem delay={0.5}>R-script</SkillItem>
              <SkillItem delay={0.6}>JavaScript</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <ul>
              <SkillItem delay={0.1}>AWS (EC2, S3, Lambda, RDS)</SkillItem>
              <SkillItem delay={0.2}>Docker</SkillItem>
              <SkillItem delay={0.3}>Nginx</SkillItem>
              <SkillItem delay={0.4}>Redis</SkillItem>
              <SkillItem delay={0.5}>Gunicorn & Daphne</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <SkillItem delay={0.1}>Django & Django Channels</SkillItem>
              <SkillItem delay={0.2}>Flutter & Dart</SkillItem>
              <SkillItem delay={0.3}>Scikit-learn & Pandas</SkillItem>
              <SkillItem delay={0.4}>Celery</SkillItem>
              <SkillItem delay={0.5}>REST API</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <SkillItem delay={0.1}>PostgreSQL</SkillItem>
              <SkillItem delay={0.2}>SQLite</SkillItem>
              <SkillItem delay={0.3}>Redis Cache</SkillItem>
            </ul>
          </div>
        </div>
      </CodeSection>

      {/* Projects Section */}
      <CodeSection id="projects">
        <h2>Featured Projects & Research</h2>
        <div className="projects-grid">
          <ProjectCard
            delay={0.1}
            title="Leukemia Diagnosis AI System"
            description="Engineered machine learning solution processing 22,283-gene microarray dataset with Logistic Vector Trees model achieving 98.7% accuracy for leukemia diagnosis."
            technologies="Python, R-script, Scikit-learn, Pandas, AWS"
          />
          <ProjectCard
            delay={0.3}
            title="AI/ML Pipeline Platform"
            description="Built user-friendly platform enabling end-users to upload tabular data for automated preprocessing, model creation, and evaluation without technical expertise."
            technologies="Python, Django, AWS Lambda, Machine Learning"
          />
          <ProjectCard
            delay={0.5}
            title="Cross-Platform Mobile Apps"
            description="Led complete app development lifecycle from UI/UX design to deployment, releasing high-quality apps on Google Play and Apple App Store."
            technologies="Flutter, Dart, Firebase, Provider, Dio, Secure Storage"
          />
          <ProjectCard
            delay={0.7}
            title="Real-time Chat & Video Platform"
            description="Developed scalable backend with Django Channels for group chat and video call features, optimized for asynchronous operations and high performance."
            technologies="Django Channels, WebSocket, Redis, PostgreSQL"
          />
        </div>
      </CodeSection>

      {/* Education Section */}
      <CodeSection id="education">
        <h2>Education</h2>
        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="education-card"
          >
            <h3>M.Tech in Aerospace Engineering</h3>
            <h4>IIT Bombay</h4>
            <p className="duration">Aug 2019</p>
            
            <p>Volunteered in organizing TEQIP-III workshop hosting 500+ faculty members from across India</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="education-card"
          >
            <h3>B.Tech Aeronautical Engineering</h3>
            <h4>The Aeronautical Society of India</h4>
            <p className="duration">Sep 2017</p>
            
            <p>GATE 2017: 99.03 percentile (AIR 43) in Aerospace Engineering</p>
          </motion.div>
        </div>
      </CodeSection>

      {/* Contact Section */}
      {/* <Section id="contact">
        <h2>Let's Connect</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always interested in discussing new opportunities and innovative projects!
        </motion.p>
        <div className="contact-links">
          <motion.a
            href="https://github.com/imtony3579"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            🐱 GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/erdhanesh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            💼 LinkedIn
          </motion.a>
           <motion.a
            href="mailto:dhaneshkumar15.prajapati@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            📧 Gmail
          </motion.a>
        </div>
      </Section> */}

       {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;