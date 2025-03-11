import React from 'react'
import image from '../assets/sign.webp'

const Projects = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mx-auto px-4'>
         <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r  from-blue-500 to-green-400 bg-clip-text text-transparent">Projects</h2>
        
        <div className='grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-6'>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='font-bold text-xl mb-2'>Text to Sign Language Conversion</h3>
                
                               {/* Project Cads */}
                <div className='relative group overflow-hidden rounded-lg fhadow-lg border border-gray-300'>
                        <img src={image} alt="sign"  className='w-full h-auto object-cover trasition-transform duration-300 group-hover:scale-105'/>
                        <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                            <p className='text-gray-400 text-sm text-center'>
                            I developed a Text to Sign Language Conversion project using HTML, CSS, JavaScript, and Bootstrap to bridge the communication gap for the hearing-impaired community. This web-based application translates input text into corresponding sign language gestures, enabling seamless interaction. The project focuses on accessibility and user-friendly design, ensuring smooth animations and responsive performance across devices. Through this initiative, I aimed to enhance inclusivity and make sign language more accessible to a wider audience.
                            </p>
                        </div>
                             {/* Need to add more soon  */}
                </div>
                <div className='space-x-2 mt-5'>
                    {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, key) => (
                        <span key={key} className='bg-blue-500/10 text-white py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
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