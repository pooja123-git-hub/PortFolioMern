import React from 'react';
import { Container } from 'react-bootstrap';
import './techStack.css';
import { TechStackList } from '../../utils/TechStackList';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <>
      <Container className="techstack" id="tech">
        <h2 className="col-12 mt-3 mb-1 text-uppercase">Technologies Stack</h2>
        <hr />
        <motion.p
          className="text-center para"
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.1, 0.95, 1.05, 1] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          👉Introducing programming languages, Framework, databases, front-end, back-end tools and APIs
        </motion.p>
      </Container>

      <Container className="tech-card">
        <div className="row">
          {TechStackList.map((tech, index) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1, // stagger effect
              }}
              viewport={{ once: true }} // triggers only once when in view
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex-justify-content">
                      <div className="align-self-center"></div>
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default TechStack;
