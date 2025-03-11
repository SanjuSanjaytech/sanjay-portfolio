import React from "react";
import { X } from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Overlay (clicking it closes the menu) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-transparent backdrop:blur-lg  p-6 transform transition-transform duration-300 ease-in-out z-50 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white cursor-pointer"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-6 mt-12 py-30 items-center justify-center ">
          {["Home", "About", "Project", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors flex flex-col items-center "
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
