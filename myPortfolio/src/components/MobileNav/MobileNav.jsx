import React, { useEffect, useState } from 'react'
import './mobilenav.css'





import {
  FcHome,
  FcBusinessContact,
  FcAbout
} from 'react-icons/fc';
import {
  MdSchool,
  MdWork,
  MdBuild
} from 'react-icons/md';

import { Link } from 'react-scroll';
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineMenuFold } from 'react-icons/ai';
const MobileNav = () => {
    const[open,setOpen]=useState(false);
    //handle open
    const handleOpen=()=>{
        setOpen(!open);
    }
    //handle menu
    const handleMenuClick=()=>{
        setOpen(false);
    }
  return (
   <>
 <div className="mobile-nav">
    <div className="mobile-nav-header">
        
        {open ?(<AiOutlineMenuFold className='mobile-nav-icon' size={30} onClick={handleOpen}/>):(<CgMenuGridR className='mobile-nav-icon' size={30} onClick={handleOpen}/>)}
       
        <span className='mobile-nav-title'>My PortFolio App</span>
    </div>
    {open && <div className="mobile-nav-menus">
         <div className="nav-item">
                      <div className="nav-link">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={100}onClick={handleMenuClick}>
                          <FcHome /> Home
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <FcAbout /> About
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <MdSchool /> Education
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="tech" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <MdBuild /> Tech Stack
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <MdWork /> Projects
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <FcBusinessContact /> Contact
                        </Link>
                      </div>
                    </div>
    </div>}
    
 </div>
   </>
  )
}

export default MobileNav
