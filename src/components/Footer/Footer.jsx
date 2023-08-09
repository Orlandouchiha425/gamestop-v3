import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white position-sticky"
      style={{ backgroundColor: "#1c2331" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connected with me: </span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a
            href="https://twitter.com/OrlandoValade18"
            className="text-white me-4"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="https://www.linkedin.com/in/orlandovaladez/"
            className="text-white me-4"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Orlandouchiha425"
            className="text-white me-4"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">GameStop</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />

              <p>
                Here's a bit about me: I have a passion for coding and I enjoy
                learning every day. With over 2 years of coding experience, I
                also have a love for playing video games. This passion inspired
                me to work on creating this website. 👨‍💻
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-white">
                  Video Games
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Coming soon: Chat bot with Python
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="/logout" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="/signup" className="text-white">
                  Sign Up
                </a>
              </p>
              <p>
                <a href="/login" className="text-white">
                  login
                </a>
              </p>
              <p>
                <a
                  href="https://docs.google.com/document/d/1QfFMl11ydzrJ28eoK8awNVes_aBP3EcT/edit?usp=drive_link"
                  target="_blank"
                  className="text-white"
                >
                  Resume
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Orlando Valadez
              </p>
              <p>
                <i className="fas fa-home mr-3"></i> Kokomo Indiana, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3 text-white"></i>
                <a
                  href="mailto:valadez425@gmail.com"
                  target="_blank"
                  className="text-white"
                >
                  valadez425@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>317-220-5368
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          className="text-white"
          href="https://orlandouchiha425.github.io/portfolio-rebuilt/"
        >
          Orlando Valadez
        </a>
      </div>
      ={" "}
    </footer>
  );
};

export default Footer;
