import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiC,
} from "react-icons/si";


function Skills() {

  const skills = [

    {
      icon: <FaHtml5 />,
      name: "HTML",
      color: "#ff6b00"
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS",
      color: "#0077ff"
    },

    {
      icon: <SiJavascript />,
      name: "JavaScript",
      color: "#ffd500"
    },

    {
      icon: <FaReact />,
      name: "React",
      color: "#61dafb"
    },

    {
      icon: <SiC />,
      name: "C",
      color: "#7c83ff"
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "#00ff95"
    },

    {
      icon: <FaNodeJs />,
      name: "NodeJS",
      color: "#7fff00"
    },

    {
      icon: <FaGithub />,
      name: "GitHub",
      color: "#d1d5db"
    },

    {
      icon: <SiExpress />,
      name: "Express",
      color: "#ffffff"
    },

    {
      icon: <FaFileWord />,
      name: "MS Word",
      color: "#0070c0"
    },

    {
      icon: <FaFilePowerpoint />,
      name: "PowerPoint",
      color: "#ff6600"
    },

    {
      icon: <FaFileExcel />,
      name: "Excel",
      color: "#00c853"
    },

  ];

  return (

    <section id="skills" className="skills">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h5>MY SKILLS</h5>

        <h2>
          Technologies I Use
        </h2>

      </motion.div>

      {/* GRID */}

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >

        {
          skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              style={{
                "--clr": skill.color
              }}

              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  scale: 0.9
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }
              }}

              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}

              whileHover={{
                y: -12,
                scale: 1.04
              }}
            >

              <motion.div
                className="skill-inner"
                whileHover={{
                  boxShadow:
                    `0 0 25px ${skill.color}`
                }}
              >

                <motion.div
                  className="skill-icon"

                  whileHover={{
                    scale: 1.2,
                    rotate: 5
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {skill.icon}
                </motion.div>

                <h3>{skill.name}</h3>

              </motion.div>

            </motion.div>
          ))
        }

      </motion.div>

    </section>
  );
}

export default Skills;