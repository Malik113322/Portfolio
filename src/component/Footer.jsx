import React from "react";
import Me2 from "../assets/Me2.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 position-relative ">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* About Me */}
          <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img
              src={Me2}
              alt="Founder"
              className="rounded-circle mb-3 shadow"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="fw-bold">Danish</h4>
            <p className="text-light small mb-0 " style={{ maxWidth: "350px"}}>
              Passionate MERN stack & React Native developer. I enjoy building
              modern, scalable, and user-friendly applications to solve real
              problems.
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-6 text-center text-md-end">
            <h5 className="fw-semibold mb-3">Connect with me</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-opacity"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-opacity"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-opacity"
              >
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <small className="text-muted">
            © {new Date().getFullYear()} Danish | All Rights Reserved
          </small>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#home"
        className="position-absolute end-0 bottom-0 m-4 btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center"
        style={{ width: "45px", height: "45px" }}
      >
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
