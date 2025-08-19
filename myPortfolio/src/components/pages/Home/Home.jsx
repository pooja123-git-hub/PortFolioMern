import React from 'react'
import { useTheme } from '../../../context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from 'framer-motion';

import Typewriter from 'typewriter-effect';
import './home.css';
import resume from '../../../assets/Docs/POOJA_Resume_244024.pdf'
const Home = () => {
  const [theme,setTheme]=useTheme();
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==="light"?'dark':'light')
    )
  }
  return (
    <>
   <div className="container-fluid home-container" id='home'>
    <div className="theme-btn" onClick={handleTheme}>

      {theme ==="light" ? (<BsFillMoonStarsFill size={30} />):(<BsFillSunFill size={30}/>)}
    </div>
    <div className="container home-content">
        <h2>Hi 😊 I'm Pooja Dwivedi</h2>
        <h1><Typewriter
  options={{
    strings: [' Full Stack Developer', 'MERN Stack Developer!'],
    autoStart: true,
    loop: true,
  }}
 />
  </h1>
<motion.div
  className="home-buttons"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8168294388' rel='noreferrer' target='_blank'>Hire Me</a>
  <a className='btn btn-cv' href={resume} download="Pooja.pdf">My Resume</a>
</motion.div>

    </div>
   </div>
    </>
  )
}

export default Home