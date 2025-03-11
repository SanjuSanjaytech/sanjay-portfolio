import React from 'react'
import { ArrowUp } from "lucide-react";

const Copyrights = () => {

    const ScrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
  return (
    <div className='p-3 flex items-center justify-between border-t border-neutral-700 border-full '>
        <p className='text-center'>&copy; {new Date().getFullYear()} Sanjay. All Rights Reserved.</p>
        <button className='py-3 px-3 rounded bg-blue-900' onClick={ScrolltoTop} aria-label='Scroll to Top'>
           <ArrowUp size={24} />
        </button>
    </div>
    
    
  )
}

export default Copyrights