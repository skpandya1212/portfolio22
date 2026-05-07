import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Projects.css";

import project1 from "../../assets/projects/project1.png";

import cart1 from "../../assets/cartify/cart1.png"
import cart2 from "../../assets/cartify/cart2.png";
import cart3 from "../../assets/cartify/cart3.png";
import cart4 from "../../assets/cartify/cart4.png";
import cart5 from "../../assets/cartify/cart5.png";
import cart6 from "../../assets/cartify/cart6.png";
import cart7 from "../../assets/cartify/cart7.png";
import cart8 from "../../assets/cartify/cart8.png";
import cart9 from "../../assets/cartify/cart9.png";
import cart10 from "../../assets/cartify/cart10.png";

function Projects() {

  const cartifyImages = [
    cart1,
    cart2,
    cart3,
    cart4,
    cart5,
    cart6,
    cart7,
    cart8,
    cart9,
    cart10
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === cartifyImages.length - 1
          ? 0
          : prev + 1
      );

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  const projects = [

    {
      image: project1,

      title: "Modern Portfolio",

      description:
        "Responsive personal portfolio with modern UI, animations, and premium glassmorphism design.",

      tech: ["React", "Framer Motion", "CSS", "Vite"],

      github: "https://github.com/skpandya1212/portfolio22",

      live: "#",

      single: true
    },

    {
      images: cartifyImages,

      title: "Cartify E-Commerce",

      description:
        "Full stack e-commerce platform with seller dashboard, authentication, product management, cart system, and responsive modern UI.",

      tech: ["React", "NodeJS", "MongoDB", "Express"],

      github: "https://github.com/skpandya1212/cartify",

      live: "https://cartify-gu4h.vercel.app/home",

      seller: "https://cartify-nine-chi.vercel.app/login",

      single: false
    }

  ];

  return (

    <section id="projects" className="projects">

      <motion.div
        className="projects-heading"

        initial={{ opacity: 0, y: 60 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}
      >

        <h5>MY PROJECTS</h5>

        <h2>
          Featured Work
        </h2>

      </motion.div>

      {/* GRID */}

      <motion.div
        className="projects-grid"

        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.18
            }
          }
        }}

        initial="hidden"

        whileInView="visible"

        viewport={{ once: true }}
      >

        {
          projects.map((project, index) => (

            <motion.div
              className="project-card"

              key={index}

              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  scale: 0.9
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }
              }}

              transition={{
                duration: 0.7,
                ease: "easeOut"
              }}

              whileHover={{
                y: -12
              }}
            >

              {/* IMAGE */}

              <div className="project-image">

                {
                  project.single ? (

                    <motion.img
                      src={project.image}
                      alt={project.title}

                      whileHover={{
                        scale: 1.08
                      }}

                      transition={{
                        duration: 0.5
                      }}
                    />

                  ) : (

                    <motion.img
                      src={project.images[currentSlide]}
                      alt="cartify"

                      className="slider-image"

                      key={currentSlide}

                      initial={{
                        opacity: 0
                      }}

                      animate={{
                        opacity: 1
                      }}

                      transition={{
                        duration: 0.8
                      }}
                    />

                  )
                }

              </div>

              {/* CONTENT */}

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* TECH TAGS */}

                <div className="tech-tags">

                  {
                    project.tech.map((tech, i) => (

                      <motion.span
                        key={i}

                        whileHover={{
                          scale: 1.08
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))
                  }

                </div>

                {/* BUTTONS */}

                <div className="project-buttons">

                  <motion.a
                    href={project.github}

                    target="_blank"

                    whileHover={{
                      scale: 1.04,
                      y: -3
                    }}
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.live}

                    target="_blank"

                    className="live-btn"

                    whileHover={{
                      scale: 1.04,
                      y: -3
                    }}
                  >
                    Live Demo
                  </motion.a>

                </div>

                {
                  project.seller && (

                    <motion.a
                      href={project.seller}

                      target="_blank"

                      className="seller-btn"

                      whileHover={{
                        scale: 1.03,
                        y: -3
                      }}
                    >
                      Seller Panel
                    </motion.a>

                  )
                }

              </div>

            </motion.div>
          ))
        }

      </motion.div>

    </section>
  );
}

export default Projects;