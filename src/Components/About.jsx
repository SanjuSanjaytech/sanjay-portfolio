import React from "react";
import { motion } from "framer-motion";

const frontendSkills = ["React", "HTML", "CSS", "Tailwind CSS", "Redux", "JS"];
const backendSkills = ["NodeJS", "ExpressJS", "MongoDB"];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent tracking-wide"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-lg p-8 flex flex-col justify-center"
          >
            <div className="text-6xl text-center mb-6 animate-pulse">👨‍💻</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Full Stack Web Developer
            </h3>
            <p className="text-gray-300 text-lg mb-3 text-center">
              I enjoy crafting full-stack applications that are responsive, efficient, and user-focused.
            </p>
            <p className="text-sm text-gray-400 text-center">
              I am passionate about solving real-world problems through technology and constantly upgrading my skills to stay current with evolving tech stacks.
            </p>
          </motion.div>

          {/* Right: Tech Stack + Education */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-lg p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center">Tech Stack</h3>
              <div className="mb-4">
                <p className="text-white mb-2 font-medium">Frontend:</p>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700/30 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white mb-2 font-medium">Backend:</p>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-600/20 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700/30 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-lg p-6"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold">B Tech in Computer Science</h4>
                  <p className="text-gray-400 text-sm">
                    KLR College of Engineering and Technology (2021 - 2024)
                  </p>
                  <p className="text-gray-500 text-sm">Web Development, Databases, Computing</p>
                </div>
                <div>
                  <h4 className="text-white font-bold">Diploma in Mechanical Engineering</h4>
                  <p className="text-gray-400 text-sm">
                    KLR College of Engineering and Technology (2018 - 2021)
                  </p>
                  <p className="text-gray-500 text-sm">Engineering Basics, Workshops, CAD</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
