import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Me from "../assets/logo.png"; // replace with your image

const Home = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: "0", opacity: 1 },
      transition: { duration: 0.8 },
    },
    button: {
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay: 0.2 },
    },
    image: {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <div
      id="home"
      className="container-fluid vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e9f2ff 40%, #d6e5ff 100%)",
      }}
    >
      <div className="row w-100 align-items-center">
        {/* Left Content */}
        <div className="col-md-6 text-center text-md-start p-5">
          <motion.h1
            {...animations.h1}
            className="fw-bold display-3 mb-3 text-dark"
          >
            Hi, I Am <br /> <span className="text-primary">Danish</span>
          </motion.h1>

          <h4 className="mb-4 text-secondary fw-normal">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer 💻",
                  "React Native Enthusiast 📱",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                wrapperClassName: "fw-semibold text-dark",
              }}
            />
          </h4>

          <motion.div
            {...animations.button}
            className="d-flex gap-3 justify-content-center justify-content-md-start"
          >
            <a
              href="mailto:danishyt96@gmail.com"
              className="btn btn-primary btn-lg shadow-sm px-4"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="btn btn-outline-dark btn-lg shadow-sm px-4"
            >
              Projects <BsArrowUpRight className="ms-2" />
            </a>
          </motion.div>

          <div className="mt-5">
            <h6 className="fw-bold text-dark">📧 Contact Me</h6>
            <p className="text-muted small mb-0">danishyt96@gmail.com</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center p-5">
          <motion.img
            src={Me}
            alt="Danish"
            className="img-fluid rounded-circle shadow-lg border border-3 border-light"
            style={{
              maxWidth: "400px", // smaller on desktop
              width: "80%", // responsive on mobile
            }}
            {...animations.image}
          />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
        <BsChevronDown size={30} className="text-primary animate-bounce" />
      </div>
    </div>
  );
};

export default Home;
