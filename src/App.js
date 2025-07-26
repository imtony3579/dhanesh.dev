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

function ProjectCard({ title, description, technologies, delay = 0 }) {
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
      whileHover={{ x: 10, color: "#27e1c1" }}
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
          Dhaneshkumar Prajapati
        </motion.h1>
        <ul>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#about">About</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#experience">Experience</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#skills">Skills</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#projects">Projects</motion.a></li>
          <li><motion.a whileHover={{ scale: 1.1 }} href="#education">Education</motion.a></li>
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
      </Section>

      {/* About Section */}
      <Section id="about">
        <h2>About Me</h2>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm a passionate Software Developer and Machine Learning Engineer with 4+ years of experience 
        building <strong>AI-powered applications</strong> and <strong>mobile solutions</strong>. I specialize in creating 
        smart software that can learn from data and make predictions, helping businesses solve real-world 
        problems efficiently. I've developed several <strong>mobile apps using Flutter</strong> and am currently 
        working on setting up <strong>real-time communication features using WebSocket technology with Django</strong> 
        to enable instant messaging and live updates in web applications.
      </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          As a former graduate researcher at <strong>IIT Bombay</strong>, I developed numerical solvers for aerospace 
          engineering problems using Python and C++, and worked on cutting-edge aerodynamic projects 
          including designing unique spike geometries to reduce drag in hypersonic flow regimes through 
          experimental and numerical simulation approaches. This research background gives me a strong 
          foundation in <strong>computational mathematics</strong> and <strong>physics-based modeling</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Currently at <strong>Lymphomap Inc.</strong>, I've engineered AI/ML solutions achieving 98.7% accuracy for 
          medical diagnosis, built scalable full-stack applications, and optimized cloud infrastructure 
          to reduce costs by 30%. I bridge the gap between theoretical machine learning concepts and 
          practical software engineering, creating solutions that are both mathematically robust and 
          commercially viable.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Beyond coding, I'm a <strong>passionate cook</strong> who enjoys experimenting with different cuisines and 
          recipes from around the world. I'm also dedicated to <strong>bodybuilding</strong> and am a regular at the 
          gym, believing that physical fitness enhances mental clarity and problem-solving abilities. 
          This balance between technical expertise and personal wellness drives my approach to both 
          life and software development.
        </motion.p>
      </Section>



      {/* Experience Section */}
      <Section id="experience">
        <h2>Work Experience</h2>
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
      </Section>

      {/* Skills Section */}
      <Section id="skills">
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
              <SkillItem delay={0.5}>CI/CD Pipelines</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <SkillItem delay={0.1}>Django & Django Channels</SkillItem>
              <SkillItem delay={0.2}>Flutter & Dart</SkillItem>
              <SkillItem delay={0.3}>Scikit-learn & Pandas</SkillItem>
              <SkillItem delay={0.4}>Celery</SkillItem>
              <SkillItem delay={0.5}>Firebase</SkillItem>
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
      </Section>

      {/* Projects Section */}
      <Section id="projects">
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
      </Section>

      {/* Education Section */}
      <Section id="education">
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
            <p><strong>CGPA:</strong> 9.01/10</p>
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
            <p><strong>CGPA:</strong> 64.9%</p>
            <p>GATE 2017: 99.03 percentile (AIR 43) in Aerospace Engineering</p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
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
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            🐱 GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/erdhanesh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#27e1c1" }}
            whileTap={{ scale: 0.95 }}
            className="contact-link"
          >
            💼 LinkedIn
          </motion.a>
        </div>
      </Section>
    </div>
  );
}

export default App;
