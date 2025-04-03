import React, { useState } from 'react'
import { LoadingScreen } from './Components/LoadingScreen'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Copyrights from './Components/Copyrights'
import Certificates from './Components/Certificates'

const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Certificates/>
        <Contact />
        <Copyrights />
      </div>
    </>
    
  )
}

export default App