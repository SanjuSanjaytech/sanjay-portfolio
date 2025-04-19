import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Sanjay_Resume from '../assets/Sanjay_Bangaru_Resume.pdf';

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Backend Developer', 'Frontend Developer'];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const fullText = roles[currentRole];
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Hey, I'm Sanjay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl mb-6 font-semibold text-white"
        >
          <span className="inline-block min-w-[200px] text-left">
            {displayedText}
            <span className="animate-blink">|</span>
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Building innovative web solutions with React, Node.js, and a passion for clean, scalable code.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          <SocialIcon icon={<FaLinkedin size={32} />} label="LinkedIn" url="https://www.linkedin.com/in/bangaru-sanjay-423b82303/" />
          <SocialIcon icon={<FaGithub size={32} />} label="GitHub" url="https://github.com/SanjuSanjaytech" />
          <SocialIcon icon={<FaEnvelope size={32} />} label="Email" url="mailto:sanjutech9959@gmail.com" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a
            href={Sanjay_Resume}
            download="Sanjay_Bangaru_Resume"
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-in-out rounded-xl group bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/40 backdrop-blur-lg"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative z-10 flex items-center gap-2 animate-pulse group-hover:animate-none">
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M6 18h12" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="border border-teal-500/50 text-teal-400 py-3 px-8 rounded-lg font-medium transition hover:bg-teal-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            Connect with Me
          </a>
        </motion.div>
      </div>

      {/* CSS styles */}
      <style>
        {`
          .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(34, 197, 94, 0.3);
            border-radius: 50%;
            animation: float 10s infinite linear;
          }
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100vh) scale(0.5);
              opacity: 0;
            }
          }
          .animate-blink {
            animation: blink 0.5s step-end infinite;
          }
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

const SocialIcon = ({ icon, label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-teal-400 hover:text-teal-300 transition relative group"
  >
    <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>{icon}</motion.div>
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
      {label}
    </span>
  </a>
);

export default Home;
