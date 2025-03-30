import React from 'react';
import { motion } from 'framer-motion';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center space-y-8 text-xl z-40"
    >
      {['Home', 'About', 'Project', 'Certificates', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={handleLinkClick}
          className="hover:text-indigo-400 transition duration-300"
        >
          {item}
        </a>
      ))}
    </motion.div>
  );
};

export default MobileMenu;
