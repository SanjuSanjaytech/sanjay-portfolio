import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/sign.webp";
import mernAuthImg from "../assets/mern.webp";
import reqres from "../assets/reqres.png";
import task from '../assets/task.png'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [
  {
    title: "Text to Sign Language Conversion",
    image: image,
    description:
      "This academic project demonstrates a Text to Sign Language Conversion web application developed using HTML, CSS, JavaScript, and Bootstrap. It allows users to input text, which is then represented visually using sign language-related animations or images.",
    techStack: [
      { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-3xl text-yellow-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-3xl text-purple-600" /> },
    ],
  },
  {
    title: "User Authentication App",
    image: mernAuthImg,
    description:
      "I built a secure MERN (MongoDB, Express, React, Node.js) User Authentication App with login, signup, and protected routes. It uses JWT for authentication, bcrypt for password hashing, and Mongoose for database interaction. The app is deployed on Render, ensuring a smooth, responsive experience while showcasing my skills in backend API development and full-stack deployment.",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-3xl text-gray-300" /> },
      { name: "React", icon: <FaReact className="text-3xl text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
    ],
    liveLink: "https://mern-authentication-at5b.onrender.com/profile",
    repoLink: "https://github.com/SanjuSanjaytech/MERN-Authentication",
  },
  {
    title: "Task Manager",
    image: task,
    description:
      "A full-stack Task Management System built with the MERN stack and Next.js. Features include user authentication, task creation, assignment, and status tracking. JWT and bcrypt are used for secure login, with the frontend deployed on Vercel and the backend on Render.",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-3xl text-gray-300" /> },
      { name: "Next.js", icon: <FaReact className="text-3xl text-black" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
    ],
    liveLink: "https://task-management-system-wpgn.vercel.app/login",
    repoLink: "https://github.com/SanjuSanjaytech/Task-Management-System",
  },
  {
    title: "User Management",
    image: reqres,
    description:
      "This project is a React-based user management system that interacts with the Reqres API to handle user authentication and CRUD operations.",
    techStack: [
      { name: "React", icon: <FaReact className="text-3xl text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-3xl text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
    ],
    repoLink: "https://github.com/SanjuSanjaytech/req-Auth",
  },
  
  
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (index) => {
    setSelectedProject(projects[index]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-extrabold text-center p-2 bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-12 tracking-tight"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(34,197,94,0.3)",
              }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-700/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-68 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="font-bold text-xl mt-4 mb-2 text-white">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {project.techStack.map((tech, key) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.2 }}
                    className="flex flex-col items-center"
                  >
                    {tech.icon}
                    <span className="text-gray-400 text-xs mt-1">
                      {tech.name}
                    </span>
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
                    <span>🌐 Live</span>
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
                    <span>🔗 Repo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-200 text-sm mb-4">
              {selectedProject.description}
            </p>
            <div className="flex gap-4 mb-4">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-400 hover:text-teal-300 transition"
                >
                  🌐 Live
                </a>
              )}
              {selectedProject.repoLink && (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  🔗 Repo
                </a>
              )}
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
