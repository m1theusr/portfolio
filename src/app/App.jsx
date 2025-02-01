import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import profileImg from '../assets/perfil-mobile.jpg';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="home"
        className="relative bg-cover bg-black bg-center text-white h-screen flex items-center parallax background-noise"
        style={{ backgroundImage: "url('./src/assets/hero-bg1.png')" }}
      >
        <div className="max-w-7xl container mx-auto px-1">
          <motion.div
            className="absolute top-24 inset-x-0 flex justify-center md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-32 h-32 rounded-full flex items-center justify-center">
              <img src={profileImg} className="w-24 h-24 rounded-full object-cover" alt="Profile" />
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col justify-center h-full px-4 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="leading-[1.1] pb-3 text-6xl sm:text-5xl md:text-7xl font-bold mb-5 text-gradient"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Matheus Rodrigues
            </motion.h1>

            <motion.p
              className="relative flex flex-col sm:flex-row items-center md:items-start md:justify-start text-2xl font-bold text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-gradient mr-2">I'm</span>
              <span className="text-gradient overflow-hidden whitespace-nowrap max-w-[13ch] animate-typing">
                DevOps | SRE
              </span>
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center md:items-start md:pl-5 space-y-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/m1theusrodrigues" target="_blank" rel="noopener noreferrer" aria-label="Find us on LinkedIn">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.5h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                </svg>
              </a>
              <a href="https://www.github.com/m1theusr" target="_blank" rel="noopener noreferrer" aria-label="Find us on GitHub">
                <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.263.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.304.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.522.105-3.17 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.04.137 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.648.24 2.867.105 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21v3.28c0 .315.195.69.8.575 4.765-1.58 8.2-6.08 8.2-11.38 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>
          <Link
            to="aboutMe"
            smooth={true}
            duration={500}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <div className="animate-bounce text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
