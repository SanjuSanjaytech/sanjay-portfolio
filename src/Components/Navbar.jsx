import React, { useEffect } from 'react'
import Mobilemenu from './MobileMenu'

const Navbar = ({menuOpen, setMenuOpen}) => {


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);
  return (


    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
        <div className='max-w-7xl mx-auto px-2 flex justify-between items-center'>
            <div className='flex justify-between items-center h-16'>
                <a href="#home" className='font-mono text-xl font-bold'>Sanjay</a>
            </div>


            <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)}> 
                &#9776;
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a href="#home" className='text-gray-300 hover:text-white transition-colors relative after:block after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2'>Home</a>
                <a href="#about" className='text-gray-300 hover:text-white transition-colors relative after:block after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2'>About</a>
                <a href="#project" className='text-gray-300 hover:text-white transition-colors relative after:block after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2'>Project</a>
                <a href="#contact" className='text-gray-300 hover:text-white transition-colors relative after:block after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2'>Contact</a>
            </div>
        </div>

        <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  )
}

export default Navbar