import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !msg) {
    toast.error("Please provide all details!", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return;
  }

  try {
    const res = await axios.post('/api/v1/portfolio', { name, email, msg });

    if (res.data.success) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Clear form fields
      setName('');
      setEmail('');
      setMsg('');
    } else {
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }

  } catch (error) {
    console.error("Axios Error:", error);
    toast.error("Something went wrong. Please try again later!", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
};

  return (
    <Container className='contact' id='contact'>
      <div className="card card0 border-0">
        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-md-6">
            <div className="card1">
              <img
                src="https://delhifashionclub.org/wp-content/uploads/2018/10/contact12.png"
                alt="contact"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <motion.div
              className="card2 d-flex flex-column justify-content-center"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h6>
                Contact with
                <BsLinkedin color='blue' className='ms-2' size={30} />
                <FaGithub color='black' className='ms-2' size={30} />
                <SiGmail color="#EA4335" className="ms-2" size={30} />
              </h6>

              <div className="line">
                <small className="or text-center">OR</small>
              </div>

              <div className="row px-3">
                <input
                  type="text"
                  name='name'
                  placeholder='Write your Name'
                  className='mb-3'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <input
                  type="email"
                  name='email'
                  placeholder='Enter your email'
                  className='mb-3'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <textarea
                  name='msg'
                  placeholder='Enter your message'
                  className='mb-3'
                  rows="4"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <button type='button' onClick={handleSubmit}>SEND MESSAGE</button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Contact;
