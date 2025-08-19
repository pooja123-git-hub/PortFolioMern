import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./project.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Container className="projects" id="project">
      <h2 className="col-12 mt-3 mb-1 text-uppercase heading2">
        Top Recent Projects
      </h2>
      <hr />
      <motion.p
        className="text-center para"
        initial={{ scale: 1 }}
        whileInView={{ scale: [1, 1.1, 0.95, 1.05, 1] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        👉Here are my top 3 recent projects with live links and source code
      </motion.p>
      <Row className="gx-4 gy-4">
        {/* 1. Full Stack App */}
        <Col md={4}>
          <motion.div
            className="project-card card h-100 rounded"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-image">
              <span className="card-notify-badge">Full Stack App</span>
              <img
                src="https://www.esdesignbarcelona.com/sites/default/files/img/6_pasos_para_crear_un_portfolio_digital_y_todo_lo_que_debe_incluir_2.png"
                alt="project1"
              />
            </div>
            <div>
              <div className="card-image-overly">
                <span className="card-detail-badges">MongoDB</span>
                <span className="card-detail-badges">Express.Js</span>
                <span className="card-detail-badges">React</span>
                <span className="card-detail-badges">Node.js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Portfolio Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/pooja123-git-hub/PortFolioMern"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </Col>

        {/* 2. Frontend WebApp */}
        <Col md={4}>
          <motion.div
            className="project-card card h-100 rounded"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-image">
              <span className="card-notify-badge">Frontend WebApp</span>
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2016-11/15/full/1479216270-9932.jpg"
                alt="project2"
              />
            </div>
            <div>
              <div className="card-image-overly">
                <span className="card-detail-badges">React</span>
                <span className="card-detail-badges">React-Router-Dom</span>
                <span className="card-detail-badges">Redux Toolkit</span>
                <span className="card-detail-badges">Bootstrap/CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">E-commerce</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/pooja123-git-hub/React-Basic-Project"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </Col>

        {/* 3. Game App */}
        <Col md={4}>
          <motion.div
            className="project-card card h-100 rounded"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-image">
              <span className="card-notify-badge">Game App</span>
              <img
                src="https://thumb.ac-illust.com/f6/f6145551c198e7b4791dd5ccaa38243a_t.jpeg"
                alt="project3"
              />
            </div>
            <div>
              <div className="card-image-overly">
                <span className="card-detail-badges">HTML</span>
                <span className="card-detail-badges">CSS</span>
                <span className="card-detail-badges">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Game - Rock Paper Scissors</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/pooja123-git-hub/Game-App-Rock-Paper-Scissors-"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
