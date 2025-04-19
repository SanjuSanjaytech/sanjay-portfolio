import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiMysql
} from "react-icons/si";

const frontendSkills = [
  { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
  { name: "Redux", icon: <SiRedux className="text-4xl text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
];

const backendSkills = [
  { name: "NodeJS", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-4xl text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-20 tracking-tight"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 flex flex-col justify-center text-center shadow-lg hover:shadow-cyan-500/20 transition-shadow"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Full Stack Developer</h3>
            <p className="text-gray-300 text-lg mb-4">
              I'm a passionate developer with real hands-on experience in building full-stack applications using the MERN stack and beyond.
            </p>
            <p className="text-gray-400 text-sm">
              From responsive UIs to robust backend systems, I’ve worked on multiple personal projects that challenged and improved my skills. 
              I love transforming ideas into real-world applications and continually learning new technologies along the way.
            </p>
          </motion.div>

          {/* Skills + Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-teal-500/20 rounded-2xl p-8 shadow-lg hover:shadow-teal-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">Tech Stack</h3>
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative">
                <div>
                  <p className="text-white text-lg font-medium mb-4">Frontend</p>
                  <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
                    {frontendSkills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex flex-col items-center"
                      >
                        {skill.icon}
                        <span className="text-gray-300 text-sm mt-2">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 to-cyan-500/50 hidden lg:block"
                />
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  className="border-t border-teal-500/50 my-6 lg:hidden"
                />
                <div>
                  <p className="text-white text-lg font-medium mb-4">Backend</p>
                  <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
                    {backendSkills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex flex-col items-center"
                      >
                        {skill.icon}
                        <span className="text-gray-300 text-sm mt-2">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Education</h3>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h4 className="text-white text-lg font-bold">B.Tech in Computer Science</h4>
                    <p className="text-gray-400 text-sm">KLR College of Engineering and Technology (2021 - 2024)</p>
                    <p className="text-gray-500 text-sm">Specialized in Web Development, Databases, and Computing</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <div className="text-3xl">🛠️</div>
                  <div>
                    <h4 className="text-white text-lg font-bold">Diploma in Mechanical Engineering</h4>
                    <p className="text-gray-400 text-sm">KLR College of Engineering and Technology (2018 - 2021)</p>
                    <p className="text-gray-500 text-sm">Focused on Engineering Basics, Workshops, and CAD</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;