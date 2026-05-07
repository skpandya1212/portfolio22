import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import profile from "../../assets/profile.png";

function About() {

  return (

    <section id="about" className="about">

      {/* LEFT */}

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <motion.div
          className="about-image-card"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
        >

          <motion.img
            src={profile}
            alt="profile"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </motion.div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h5>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Passionate Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I specialize in creating modern,
          responsive, and scalable web
          applications using React, Node.js,
          Express, and MongoDB.

          I enjoy building premium UI designs,
          solving real-world problems,
          and continuously learning new
          technologies.
        </motion.p>

        {/* STATS */}

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >

          <motion.div
            className="stat-card"
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            transition={{ duration: 0.3 }}
          >

            <h3>10+</h3>

            <span>Projects</span>

          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            transition={{ duration: 0.3 }}
          >

            <h3>1+</h3>

            <span>Years Learning</span>

          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            transition={{ duration: 0.3 }}
          >

            <h3>100%</h3>

            <span>Dedication</span>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default About;