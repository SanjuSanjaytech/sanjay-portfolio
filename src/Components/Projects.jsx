import React from 'react'
import image from '../assets/sign.webp'
import mernAuthImg from '../assets/mern.webp'


const Projects = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          {/* Project 1: Text to Sign Language */}
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='font-bold text-xl mb-2'>Text to Sign Language Conversion</h3>
            <div className='relative group overflow-hidden rounded-lg fhadow-lg border border-gray-300'>
              <img src={image} alt="sign" className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105' />
              <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <p className='text-gray-300 text-sm text-center p-4'>
                This academic project demonstrates a Text to Sign Language Conversion web application developed using HTML, CSS, JavaScript, and Bootstrap. It allows users to input text, which is then represented visually using sign language-related animations or images.The focus of this project was on creating a responsive, accessible, and user-friendly interface. It showcases frontend development skills like DOM manipulation, event handling, and cross-device responsiveness, while also aiming to raise awareness about inclusive design for the hearing-impaired community.
                </p>
              </div>
            </div>
            <div className='space-x-2 mt-5 flex flex-wrap'>
              {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-white py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2: MERN Authentication App */}
                    <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition'>
            <h3 className='font-bold text-xl mb-2'>MERN Authentication App</h3>

            <div className='relative group overflow-hidden rounded-lg border border-gray-300'>
                <img src={mernAuthImg} alt="mern auth project" className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105' />
                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4'>
                <p className='text-gray-300 text-sm text-center'>
                I built a secure MERN (MongoDB, Express, React, Node.js) Authentication App that supports full-stack login and signup functionality with protected routes. The app uses JWT tokens for authentication, bcrypt for password hashing, and Mongoose for seamless interaction with MongoDB Atlas. Users can register, log in, and access a personalized profile page. I also implemented frontend route protection and conditionally rendered components based on user authentication state.
                The project is deployed on Render and ensures a smooth, responsive user experience. This project showcases my skills in backend API development, React state management, secure authentication flows, and real-world full-stack deployment.
                </p>
                </div>
            </div>

            {/* 🔗 Links section */}
            <div className='mt-4 space-x-4 flex items-center'>
                <a
                href='https://mern-authentication-at5b.onrender.com/profile'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-sm text-green-400 hover:underline'
                >
                🌐 Live Site
                </a>

                <a
                href='https://github.com/SanjuSanjaytech/MERN-Authentication'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-sm text-blue-400 hover:underline'
                >
                🔗 GitHub Repo
                </a>
            </div>

            {/* Tech tags */}
            <div className='space-x-2 space-y-2 mt-4 flex flex-wrap'>
                {["MongoDB", "Express", "React", "Node.js", "JWT", "bcrypt", "REST API" , "Render", "Tailwind CSS"].map((tech, key) => (
                <span key={key} className='bg-green-500/10 text-white  py-1 px-6 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)] transition'>
                    {tech}
                </span>
                ))}
            </div>
            </div>


        </div>
      </div>
    </section>
  )
}

export default Projects
