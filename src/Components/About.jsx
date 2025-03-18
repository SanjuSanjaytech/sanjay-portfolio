import React from 'react'

const frontendSkills = [
    "React", 
    "Html", 
    "CSS",
    "Tailwind Css",
    "Redux",
    "JS",
]
const backendSkills = [
    "NodeJS", 
    "ExpressJS", 
    "MangoDB",
]


const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center  py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-500 to-green-400 bg-clip-text text-transparent">About Me</h2>


            <div className='glass rounded-xl border-white/10 border p-4 hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6 '>Full Stack Developer passionate about building responsive, user-friendly applications with clean, efficient code.</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transiton-all border border-cyan-100 my-5'>
                    <h3 className='text-xl font-bold text-cyan-300 hover:text-cyan-100 cursor-pointer'>Frontend</h3>
                    <div className='flex flex-wrap items-centers justify-center gap-2 my-4'>
                        {frontendSkills.map((tech, key) => (
                            <span key={key} className='bg-blue-500/10 text-white py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                 {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='rounded-xl p-6 hover:-translate-y-1 transiton-all border border-cyan-100 my-5'>
                    <h3 className='text-xl font-bold text-cyan-300 hover:text-cyan-100 cursor-pointer'>Backend</h3>
                    <div className='flex flex-wrap items-center justify-center gap-2 my-4'>
                        {backendSkills.map((tech, key) => (
                            <span key={key} className='bg-blue-500/10 text-white py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                 {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className='mb-4 text-xl font-bold bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent mt-5'>Educational Journey</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                
                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all '>
                        <ul className='list-disc list-inside text-gray-300 space-y-2'>
                            <li>
                                <strong> B Tech in Computer Science</strong> - KLR College of Engineering and Technology
                                (2021-2024)
                            </li>
                            <li>
                               Relevant Coursework: Web Development, Database, Computing...
                            </li>
                        </ul>
                    </div>
                    <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all '>
                        <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>
                                    <strong> Diploma in Mechanical Engineering</strong> - KLR College of Engineering and Technology
                                    (2018-2021)
                                </li>
                                <li>
                                Relevant Coursework: Related to Mechnical Workshops...
                                </li>
                        </ul>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default About