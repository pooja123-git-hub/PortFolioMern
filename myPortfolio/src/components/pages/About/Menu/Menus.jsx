import React from "react";
import "./menus.css";
import { motion } from "framer-motion";

import { FcHome, FcBusinessContact, FcAbout } from "react-icons/fc";
import { MdSchool, MdWork, MdBuild } from "react-icons/md";

import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile picture animation */}
          <motion.div
            className="navbar-profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://media.istockphoto.com/id/2014684899/vector/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face.jpg?s=612x612&w=0&k=20&c=D-dk9ek0_jb19TiMVNVmlpvYVrQiFiJmgGmiLB5yE4w="
              alt="profile"
            />
          </motion.div>

          {/* Nav items animation */}
          <motion.div
            className="nav-items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome /> Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout color="orange" /> About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdSchool color="green" /> Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdBuild color="navy" /> Tech Stack
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdWork color="yellow" /> Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact /> Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          {/* Small toggle menu */}
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link" title="Home">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" title="About">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" title="Education">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdSchool color="green" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" title="Tech Stack">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdBuild color="navy" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" title="Projects">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdWork color="yellow" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" title="Contact">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
