import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div
        className="about"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 1 }}
      >
        <div className="row">
          <motion.div
            className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 150, duration: 0.8 }}
          >
            <img
              src="https://media.istockphoto.com/id/2014684899/vector/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face.jpg?s=612x612&w=0&k=20&c=D-dk9ek0_jb19TiMVNVmlpvYVrQiFiJmgGmiLB5yE4w="
              alt="profile"
            />
          </motion.div>

          <motion.div
            className="col-md-6 about-content"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
          >
            <h1>About me</h1>
            <div className="about-me">
              <p>
                I’m an aspiring <strong>Full Stack Developer</strong> with a strong focus on the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, and Node.js). I enjoy turning complex problems into clean, efficient code and building dynamic web applications that offer seamless user experiences.
                <br /><br />
                With a solid understanding of both frontend and backend technologies, I love working on complete applications — from designing intuitive interfaces with React to building powerful APIs using Node.js and Express. I am passionate about learning new tools, following best practices, and constantly improving my skills.
                <br /><br />
                I’m currently looking for opportunities to contribute to real-world projects, grow alongside a collaborative team, and become a confident, job-ready developer. Let’s build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
