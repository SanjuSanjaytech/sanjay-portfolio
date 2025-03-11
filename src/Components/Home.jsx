import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";  

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent leading-right'>
                Hi, I'm Sanjay
            </h1>

            <p className=' mx-auto text-2xl mb-3 max-w-lg font-3xl font-bold gradient-text bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent'>
                Full Stack Developer
            </p>
            <p className='text-center text-xl mb-3'>Crafting seamless web experiences with React and modern design.</p>
            <div className='flex flex-wrap gap-3 justify-center items-center mb-4 '>
                <a 
                href="https://www.linkedin.com/in/bangaru-sanjay-423b82303/" 
                target="_blank"     
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition duration-300"
                >
                    <FaLinkedin  size={24} />

                </a>

                <a 
                href="https://github.com/SanjuSanjaytech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition duration-300"
                >
                    <FaGithub size={24} />

                </a>
            </div>

            <div className='flex justify-center space-x-4'>
                <a href="/SanjayResume.pdf" download="SanjayResume.pdf" className='bg-blue-500 text-white py-3 px-8 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadoe-[0_0_15px_rgba(59, 130, 246, 0.4]) flex items-center justify-center'>
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-7 6h10"/>
                    </svg>
                </a>
                <a href="#contact" className='border border-blue-500/50 text-blue py-3 px-6 rounded fonr-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4]) hover:bg-blue-500/10'>
                    Connect with me
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home