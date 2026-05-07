import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>

      <AnimatePresence>

        {
          loading && (

            <motion.div
              className="loader"

              initial={{ opacity: 1 }}

              exit={{
                opacity: 0,
                y: -100
              }}

              transition={{
                duration: 1
              }}
            >

              <motion.h1
                className="loader-title"

                initial={{
                  opacity: 0,
                  scale: 0.7
                }}

                animate={{
                  opacity: 1,
                  scale: 1
                }}

                transition={{
                  duration: 1
                }}
              >
                Siddharth
              </motion.h1>

              <motion.div
                className="loader-line"

                initial={{
                  width: 0
                }}

                animate={{
                  width: "220px"
                }}

                transition={{
                  duration: 1.5,
                  delay: 0.4
                }}
              />

            </motion.div>
          )
        }

      </AnimatePresence>

      {
        !loading && (

          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        )
      }

    </>
  );
}

export default App;