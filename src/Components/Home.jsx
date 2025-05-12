import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import Sanjay_Resume from '../assets/Sanjay_Bangaru_Resume.pdf';

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Backend Engineer',
  'Frontend Wizard',
  'Problem Solver'
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const particlesRef = useRef(null);
  const controls = useAnimation();

  // Typing effect
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
        controls.start("glitch"); // Trigger glitch on role change
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole, controls]);

  // Particle interaction
  const handleMouseMove = (e) => {
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      const { clientX, clientY } = e;
      
      Array.from(particles).forEach((particle) => {
        const { left, top } = particle.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const distance = Math.sqrt(x * x + y * y);
        
        if (distance < 100) {
          const angle = Math.atan2(y, x);
          const force = (100 - distance) / 10;
          particle.style.transform = `translate(${Math.cos(angle) * force}px, ${Math.sin(angle) * force}px)`;
        } else {
          particle.style.transform = 'translate(0, 0)';
        }
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDB2NDBNMCAyMGg0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>

      {/* Interactive Particles */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Hey, I'm Sanjay
        </motion.h1>

        <motion.p
          variants={{
            glitch: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.3 } }
          }}
          animate={controls}
          className="text-2xl sm:text-3xl mb-6 font-semibold text-white h-12 flex items-center justify-center"
        >
          <span className="inline-block min-w-[250px] text-center">
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
          I build <span className="text-teal-400">scalable web apps</span> with React, Node.js, and a passion for clean code.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          <SocialIcon icon={<FaLinkedin size={24} />} label="LinkedIn" url="https://www.linkedin.com/in/bangaru-sanjay-423b82303/" />
          <SocialIcon icon={<FaGithub size={24} />} label="GitHub" url="https://github.com/SanjuSanjaytech" />
          <SocialIcon icon={<FaEnvelope size={24} />} label="Email" url="mailto:sanjutech9959@gmail.com" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={Sanjay_Resume}
            download="Sanjay_Bangaru_Resume.pdf"
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 ease-in-out rounded-xl group bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/40"
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -8, 0],
              transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
            }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            <span className="relative z-10 flex items-center gap-2">
              Download Resume <FaDownload className="w-4 h-4" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg font-medium border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Let's Collaborate
          </motion.a>
        </motion.div>
      </div>

      {/* CSS (Tailwind alternative for particles) */}
      <style jsx>{`
        .particle {
          transition: transform 0.2s ease-out;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

const SocialIcon = ({ icon, label, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-teal-400 hover:text-teal-300 transition relative group"
    whileHover={{ y: -5 }}
  >
    <div className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition">
      {icon}
    </div>
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {label}
    </span>
  </motion.a>
);

export default Home;