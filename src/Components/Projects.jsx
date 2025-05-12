import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiRedux, SiNextdotjs } from "react-icons/si";

// Assets
import image from "../assets/sign.webp";
import mernAuthImg from "../assets/mern.webp";
import reqres from "../assets/reqres.png";
import task from '../assets/task.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15,
    }
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15,
    }
  },
  exit: { opacity: 0, scale: 0.8 }
};

// Projects data
const projects = [
  {
    title: "Text to Sign Language Conversion",
    image: image,
    description:
      "A web app that converts text to visual sign language animations using HTML, CSS, JavaScript, and Bootstrap. Designed as an accessibility tool for the hearing impaired.",
    techStack: [
      { name: "HTML", icon: <FaHtml5 />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 75 },
    ],
  },
  {
    title: "User Authentication App",
    image: mernAuthImg,
    description:
      "Secure MERN stack authentication system with JWT, bcrypt password hashing, and protected routes. Features login, signup, and profile management with MongoDB backend.",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 80 },
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
    ],
    liveLink: "https://mern-authentication-at5b.onrender.com/profile",
    repoLink: "https://github.com/SanjuSanjaytech/MERN-Authentication",
  },
  {
    title: "Task Manager",
    image: task,
    description:
      "Full-stack task management system with Next.js, MongoDB, and JWT authentication. Features task creation, assignment, status tracking, and responsive design.",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 80 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
    ],
    liveLink: "https://task-management-system-puce-psi.vercel.app/intro",
    repoLink: "https://github.com/SanjuSanjaytech/Task-Management-System",
  },
  {
    title: "User Management",
    image: reqres,
    description:
      "React-based user management dashboard integrating with the Reqres API. Features CRUD operations, Redux state management, and responsive UI with Tailwind CSS.",
    techStack: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Redux", icon: <SiRedux />, level: 70 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
    ],
    repoLink: "https://github.com/SanjuSanjaytech/req-Auth",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (index) => setSelectedProject(projects[index]);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects. Click on any card to learn more.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <div 
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 h-full flex flex-col cursor-pointer shadow-lg hover:shadow-teal-500/20 transition-all"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.techStack.slice(0, 4).map((tech, key) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full"
                      >
                        <span className="text-lg" style={{ color: getTechColor(tech.name) }}>
                          {tech.icon}
                        </span>
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal-400 hover:text-teal-300 transition flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>🌐 Live Demo</span>
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>🔗 View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-gray-900/80 text-white rounded-full p-2 hover:bg-gray-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span style={{ color: getTechColor(tech.name) }}>
                              {tech.icon}
                            </span>
                            <span className="text-gray-300">{tech.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${tech.level}%`,
                              background: getTechColor(tech.name)
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveLink && (
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-center transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Live Demo
                    </motion.a>
                  )}
                  {selectedProject.repoLink && (
                    <motion.a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Helper function for tech colors
const getTechColor = (techName) => {
  const colors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    Bootstrap: "#7952B3",
    MongoDB: "#47A248",
    Express: "#000000",
    React: "#61DAFB",
    "Node.js": "#339933",
    "Tailwind CSS": "#06B6D4",
    Redux: "#764ABC",
    "Next.js": "#000000"
  };
  return colors[techName] || "#FFFFFF";
};

export default Projects;