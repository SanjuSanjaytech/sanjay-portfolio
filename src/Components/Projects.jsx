import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/sign.webp';
import mernAuthImg from '../assets/mern.webp';
import reqres from '../assets/reqres.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const projects = [
  {
    title: 'Text to Sign Language Conversion',
    image: image,
    description:
      'This academic project demonstrates a Text to Sign Language Conversion web application developed using HTML, CSS, JavaScript, and Bootstrap. It allows users to input text, which is then represented visually using sign language-related animations or images.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'MERN Authentication App',
    image: mernAuthImg,
    description:
      'I built a secure MERN (MongoDB, Express, React, Node.js) Authentication App with login, signup, and protected routes. It uses JWT for authentication, bcrypt for password hashing, and Mongoose for database interaction. The app is deployed on Render, ensuring a smooth, responsive experience while showcasing my skills in backend API development and full-stack deployment.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'bcrypt', 'REST API', 'Render', 'Tailwind CSS'],
    liveLink: 'https://mern-authentication-at5b.onrender.com/profile',
    repoLink: 'https://github.com/SanjuSanjaytech/MERN-Authentication',
  },
  {
    title: 'User Management',
    image: reqres,
    description:
      'This project is a React-based user management system that interacts with the Reqres API to handle user authentication and CRUD operations.',
    techStack: ['React.js', 'Redux', 'Tailwind CSS', 'Responsive Design', 'Rest API', 'API Integration', 'React Hooks', 'Error Handling'],
    repoLink: 'https://github.com/SanjuSanjaytech/req-Auth',
  },
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggle = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent'
        >
          Projects
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition relative'
              onClick={() => handleToggle(index)}
            >
              <h3 className='font-bold text-xl mb-2'>{project.title}</h3>
              <div className='relative group overflow-hidden rounded-lg shadow-lg border border-gray-300'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105'
                />

                {/* Overlay for mobile and hover on desktop */}
                <div
                  className={`absolute inset-0 bg-black/80 text-gray-300 text-sm text-center flex items-center justify-center px-4 transition-opacity duration-300 ${openProject === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <p>{project.description}</p>
                </div>
              </div>

              {/* Links */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-green-400 hover:underline mt-3'
                >
                  🌐 Live Site
                </a>
              )}

              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-blue-400 hover:underline mt-3 ml-3'
                >
                  🔗 GitHub Repo
                </a>
              )}

              {/* Tech Stack */}
              <div className='space-x-2 space-y-2 mt-4 flex flex-wrap'>
                {project.techStack.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-white py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
