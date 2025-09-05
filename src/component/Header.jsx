import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm py-3 px-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-muted fw-bold fs-4" href="#home">
          Portfolio<span className="text-primary">.</span>
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="d-md-none border-0 bg-transparent fs-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto gap-3 text-center text-md-start ">
            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
           
            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Email Button */}
          <div className="text-center text-md-start mt-3 mt-md-0">
            <a
              href="mailto:danishyt96@gmail.com"
              className="btn btn-primary d-flex align-items-center gap-2 px-4 mx-auto mx-md-0"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineMail /> Email
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
