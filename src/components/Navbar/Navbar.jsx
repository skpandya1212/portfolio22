import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import profile from "../../assets/profile.png";


function Navbar() {

  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={scrolled ? "navbar navbar-scroll" : "navbar"}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT */}
      <div className="nav-left">
        <motion.img
          src={profile}
          alt="profile"
          className="nav-profile"
          whileHover={{ scale: 1.08 }}
        />

        <div className="nav-text">
          <span>Hello, I'm</span>
          <h2>Sidhdharth</h2>
        </div>
      </div>

      {/* MENU */}
      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <motion.a
          href="/resume.pdf"
          download="Sidhdharth_Resume.pdf"
          className="cv-btn"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>

        <div className="hamburger" onClick={() => setMenu(!menu)}>
          ☰
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;