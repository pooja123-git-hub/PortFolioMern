import React from 'react'
import Layout from './components/layout/Layout'
import About from './components/pages/About/about'
import { Container } from 'react-bootstrap'
import TechStack from './components/techStack/TechStack'
import Projects from './components/pages/projects/Projects'
import Education from './components/pages/Education/Education'
import Contact from './components/pages/contact/Contact'
import Footer from './components/pages/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext'
import MobileNav from './components/MobileNav/MobileNav'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [theme]=useTheme();
  return (
  <>
  <div id={theme}>
    <ToastContainer/>
  <MobileNav/>
  
  <Layout/>
  <Container><About/>
  <Education/>
  <TechStack/>
<Projects/>
<Contact/>

</Container>
<Footer/>
</div>
      <ScrollToTop smooth color="#f29f67" style={{backgroundColor:"#1e1e2c", borderRadius:"100px", textAlign:"center"}}/>
    </>
  )
}

export default App



