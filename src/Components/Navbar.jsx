import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(15,15,15,0.7)] backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Brand */}
        <a href="#home" className="text-2xl font-bold text-white font-mono tracking-wide">
          Sanjay
        </a>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="w-7 h-5 relative flex flex-col justify-between cursor-pointer">
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-sm relative group transition-colors duration-200"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
