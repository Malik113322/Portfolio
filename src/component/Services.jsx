import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid } from "react-icons/ai";

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="services" className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="fw-bold text-center mb-5 display-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {/* Web Development */}
          <motion.div
            className="col-md-5 col-sm-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card text-center shadow-sm border-0 h-100 p-4 rounded-4">
              <AiFillIeCircle className="text-primary mb-3" size={50} />
              <h5 className="fw-bold">Web Development</h5>
              <p className="text-muted mb-0">
                Building responsive, modern, and scalable web applications with
                React, Node.js, and cutting-edge technologies.
              </p>
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="col-md-5 col-sm-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card text-center shadow-sm border-0 h-100 p-4 rounded-4">
              <AiFillAndroid className="text-success mb-3" size={50} />
              <h5 className="fw-bold">Mobile Development</h5>
              <p className="text-muted mb-0">
                Creating cross-platform mobile apps with React Native, ensuring
                top performance and user-friendly experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
