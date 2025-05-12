import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skillsData = {
    frontend: [
      { name: "React", icon: <FaReact />, level: 90, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, level: 85, color: "#F7DF1E" },
      { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, level: 75, color: "#764ABC" },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "#339933" },
      { name: "Express", icon: <SiExpress />, level: 80, color: "#000000" },
      { name: "Python", icon: <FaPython />, level: 75, color: "#3776AB" },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "#336791" },
      { name: "MySQL", icon: <SiMysql />, level: 65, color: "#4479A1" },
    ],
  };

  const education = [
    {
      year: "2021 - 2024",
      degree: "B.Tech in Computer Science",
      institution: "KLR College of Engineering and Technology",
      description: "Specialized in Web Development, Databases, and Computing",
      icon: "🎓",
    },
    {
      year: "2018 - 2021",
      degree: "Diploma in Mechanical Engineering",
      institution: "KLR College of Engineering and Technology",
      description: "Focused on Engineering Basics, Workshops, and CAD",
      icon: "🛠️",
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      role: "Freelance Developer",
      company: "Self-Employed",
      description: "Building full-stack applications for clients using MERN stack",
      icon: "💻",
    },
    {
      year: "2024 - Present",
      role: "Open Source Contributor",
      company: "GitHub",
      description: "Contributed to various open-source JavaScript projects",
      icon: "👨‍💻",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Full-stack developer passionate about building efficient, scalable applications
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <div className="flex flex-col items-center text-center">
              {/* <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div> */}
              <h3 className="text-2xl font-bold text-white mb-2">Sanjay Bangaru</h3>
              <p className="text-cyan-400 mb-4">Full Stack Developer</p>
              <p className="text-gray-300 mb-6">
                I transform ideas into functional, beautiful applications with clean code and modern technologies.
              </p>
              <div className="w-full bg-gray-800/50 h-px my-4"></div>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-2xl text-cyan-400">3+</div>
                  <div className="text-xs text-gray-400">Years Learning</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl text-cyan-400">5+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl text-cyan-400">5+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex border-b border-gray-800"
            >
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-3 font-medium text-sm relative ${activeTab === "skills" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
              >
                Skills
                {activeTab === "skills" && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-3 font-medium text-sm relative ${activeTab === "education" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
              >
                Education
                {activeTab === "education" && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-3 font-medium text-sm relative ${activeTab === "experience" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
              >
                Experience
                {activeTab === "experience" && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}
              </button>
            </motion.div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {Object.entries(skillsData).map(([category, skills]) => (
                      <motion.div
                        key={category}
                        className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                            {category === "frontend" && <FaCode className="text-cyan-400 text-xl" />}
                            {category === "backend" && <FaServer className="text-blue-400 text-xl" />}
                            {category === "database" && <FaDatabase className="text-purple-400 text-xl" />}
                          </div>
                          <h3 className="font-bold text-white capitalize">
                            {category}
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {skills.map((skill) => (
                            <div key={skill.name} className="relative group">
                              <div
                                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors"
                                onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                              >
                                <div
                                  className="text-2xl"
                                  style={{ color: skill.color }}
                                >
                                  {skill.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-white">
                                      {skill.name}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-800 rounded-full h-1.5 mt-1">
                                    <div
                                      className="h-1.5 rounded-full"
                                      style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: skill.color,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              {expandedSkill === skill.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-2 pb-2 text-xs text-gray-400">
                                    {getSkillDescription(skill.name)}
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {(activeTab === "education" || activeTab === "experience") && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {(activeTab === "education" ? education : experience).map(
                      (item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 relative overflow-hidden"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                        <div className="flex gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <h4 className="font-bold text-white">
                                {item.degree || item.role}
                              </h4>
                              <span className="text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded-full">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-sm text-cyan-300 mb-1">
                              {item.institution || item.company}
                            </p>
                            <p className="text-sm text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function for skill descriptions
const getSkillDescription = (skillName) => {
  const descriptions = {
    React: "Built multiple SPA applications with React hooks and context API",
    TypeScript: "Used TypeScript in production apps for type safety",
    JavaScript: "5+ years experience with modern ES6+ JavaScript",
    HTML5: "Semantic HTML5 markup with accessibility best practices",
    CSS3: "Advanced CSS animations and responsive design",
    Tailwind: "Primary CSS framework for rapid UI development",
    Redux: "State management for complex React applications",
    "Node.js": "Built REST APIs and server-side applications",
    Express: "Created backend services and API endpoints",
    Python: "Scripting and basic backend development",
    MongoDB: "NoSQL database for flexible data structures",
    PostgreSQL: "Relational database for structured data",
    MySQL: "Traditional SQL database experience",
  };
  return descriptions[skillName] || `Experience with ${skillName}`;
};

export default About;