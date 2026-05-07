import React from "react";
import "./Footer.css";

import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="footer">

      {/* TOP */}

      <div className="footer-top">

        <h2>
          Let's Build Something Amazing
        </h2>

        <a
          href="/resume.pdf"
          download="Siddharth_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

      </div>

      {/* SOCIALS */}

      <div className="footer-socials">

        {/* GITHUB */}

        <a
          href="https://github.com/skpandya1212"

          target="_blank"

          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* LINKEDIN */}

        <a
          href="https://www.linkedin.com/in/pandya-sidhdharth-k-3337283aa"

          target="_blank"

          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* INSTAGRAM */}

        <a
          href="https://www.instagram.com/sidhdharth_12__"

          target="_blank"

          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Pandya Sidhdharth. All Rights Reserved.
        </p>

        <button
          onClick={scrollTop}
          className="top-btn"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;