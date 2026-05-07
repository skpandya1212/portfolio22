import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(

      "service_ger633p",

      "template_hyj930g",

      form.current,

      "K6oHEINPpS81sHUYP"
    )

    .then(() => {

      setLoading(false);

      setSuccess("Message Sent Successfully!");

      form.current.reset();

      setTimeout(() => {
        setSuccess("");
      }, 4000);

    })

    .catch(() => {

      setLoading(false);

      setSuccess("Failed To Send Message");

    });
  };

  return (

    <section id="contact" className="contact">

      {/* LEFT */}

      <motion.div
        className="contact-left"

        initial={{ opacity: 0, x: -80 }}

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
          CONTACT ME
        </motion.h5>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7, delay: 0.1 }}

          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ duration: 1, delay: 0.2 }}

          viewport={{ once: true }}
        >
          Have a project idea or want to
          collaborate? Feel free to contact me.
          I’m always open to discussing
          new opportunities and creative ideas.
        </motion.p>

        {/* SOCIALS */}

<motion.div
  className="social-icons"

  initial={{ opacity: 0, y: 30 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.8, delay: 0.3 }}

  viewport={{ once: true }}
>

  {/* GITHUB */}

  <motion.a
    href="https://github.com/skpandya1212"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -8,
      scale: 1.08
    }}

    whileTap={{
      scale: 0.95
    }}
  >
    <FaGithub />
  </motion.a>

  {/* LINKEDIN */}

  <motion.a
    href="https://www.linkedin.com/in/pandya-sidhdharth-k-3337283aa"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -8,
      scale: 1.08
    }}

    whileTap={{
      scale: 0.95
    }}
  >
    <FaLinkedin />
  </motion.a>

  {/* INSTAGRAM */}

  <motion.a
    href="https://www.instagram.com/sidhdharth_12__"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -8,
      scale: 1.08
    }}

    whileTap={{
      scale: 0.95
    }}
  >
    <FaInstagram />
  </motion.a>

</motion.div>      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="contact-right"

        initial={{ opacity: 0, x: 80 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}
      >

        <motion.form
          ref={form}

          onSubmit={sendEmail}

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.2 }}

          viewport={{ once: true }}
        >

          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"

            required

            whileFocus={{
              scale: 1.02
            }}
          />

          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"

            required

            whileFocus={{
              scale: 1.02
            }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="6"

            required

            whileFocus={{
              scale: 1.02
            }}
          ></motion.textarea>

          <motion.button
            type="submit"

            whileHover={{
              scale: 1.03,
              y: -4
            }}

            whileTap={{
              scale: 0.95
            }}
          >
            {
              loading
                ? "Sending..."
                : "Send Message"
            }
          </motion.button>

          {
            success && (
              <p className="success-message">
                {success}
              </p>
            )
          }

        </motion.form>

      </motion.div>

    </section>
  );
}

export default Contact;