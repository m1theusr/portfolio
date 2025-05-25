import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profileImg from '../assets/perfil-mobile.jpg';
import homeImg from '../assets/home-eu.png';
import SystemStatus from '../components/system/SystemStatus';
import Typewriter from '../components/Typewriter';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="relative text-white flex items-center justify-between h-screen w-11/12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:items-start">
        <motion.div
          className="top-24 inset-x-0 flex justify-center md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-32 h-32 rounded-full flex items-center justify-center">
            <img src={profileImg} className="w-24 h-24 rounded-full object-cover" alt="Profile" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col text-center md:text-left"
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

          <motion.div 
            className="relative w-full max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full">
              <div className="text-xl font-medium text-white text-center md:text-left leading-relaxed min-h-[120px] md:min-h-[80px]">
                <Typewriter 
                  text="Hi, welcome to my portfolio, feel free to explore. Contact me through my socials."
                  delay={60}
                  className="text-gradient inline-block"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center md:items-start md:pl-5 space-y-4 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center space-x-6 mt-2">
            <a href="https://www.linkedin.com/in/m1theusrodrigues" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(251,255,0)] transition-colors duration-200">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.5h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
              </svg>
            </a>
            <a href="https://www.github.com/m1theusr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(251,255,0)] transition-colors duration-200">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.263.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.304.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.522.105-3.17 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.04.137 3 .405 2.295-1.552 3.3-1.23 3.3-1.23.645 1.648.24 2.867.105 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21v3.28c0 .315.195.69.8.575 4.765-1.58 8.2-6.08 8.2-11.38 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://cal.com/m1theusr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(251,255,0)] transition-colors duration-200">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 3.6c.992 0 1.8.808 1.8 1.8s-.808 1.8-1.8 1.8-1.8-.808-1.8-1.8.808-1.8 1.8-1.8zm3.6 14.4H8.4v-1.2h1.2V9.6H8.4V8.4h4.8v8.4h1.2v1.2z"/>
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

      <div className="hidden md:flex items-center justify-end">
        <img src={homeImg} className="w-1/2 object-cover" alt="Profile" />
      </div>
    </div>
  );
};

export default HomePage;