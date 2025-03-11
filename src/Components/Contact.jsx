import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { SendHorizontal } from 'lucide-react';

const Contact = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })




    const handleSubmit = (e) => {
        e.preventDefault()


        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!")
            setformData({name: "", email:"", message: ""})

        })
        .catch(() => alert("Oops! Something Went Wrong. Please Try Again."))
    }
  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
        <div className='px-4 w-150 '>
            <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r  from-blue-500 to-green-400 bg-clip-text text-transparent'>Get In Touch</h2>
            <form action="" className='space-y-6' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input
                     type="text"
                     id='name'
                     name='name'
                     placeholder='Name..'
                     value={formData.name}
                     required 
                     onChange={(e) => setformData({...formData, name: e.target.value})}
                     className='w-full bg-transparent border-b-1 rounded px-4 py-3 text-white transition focus:outline-none  focus-border-blue-500 focus:bg-blue-500/10' 
                     />
                </div>
                <div className='relative'>
                    <input
                     type="email"
                     id='email'
                     name='email'
                     placeholder='Example@gmail.com'
                     value={formData.email}
                     required 
                     onChange={(e) => setformData({...formData, email: e.target.value})}
                     className='w-full bg-transparent border-b-1 rounded px-4 py-3 text-white transition focus:outline-none focus-border-blue-500 focus:bg-blue-500/10' 
                     />
                </div>
                <div className='relative'>
                    <textarea
                     id='message'
                     name='message'
                     rows={5}
                     placeholder='Your Message...'
                     value={formData.message}
                     required 
                     onChange={(e) => setformData({...formData, message: e.target.value})}
                     className='w-full bg-transparent border-b-1 rounded px-4 py-3 text-white transition focus:outline-none focus-border-blue-500 focus:bg-blue-500/10' 
                     />
                </div>

                <button type='submit' className='w-full bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-4'>
                    Send Message
                    <SendHorizontal />
                </button>
                
            </form>
        </div>
    </section>
  )
}

export default Contact