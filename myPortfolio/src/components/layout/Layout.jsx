import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import Home from '../pages/Home/Home'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai';
import './layout.css';
import Menus from '../pages/About/Menu/Menus';
const Layout = () => {
    const [toggle,setToggle]=useState(true);
    const HandleToggle=()=>{
        setToggle(!toggle);
    }
  return (
    <>
    
    <div className="sidebar-section">
        <div className={ toggle ?"sidebar-toggle sidebar":"sidebar"}>
            <div className="sidebar-toggle-icons">
                
                <p onClick={HandleToggle}>
                    {
                        toggle ?(<AiOutlineDoubleLeft size={30}/>):(<AiOutlineDoubleRight size={30}/>)
                    }
                    
                </p>
                
            </div>
             <Menus toggle={toggle}/>
        </div>
  
    <Container>
        <Home/>
    </Container>
      </div>
    </>
  )
}

export default Layout
