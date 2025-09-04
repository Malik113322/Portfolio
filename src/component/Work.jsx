import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import data from "../assets/data.json";

const Work = () => {
  return (
    <div
      id="work"
      className="container py-5"
      style={{ minHeight: "100vh" }}
    >
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">
          <span
            style={{
              background: "linear-gradient(90deg, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Work
          </span>
        </h2>
        <p className="text-muted">Some of my recent projects & demos</p>
      </div>

      {/* Bootstrap Carousel */}
      <div
        id="portfolioCarousel"
        className="carousel slide w-100 w-lg-75 mx-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4 shadow-lg">
          {data.projects.map((i, index) => (
            <div
              key={i.title}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex flex-column flex-md-row align-items-center bg-white rounded-4 p-4">
                {/* Image */}
                <div className="col-md-6 text-center">
                  <img
                    src={i.imgSrc}
                    alt={i.title}
                    className="img-fluid rounded-4 shadow"
                    style={{
                      maxHeight: "380px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="col-md-6 ps-md-4 mt-4 mt-md-0 text-center text-md-start">
                  <h3 className="fw-bold text-gradient">{i.title}</h3>
                  <p className="text-muted">{i.description}</p>
                  <a
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient px-4 py-2 mt-2"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Arrows */}
        <button
          className="carousel-control-prev custom-arrow"
          type="button"
          data-bs-target="#portfolioCarousel"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className="carousel-control-next custom-arrow"
          type="button"
          data-bs-target="#portfolioCarousel"
          data-bs-slide="next"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      {/* Extra Styling */}
      <style>{`
        .btn-gradient {
          background: linear-gradient(90deg, #007bff, #00c6ff);
          color: #fff;
          border: none;
          border-radius: 30px;
          transition: 0.3s ease;
        }
        .btn-gradient:hover {
          background: linear-gradient(90deg, #0056b3, #0094cc);
        }

        .text-gradient {
          background: linear-gradient(90deg, #ff512f, #dd2476);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .custom-arrow {
          width: 50px;
          height: 50px;
          background: rgba(0,0,0,0.5);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-arrow span {
          font-size: 2rem;
          color: #fff;
        }
        .custom-arrow:hover {
          background: linear-gradient(90deg, #ff512f, #dd2476);
        }
      `}</style>
    </div>
  );
};

export default Work;
